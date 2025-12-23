# Creating Requirements: The Drafting Loop

The Drafting Loop is the core workflow for creating requirements in ReqDrivenDev. It transforms natural language input into structured, validated requirements.

## What This Does

The Drafting Loop lets you create requirements through natural conversation. The system:

1. Understands your intent from natural language
2. Searches for similar requirements to prevent duplicates
3. Suggests parent requirements based on context
4. Generates a structured draft requirement
5. Lets you refine before committing

## Why This Matters

This approach prevents "garbage in" by:

- Catching ambiguous requirements at the point of entry
- Preventing duplicates through semantic search
- Ensuring proper hierarchy through parent suggestions
- Allowing refinement before commitment

## The Happy Path

### Step 1: Type Your Intent

In the chat interface (left side), type your requirement in natural language:

```
Motor torque shall be less than 50Nm
```

### Step 2: Review the Draft Card

The system generates a draft card showing:

- **Proposed UID:** A unique identifier for the requirement
- **Type:** Requirement, TestCase, Component, etc.
- **Content:** The structured requirement text
- **Suggested Parent:** A parent requirement (if detected)
- **Suggested Links:** Related requirements (if found)

### Step 3: Refine (If Needed)

You can refine the draft by continuing the conversation:

```
Make it 60Nm instead
```

The system updates the draft card in real-time, maintaining conversation history.

### Step 4: Add to Graph

When you're satisfied, click **"Add to Graph"**.

The system validates the requirement:
- Checks for valid type
- Verifies parent exists
- Detects circular dependencies
- Evaluates constraints

If validation passes, the requirement appears in the Truth column (right side).

## The Error Path

### Error: "Parent Missing"

**What it means:** The suggested parent doesn't exist in the graph.

**Why it's blocked:** Requirements must be part of a hierarchy. If you reference a parent that doesn't exist, the system can't maintain proper relationships.

**How to fix:**
1. Create the parent requirement first, or
2. Select an existing requirement as the parent

**Example:**
- You type: "Motor torque < 50Nm, parent: REQ-100"
- System error: "Parent Missing: REQ-100 does not exist"
- Fix: Create REQ-100 first, or change parent to existing requirement

### Error: "Constraint Violation"

**What it means:** Your requirement violates an existing constraint.

**Why it's blocked:** Prevents silent physics conflicts. For example, if a constraint says "Max torque < 50Nm" in "Idle" scenario, you can't create a requirement for "Motor torque = 60Nm" in that scenario.

**How to fix:**
1. Adjust your requirement to comply with the constraint, or
2. Update the constraint (if justified and you have permission)

**Example:**
- Constraint exists: "Max torque < 50Nm" (applies in "Idle" scenario)
- You try to create: "Motor torque = 60Nm" (in "Idle" scenario)
- System error: "Constraint Violation: Exceeds max torque limit"
- Fix: Either reduce to 50Nm or update constraint if justified

### Error: "Cycle Detected"

**What it means:** You're trying to create a circular dependency.

**Why it's blocked:** Circular dependencies break graph traversal and create logical contradictions.

**How to fix:** Remove one of the circular edges, or restructure the requirement hierarchy.

**Example:**
- You have: REQ-050 derives from REQ-100
- You try to create: REQ-100 derives from REQ-050
- System error: "Cycle detected: REQ-050 → REQ-100 → REQ-050"
- Fix: Remove the reverse edge, or restructure hierarchy

## Best Practices

1. **Start with Jobs:** Create Jobs (the "why") before creating Requirements (the "what")
2. **Use Scenarios:** Link constraints to scenarios for context-aware validation
3. **Refine Before Committing:** Use the chat to refine requirements before adding to graph
4. **Review Suggestions:** The system's parent suggestions are usually correct, but review them

## Next Steps

- **[Defining Context](defining-context.md)** - Learn about Jobs and Scenarios
- **[Error Guide](error-guide.md)** - Complete guide to all error messages
- **[Constraint Management](constraint-management.md)** - How to work with constraints

