# Constraint Management

Constraints are rules that limit requirement values. They can be Safety, Physical, or Logical constraints, and they apply in specific scenarios.

## What Are Constraints?

Constraints are rules that requirements must satisfy. They have three types:

- **Safety:** Prevents harm (e.g., "Max current < 40A to prevent overheating")
- **Physical:** Physics-based limits (e.g., "Motor torque < 100Nm")
- **Logical:** Business rules (e.g., "Response time < 200ms")

## Why Constraints Matter

Constraints prevent **silent physics conflicts**. For example:

- Without constraints: You might create "Motor torque = 120Nm" and "Max torque = 100Nm" without the system detecting a conflict
- With constraints: The system blocks "Motor torque = 120Nm" if it violates "Max torque < 100Nm"

## Creating Constraints

### Step 1: Define the Constraint

Type your constraint in the chat:

```
Max motor current shall be less than 40A
```

### Step 2: Link to Scenario

The system will ask which scenario this constraint applies to:

- **"Idle"** - Constraint applies during idle operation
- **"Climb"** - Constraint applies during climb
- **"High Wind"** - Constraint applies in high wind conditions

### Step 3: Review and Add

Review the constraint draft:
- **Expression:** The evaluable formula (e.g., "Current < 40A")
- **Type:** Safety, Physical, or Logical
- **Scenario:** The scenario it applies to

Click "Add to Graph" when ready.

## Constraint Evaluation

When you create or update a requirement, the system evaluates it against all relevant constraints:

1. **Find Constraints:** System finds constraints that apply to the requirement's scenario
2. **Evaluate:** System checks if requirement value violates constraint
3. **Block or Allow:** If violation detected, requirement is blocked with error message

### Example

**Constraint:** "Max torque < 50Nm" (applies in "Idle" scenario)

**Requirement:** "Motor torque = 60Nm" (in "Idle" scenario)

**Result:** System blocks requirement with error: "Constraint Violation: 60Nm exceeds max torque limit of 50Nm"

## Scenario-Specific Constraints

The same constraint can have different values in different scenarios:

```
Scenario: "Idle"
  └── Constraint: "Max torque < 50Nm"

Scenario: "Climb"
  └── Constraint: "Max torque < 100Nm"
```

This allows the system to:
- Validate requirements in context
- Prevent conflicts in specific scenarios
- Support complex operational conditions

## Resolving Constraint Violations

When a constraint violation occurs:

1. **Review the Error:** Understand which constraint is violated and why
2. **Check the Scenario:** Verify you're in the correct scenario
3. **Adjust or Update:**
   - **Adjust Requirement:** Change requirement value to comply
   - **Update Constraint:** If constraint is wrong, update it (requires permission)
   - **Change Scenario:** If requirement belongs in different scenario, move it

## Best Practices

1. **Link to Scenarios:** Always link constraints to specific scenarios
2. **Use Clear Expressions:** "Current < 40A" is better than "Current should be reasonable"
3. **Document Rationale:** Add notes explaining why constraint exists
4. **Review Regularly:** Constraints can become outdated as system evolves

## Next Steps

- **[Error Guide](error-guide.md)** - How to resolve constraint violations
- **[Reference: Node Types](../reference/node-types.md)** - Complete reference for Constraint nodes
- **[Scenarios](../scenarios/drafting-first-req.md)** - Real-world examples of constraint usage

