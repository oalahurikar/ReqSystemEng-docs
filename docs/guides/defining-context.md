# Defining Context: Jobs and Scenarios

Context is critical in requirements engineering. ReqDrivenDev uses **Jobs** and **Scenarios** to provide this context.

## Jobs (JTBD): The "Why"

A Job defines **why** a requirement exists - the customer value it provides.

### What is a Job?

A Job is a high-level statement of customer value. It answers: "What job is the customer hiring this requirement to do?"

### When to Create a Job

Create a Job when you need to:

- Define the high-level goal for a set of requirements
- Link requirements to customer value
- Organize requirements by purpose

### Example

**Job:** "The system must prevent motor overheating to ensure safe operation"

This Job can have multiple requirements that satisfy it:
- "Motor temperature shall not exceed 80°C"
- "Thermal protection shall activate at 75°C"
- "Cooling system shall maintain temperature below 70°C"

### Creating Jobs

1. Type your Job statement in the chat
2. The system will suggest creating a Job node
3. Review the draft card
4. Add to graph

## Scenarios: The "When"

A Scenario defines **when** constraints apply - the operational context.

### What is a Scenario?

A Scenario represents a specific operational condition or "world state." Constraints can be linked to scenarios to provide context-aware validation.

### When to Create a Scenario

Create a Scenario when you need to:

- Define operational conditions (e.g., "High Wind", "Idle", "Climb")
- Link constraints to specific contexts
- Test requirements in different conditions

### Example

**Scenario:** "High Wind Conditions"

Constraints linked to this scenario:
- "Motor torque < 50Nm" (in high wind, torque must be limited)
- "System response time < 100ms" (in high wind, fast response is critical)

### Scenario Inheritance

Scenarios can inherit from other scenarios. For example:

- **Base Scenario:** "Cruise" (normal flight conditions)
- **Derived Scenario:** "High Wind" (inherits from Cruise, adds wind conditions)

This inheritance allows you to:
- Reuse constraints from base scenarios
- Add scenario-specific constraints
- Maintain consistency across related scenarios

### Creating Scenarios

1. Type your scenario description in the chat
2. The system will suggest creating a Scenario node
3. If inheriting, specify the parent scenario
4. Review and add to graph

## Linking Requirements to Context

### Requirements → Jobs

Every requirement should be linked to a Job (the "why"). This creates a hierarchy:

```
Job: "Prevent motor overheating"
  └── Requirement: "Motor temperature < 80°C"
  └── Requirement: "Thermal protection activates at 75°C"
```

### Constraints → Scenarios

Constraints should be linked to Scenarios (the "when"). This provides context:

```
Scenario: "Idle"
  └── Constraint: "Motor torque < 50Nm"

Scenario: "Climb"
  └── Constraint: "Motor torque < 100Nm"
```

The same requirement ("Motor torque = 60Nm") might:
- **Pass** in "Climb" scenario (60 < 100)
- **Fail** in "Idle" scenario (60 > 50)

## Best Practices

1. **Create Jobs First:** Define the "why" before creating requirements
2. **Use Specific Scenarios:** "High Wind at 15 m/s" is better than "Bad Weather"
3. **Link Everything:** Every requirement should have a Job, every constraint should have a Scenario
4. **Inherit When Possible:** Use scenario inheritance to avoid duplication

## Next Steps

- **[Creating Requirements](creating-requirements.md)** - How to create requirements linked to Jobs
- **[Constraint Management](constraint-management.md)** - How to work with constraints and scenarios
- **[Reference: Node Types](../reference/node-types.md)** - Complete reference for all node types

