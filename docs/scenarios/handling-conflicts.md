# Scenario: Handling Constraint Conflicts

A real-world example of what happens when a requirement conflicts with an existing constraint.

## Context

You have an existing constraint: "Max motor torque < 50Nm" that applies in the "Idle" scenario.

You're trying to create a new requirement: "Motor torque = 60Nm" for the "Idle" scenario.

## The Conflict

### Step 1: You Create the Requirement

**Type in chat:** "Motor torque shall be 60Nm during idle operation"

**System:**
- Searches for similar requirements
- Finds the constraint "Max torque < 50Nm" in "Idle" scenario
- Detects conflict: 60Nm > 50Nm
- Generates draft card with warning

### Step 2: System Blocks the Requirement

**When you click "Add to Graph":**

**System error:** "Constraint Violation: 60Nm exceeds max torque limit of 50Nm in Idle scenario"

**The requirement is blocked** - it doesn't appear in the Truth column.

## Resolving the Conflict

You have three options:

### Option 1: Adjust the Requirement

**Change requirement to comply with constraint:**

**You refine:** "Make it 50Nm instead"

**System:** Updates draft card to "Motor torque = 50Nm"

**You click:** "Add to Graph"

**Result:** Requirement is accepted (50Nm < 50Nm limit)

### Option 2: Update the Constraint

**If the constraint is wrong and you have permission:**

1. Find the constraint in the graph
2. Update it to "Max torque < 70Nm"
3. Retry creating your requirement

**Result:** Requirement is accepted (60Nm < 70Nm limit)

### Option 3: Change the Scenario

**If the requirement belongs in a different scenario:**

**You refine:** "Change scenario to 'Climb' instead of 'Idle'"

**System:** Updates draft card scenario

**You click:** "Add to Graph"

**Result:** Requirement is accepted (constraint doesn't apply in "Climb" scenario)

## What You Learned

- How the system detects constraint violations
- Why requirements are blocked (prevents silent conflicts)
- How to resolve conflicts (adjust, update, or change scenario)
- The importance of scenario context

## Next Steps

- **[Constraint Management](../guides/constraint-management.md)** - Deep dive into constraints
- **[Error Guide](../guides/error-guide.md)** - Complete error reference

