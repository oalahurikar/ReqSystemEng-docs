# Reference: Node Types

This reference describes all node types available in ReqDrivenDev. Each node type serves a specific purpose in the requirements graph.

## Requirement

**What it is:** A testable specification that defines what the system must do.

**When to use:** For functional requirements, performance requirements, safety requirements, and any specification that defines system behavior.

**Example:** "Motor torque shall be less than 50Nm in Idle scenario."

**Properties:**
- Must have a parent (linked via Derived_From edge)
- Can be verified by TestCase nodes
- Can be allocated to Component nodes
- Can be constrained by Constraint nodes

**Relationships:**
- `Derived_From` → Other Requirement nodes (parent/child hierarchy)
- `Verified_By` → TestCase nodes
- `Allocated_To` → Component nodes
- `Constrained_By` ← Constraint nodes

---

## TestCase

**What it is:** A method for verifying that a requirement is satisfied.

**When to use:** To define how a requirement will be tested or validated.

**Example:** "Test motor torque by applying load and measuring output with torque sensor."

**Properties:**
- Must verify at least one Requirement
- Can include test conditions, expected results, and pass/fail criteria

**Relationships:**
- `Verifies` → Requirement nodes

---

## Component

**What it is:** An architectural block or subsystem that requirements can be allocated to.

**When to use:** To represent physical or logical components of the system architecture.

**Example:** "Motor Controller", "Flight Control System", "Power Management Unit"

**Properties:**
- Can have requirements allocated to it
- Can have child components (hierarchical structure)

**Relationships:**
- `Allocates` ← Requirement nodes
- `Contains` → Other Component nodes (hierarchical)

---

## Parameter

**What it is:** A specific physical or measurable value in the system.

**When to use:** To represent measurable quantities like voltage, current, temperature, etc.

**Example:** "Motor Torque", "Battery Voltage", "System Temperature"

**Properties:**
- Has units (Nm, V, °C, etc.)
- Can have constraints applied
- Can be referenced by requirements

**Relationships:**
- `Defines` ← Requirement nodes
- `Constrained_By` ← Constraint nodes

---

## Constraint

**What it is:** A rule that limits requirement or parameter values (Safety, Physical, or Logical).

**When to use:** To define boundaries that apply in specific scenarios.

**Example:** "Max current < 40A" (applies in "High Wind" scenario)

**Properties:**
- Has an evaluable expression (e.g., "Current < 40A")
- Must link to Scenario via Defines_Context edge
- Can constrain multiple Requirement or Parameter nodes
- Has a type: Safety, Physical, or Logical

**Relationships:**
- `Defines_Context` → Scenario nodes (defines when constraint applies)
- `Constrains` → Requirement or Parameter nodes

---

## Job

**What it is:** A Jobs-to-be-Done (JTBD) statement that defines customer value.

**When to use:** To define the "why" behind requirements - the high-level goal or customer value.

**Example:** "The system must prevent motor overheating to ensure safe operation"

**Properties:**
- High-level statement of customer value
- Can have multiple requirements that satisfy it
- Provides context for requirement hierarchy

**Relationships:**
- `Justifies` → Requirement nodes (the "why" for requirements)

---

## Scenario

**What it is:** An operational context or "world state" that defines when constraints apply.

**When to use:** To represent specific operational conditions like "Idle", "Climb", "High Wind", etc.

**Example:** "High Wind Conditions" (wind speed > 15 m/s, during flight)

**Properties:**
- Represents operational conditions
- Can have scenario variables (e.g., wind speed, temperature)
- Constraints link to scenarios to provide context
- Can inherit from other scenarios

**Relationships:**
- `Defines_Context` ← Constraint nodes (constraints apply in this scenario)
- `Inherits_From` → Other Scenario nodes (scenario inheritance)

---

## Node Type Summary

| Type | Purpose | Key Property |
|------|---------|--------------|
| **Requirement** | Defines what the system must do | Must have parent |
| **TestCase** | Defines how to verify | Verifies requirements |
| **Component** | Architectural block | Allocates requirements |
| **Parameter** | Measurable value | Has units |
| **Constraint** | Rule that limits values | Links to scenario |
| **Job** | Customer value (the "why") | Justifies requirements |
| **Scenario** | Operational context (the "when") | Defines constraint context |

## Next Steps

- **[Edge Types](edge-types.md)** - Understand relationships between nodes
- **[Creating Requirements](../guides/creating-requirements.md)** - How to create each type
- **[Defining Context](../guides/defining-context.md)** - Using Jobs and Scenarios

