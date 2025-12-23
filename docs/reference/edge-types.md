# Reference: Edge Types

This reference describes all edge types (relationships) available in ReqDrivenDev. Edges define how nodes connect in the knowledge graph.

## Derived_From

**What it is:** A parent-child relationship between requirements.

**When to use:** To create requirement hierarchies (L1 → L2 → L3, etc.).

**Example:** REQ-050 (Motor torque < 50Nm) derives from REQ-001 (Motor system requirements)

**Properties:**
- Creates requirement hierarchy
- Prevents circular dependencies
- Enables impact analysis (when parent changes, children may be affected)

**Direction:** Requirement → Requirement (child derives from parent)

---

## Verified_By

**What it is:** Links a requirement to a test case that verifies it.

**When to use:** To define how a requirement will be tested.

**Example:** REQ-050 (Motor torque < 50Nm) is verified by TEST-12 (Torque measurement test)

**Properties:**
- Links requirements to verification methods
- Enables traceability for validation
- Supports test coverage analysis

**Direction:** Requirement → TestCase

---

## Allocated_To

**What it is:** Links a requirement to a component that implements it.

**When to use:** To assign requirements to architectural components.

**Example:** REQ-050 (Motor torque < 50Nm) is allocated to COMP-05 (Motor Controller)

**Properties:**
- Links requirements to implementation
- Enables component-level requirement tracking
- Supports architecture-driven development

**Direction:** Requirement → Component

---

## Constrains

**What it is:** Links a constraint to a requirement or parameter it limits.

**When to use:** To apply constraints to specific requirements or parameters.

**Example:** CONSTRAINT-01 (Max torque < 50Nm) constrains REQ-050 (Motor torque requirement)

**Properties:**
- Applies constraint rules to requirements
- Enables constraint evaluation
- Context-aware (constraint applies in specific scenario)

**Direction:** Constraint → Requirement or Parameter

---

## Justifies

**What it is:** Links a Job to requirements that satisfy it.

**When to use:** To connect requirements to customer value (the "why").

**Example:** JOB-01 (Prevent motor overheating) justifies REQ-050 (Motor temperature < 80°C)

**Properties:**
- Links requirements to customer value
- Creates requirement-to-value traceability
- Supports value-driven development

**Direction:** Job → Requirement

---

## Defines_Context

**What it is:** Links a constraint to a scenario that defines when it applies.

**When to use:** To make constraints context-aware (scenario-specific).

**Example:** CONSTRAINT-01 (Max torque < 50Nm) defines context for SCENARIO-01 (Idle)

**Properties:**
- Makes constraints scenario-specific
- Enables context-aware validation
- Prevents silent physics conflicts

**Direction:** Constraint → Scenario

---

## Edge Type Summary

| Edge Type | From | To | Purpose |
|-----------|------|-----|---------|
| **Derived_From** | Requirement | Requirement | Parent-child hierarchy |
| **Verified_By** | Requirement | TestCase | Verification traceability |
| **Allocated_To** | Requirement | Component | Architecture allocation |
| **Constrains** | Constraint | Requirement/Parameter | Constraint application |
| **Justifies** | Job | Requirement | Value traceability |
| **Defines_Context** | Constraint | Scenario | Context definition |

## Graph Patterns

### Requirement Hierarchy

```
REQ-001 (L1: Motor System)
  └── Derived_From
      └── REQ-050 (L2: Motor Torque)
          └── Derived_From
              └── REQ-100 (L3: Torque Control)
```

### Constraint Application

```
SCENARIO-01 (Idle)
  └── Defines_Context
      └── CONSTRAINT-01 (Max torque < 50Nm)
          └── Constrains
              └── REQ-050 (Motor torque requirement)
```

### Value Traceability

```
JOB-01 (Prevent Overheating)
  └── Justifies
      └── REQ-050 (Temperature < 80°C)
          └── Allocated_To
              └── COMP-05 (Motor Controller)
```

## Next Steps

- **[Node Types](node-types.md)** - Understand what nodes can be connected
- **[Creating Requirements](../guides/creating-requirements.md)** - How to create edges
- **[Defining Context](../guides/defining-context.md)** - Using Defines_Context edges

