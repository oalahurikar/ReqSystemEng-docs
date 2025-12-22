# Quick Start

Get started with ReqDrivenDev in 5 minutes. This tutorial walks you through creating your first Job, Scenario, and Requirement.

## Prerequisites

- ReqDrivenDev tool installed and running
- Basic understanding of requirements engineering

## Tutorial: Project SkyMule

Let's create a simple example: a motor control system for a drone.

### Step 1: Create a Job (JTBD)

A Job defines **why** a requirement exists - the customer value it provides.

1. Open the chat interface (left side of the screen)
2. Type: "The system must prevent motor overheating to ensure safe operation"
3. The system will suggest creating a Job node
4. Review the draft card and click "Add to Graph"

**Result:** You've created a Job that defines the high-level goal.

### Step 2: Create a Scenario

Scenarios define **when** constraints apply - the operational context.

1. In the chat, type: "High wind conditions during flight"
2. The system will suggest creating a Scenario node
3. Review and add to graph

**Result:** You've created a Scenario that represents a specific operational condition.

### Step 3: Create a Requirement

Now let's create a specific requirement linked to the Job.

1. In the chat, type: "Motor torque shall be less than 50Nm"
2. The system will:
   - Search for similar requirements
   - Suggest a parent (the Job you created)
   - Generate a draft requirement card
3. Review the draft card
4. If needed, refine: "Make it 60Nm"
5. Click "Add to Graph"

**Result:** You've created a requirement that:
- Is linked to your Job (the "why")
- Can be validated against constraints
- Is part of the knowledge graph

## What You've Learned

- How to create Jobs (the "why")
- How to create Scenarios (the "when")
- How to create Requirements (the "what")
- How the drafting loop works

## Next Steps

- **[UI Tour](ui-tour.md)** - Understand the split-screen interface
- **[Creating Requirements](guides/creating-requirements.md)** - Deep dive into the drafting loop
- **[Defining Context](guides/defining-context.md)** - Learn about Jobs and Scenarios

