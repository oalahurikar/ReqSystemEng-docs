---
title: "The Dependency Problem No ROS Tool Actually Solves"
pubDate: 2026-03-13
description: "Your robot works in Gazebo but fails on hardware. The root cause isn't sim-to-real — it's invisible engineering dependencies between layers that no tool in the ROS ecosystem tracks."
tags: ["robotics", "problem"]
---

Your robot works in Gazebo. It fails on hardware.

After a week of debugging, you trace it to the ground friction coefficient — set to 1.0 in sim, real grass is 0.4. Wheel odometry accuracy drops ~40%. Your EKF was leaning on that accurate odom. Now it relies on LiDAR scan-matching at 5.5Hz, which is too slow for 1.5 m/s travel. SLAM drifts. Navigation diverges. The robot drives into a fence post.

The friction value was set four months ago by your teammate during initial bring-up. They don't remember why. Your EKF gains, your SLAM tuning, and your Nav2 costmap inflation radius all depend on it. None of that was documented. You just spent a week reverse-engineering a thirty-second decision — and its blast radius across three layers of the stack.

This isn't a sim-to-real problem. It's a dependency tracking problem. And nothing in the ROS ecosystem solves it.

---

## The Pattern

If you've built anything with more than a couple of sensors and actuators on ROS 2, you've hit some version of this:

**The frame convention cliff.** You configure a BNO055 IMU. It outputs orientation in NED natively. Your nav stack expects ENU per REP-103. If your driver doesn't convert, the EKF fuses inverted orientation — poses are mirrored or rotated 90°. This isn't a gradual degradation. It's binary: correct frame = works, wrong frame = total failure. The decision of which convention your driver outputs was never recorded as a dependency.

**The shared bus you didn't budget for.** Your Jetson Nano has one USB 3.0 bus. An Intel RealSense D435 at 640×480 depth + RGB at 30fps consumes ~2.4 Gbps. Your RPLidar A1 runs over USB 2.0. Both share the internal hub. At 2.9 Gbps of 5 Gbps capacity, you're at 58% — fine on paper. But add USB overhead and the occasional spike, and you get dropped LiDAR scans. SLAM drifts intermittently. Looks like a software bug. Takes weeks to trace, because nobody tracked USB bandwidth as a shared resource budget.

**The timing budget nobody set.** At 1.5 m/s, 100ms of latency = 15cm of travel. For obstacle avoidance within 1m, your end-to-end pipeline — camera inference + EKF update + Nav2 planning + motor command — must complete in ≤200ms. YOLOv5-nano on a Jetson Nano takes 80-100ms. EKF at 30Hz adds 33ms. Nav2 DWB adds 20-40ms. Motor command adds 10ms. That's 143-183ms — 72-92% of your budget with zero margin. And those inference benchmarks were measured in isolation, not competing with RealSense and Nav2 for GPU cycles.

Nobody derived this budget from physics. Nobody tracked which components consume what fraction. The constraint exists whether or not you document it — but if you don't, you find out when the robot brakes 0.5m late.

Every one of these has the same root cause: a decision was made at one layer of the stack, other layers depend on that decision, and **nobody tracked the dependency.**

---

## What Exists — And What It Misses

ROS has excellent tooling for package dependencies and runtime infrastructure. But there's a category of dependency none of these tools touch.

| Tool | What it tracks | What it doesn't |
|------|---------------|-----------------|
| **rosdep** | Package dependencies (apt, pip) | Why you chose a specific sensor, or what assumes its specs |
| **package.xml** | Build-time dependencies | Runtime interface contracts between nodes |
| **Docker** | Environment isolation | Hides coupling instead of making it visible |
| **tf2** | Coordinate frame transforms | The *decision* of which convention to use, or why |
| **Foxglove** | Runtime data visualization | Post-hoc — shows you the failure, not the dependency that caused it |
| **URDF/XACRO** | Physical robot geometry | Why a parameter value was chosen, or what breaks if it changes |
| **CI/CD** | Build and test failures | "Perception engineer changed the frame — control engineer doesn't know" |

These tools manage **package dependencies** — what needs to compile and run together. They don't manage **engineering dependencies** — the decisions, assumptions, and parameter choices that cross domain boundaries.

