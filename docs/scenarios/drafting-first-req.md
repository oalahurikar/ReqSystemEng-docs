# Scenario: Drafting Your First Requirement

A real-world walkthrough of creating your first requirement in ReqDrivenDev.

## Context

You're starting a new project and need to create your first requirement. You have a clear understanding of what you need, but you're new to the tool.

## The Process

### Step 1: Understand the Goal

You need to specify: "The motor shall not exceed 50Nm of torque during idle operation."

### Step 2: Create the Job (The "Why")

First, define why this requirement exists:

**Type in chat:** "The system must prevent motor damage during idle operation"

**System suggests:** Create a Job node

**You review:** The draft card shows a Job that captures the customer value.

**You click:** "Add to Graph"

### Step 3: Create the Scenario (The "When")

Define when this requirement applies:

**Type in chat:** "Idle operation scenario"

**System suggests:** Create a Scenario node

**You review:** The draft card shows a Scenario for idle conditions.

**You click:** "Add to Graph"

### Step 4: Create the Requirement (The "What")

Now create the specific requirement:

**Type in chat:** "Motor torque shall be less than 50Nm"

**System:**
- Searches for similar requirements (finds none - it's your first)
- Suggests the Job you created as parent
- Generates draft requirement card

**You review:** The draft looks good, but you want to be more specific.

**You refine:** "Make it 'Motor torque shall be less than 50Nm during idle operation'"

**System:** Updates the draft card with your refinement.

**You click:** "Add to Graph"

### Step 5: Verify

The requirement appears in the Truth column (right side), linked to:
- Your Job (the "why")
- Your Scenario (the "when")

## What You Learned

- How to create Jobs, Scenarios, and Requirements
- How the drafting loop works
- How to refine requirements before committing
- How requirements link to context

## Next Steps

- **[Handling Conflicts](handling-conflicts.md)** - What happens when requirements conflict
- **[Creating Requirements](../guides/creating-requirements.md)** - Deep dive into the drafting loop