rosdep knows your perception node needs OpenCV 4.8. It doesn't know your perception node assumes the LiDAR publishes at 5.5Hz in the `base_link` frame with a 360° FOV and ±1% range noise — and that your SLAM tuning, EKF gains, and Nav2 costmap all depend on those numbers.

---

## The Missing Layer

ROS gives you a computation graph: nodes, topics, services, actions. You can visualize it with `rqt_graph`, introspect it, debug it. It's one of the best things about the ecosystem.

But above the computation graph, there's an invisible layer: the **decision graph.** The engineering choices that determine *why* those nodes exist, *what* they assume about each other, and *what breaks* when an assumption changes.

Consider a concrete example. You're building an outdoor navigation robot. During one design session, you make these decisions:

- BNO055 IMU at 100Hz over I2C → EKF expects 100Hz IMU input in ENU frame
- RPLidar A1 scan-matching at 5.5Hz → EKF's second localization source, LiDAR noise ±1%
- RealSense D435 for obstacle detection → 80-100ms YOLO inference on shared GPU
- Gazebo friction at 1.0 → wheel odom accuracy that SLAM tuning depends on

Each decision has a blast radius. Change the IMU driver and the EKF breaks. Swap the LiDAR and SLAM, costmap, and obstacle avoidance break. Update the friction coefficient and EKF gains, SLAM tuning, and Nav2 behavior all shift.

`rqt_graph` shows you that `/imu/data` flows to `/ekf_node`. It doesn't show you that the EKF assumes 100Hz ENU input, that 100Hz requires I2C at 400kHz fast mode (not the Jetson's default 100kHz), and that if you get 30Hz instead, heading drift increases 3-4x between updates.

The computation graph tracks data flow. The decision graph tracks *assumptions and their consequences.* Nobody builds the second one.

---

## Why This Gets Worse, Not Better

The ROS ecosystem is growing fast — reported downloads up 85% year over year, with ROS 2 now over 90% of all ROS downloads. More packages, more integration surfaces, more implicit dependencies between layers maintained by different people.

Docker helps with environment isolation but makes the problem worse in a subtle way: it hides the coupling. Your teammate wants to switch from FastDDS to CycloneDDS for better performance. Sounds like a simple rmw swap. But CycloneDDS has different default QoS profiles — `robot_localization` has known issues where topics silently switch from reliable to best-effort. Nav2's DWB planner has reported latency spikes with CycloneDDS on Jetson Nano. And Gazebo Fortress uses its own DDS transport settings — if you change the robot side without matching Gazebo's config, topics may not connect across the sim boundary.

A "simple" middleware swap ripples through QoS contracts, latency budgets, and sim-real configuration across three domains. Nobody sees this coming because nobody tracks which decisions depend on which middleware behaviors.

As robots get more capable, the number of cross-domain dependencies grows quadratically. Ten components create 45 potential interactions. Twenty create 190. On a 2-3 person team with no systems engineer, the human brain stops tracking this reliably around 15 components. Most serious ROS robots passed that threshold long ago.

---

## What Would Actually Help

The robotics community doesn't need another package manager or another visualization tool. It needs something that tracks the *engineering* dependencies — the semantic interface contracts between layers:

- What frame convention did we choose, and why?
- What parameters assume which sensor specs?
- If I swap this LiDAR, what downstream assumptions break?
- What's the timing budget, who's consuming it, and what happens if inference takes 20ms longer?
- Why is the ground friction set to 1.0 in Gazebo, and what SLAM tuning depends on that value?

This is essentially an interface control problem. Aerospace and automotive have ICDs (Interface Control Documents) for this — but they're Word documents maintained by hand, and they rot within weeks. The robotics community has no equivalent, not even a manual one.

We're working on a tool that captures these engineering decisions from conversation and tracks the dependency graph above the computation graph — so when something changes, you see the blast radius before the robot drives into a fence post.

If this resonates, we're building that tool — and looking for robotics engineers with multi-sensor ROS 2 systems to test with. [Join the early access waitlist →](/robotics/#waitlist)

---

*If you've got a war story about an integration failure caused by an invisible dependency, I'd genuinely like to hear it.*
