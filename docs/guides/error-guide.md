# Error Guide: Understanding Validation Errors

When the system blocks a requirement, it provides a clear error message explaining why. This guide explains all error messages and how to resolve them.

## Error: "Parent Missing"

### What It Means

The requirement you're trying to create references a parent that doesn't exist in the graph.

### Why It's Blocked

Requirements must be part of a hierarchy. If you reference a parent that doesn't exist, the system can't maintain proper relationships.

### How to Fix

1. **Create the Parent First:**
   - Create the parent requirement before creating the child
   - Example: Create "REQ-100" before creating "REQ-101" that derives from it

2. **Select an Existing Parent:**
   - Choose an existing requirement as the parent
   - The system will suggest parents based on semantic similarity

### Example

**Error:** "Parent Missing: REQ-100 does not exist"

**Fix:** Create REQ-100 first, or change parent to existing requirement like REQ-050

---

## Error: "Constraint Violation"

### What It Means

Your requirement violates an existing constraint in the current scenario.

### Why It's Blocked

Prevents silent physics conflicts. For example, if a constraint says "Max torque < 50Nm" in "Idle" scenario, you can't create a requirement for "Motor torque = 60Nm" in that scenario.

### How to Fix

1. **Adjust Your Requirement:**
   - Change the requirement value to comply with the constraint
   - Example: Change "60Nm" to "50Nm" or less

2. **Update the Constraint:**
   - If the constraint is wrong, update it (requires appropriate permissions)
   - Document why the constraint was changed

3. **Change the Scenario:**
   - If the requirement belongs in a different scenario, move it there
   - Example: "60Nm" might be valid in "Climb" scenario but not "Idle"

### Example

**Constraint:** "Max torque < 50Nm" (applies in "Idle" scenario)

**Requirement:** "Motor torque = 60Nm" (in "Idle" scenario)

**Error:** "Constraint Violation: 60Nm exceeds max torque limit of 50Nm in Idle scenario"

**Fix:** Either reduce to 50Nm, update constraint if justified, or move to "Climb" scenario

---

## Error: "Cycle Detected"

### What It Means

You're trying to create a circular dependency in the requirement hierarchy.

### Why It's Blocked

Circular dependencies break graph traversal and create logical contradictions. If REQ-A derives from REQ-B, and REQ-B derives from REQ-A, the system cannot determine which is the parent.

### How to Fix

1. **Remove One Edge:**
   - Remove one of the circular edges
   - Determine which requirement should truly be the parent

2. **Restructure Hierarchy:**
   - Create a proper hierarchy without cycles
   - Example: REQ-A and REQ-B might both derive from REQ-C

### Example

**Current State:**
- REQ-050 derives from REQ-100

**You Try to Create:**
- REQ-100 derives from REQ-050

**Error:** "Cycle detected: REQ-050 → REQ-100 → REQ-050"

**Fix:** Remove the reverse edge, or restructure so both derive from a common parent

---

## Error: "Invalid Type"

### What It Means

The requirement type you specified is not valid.

### Why It's Blocked

The system only supports specific node types. Invalid types cannot be stored or processed.

### How to Fix

1. **Use Valid Types:**
   - Requirement
   - TestCase
   - Component
   - Parameter
   - Constraint
   - Job
   - Scenario

2. **Check Spelling:**
   - Ensure type name is spelled correctly
   - Use exact type names (case-sensitive)

### Example

**Error:** "Invalid Type: UserStory is not a valid node type"

**Fix:** Use "Requirement" instead of "UserStory"

---

## Error: "Duplicate Detected"

### What It Means

A very similar requirement already exists in the graph.

### Why It's Blocked

Prevents duplicate requirements that would create confusion and maintenance overhead.

### How to Fix

1. **Use Existing Requirement:**
   - If the requirement already exists, use it instead of creating a new one
   - Link to the existing requirement if needed

2. **Differentiate:**
   - If your requirement is truly different, make the difference clear
   - Example: "Motor torque < 50Nm in Idle" vs "Motor torque < 50Nm in Climb"

### Example

**Error:** "Duplicate Detected: Similar requirement REQ-050 already exists"

**Fix:** Review REQ-050 and either use it or clearly differentiate your new requirement

---

## Getting Help

If you encounter an error not listed here:

1. **Review the Error Message:** It usually contains specific details about what went wrong
2. **Check the Scenario:** Many errors are scenario-specific
3. **Review Related Requirements:** Check parent requirements and constraints
4. **Contact Support:** If the error seems incorrect, report it with details

## Next Steps

- **[Creating Requirements](creating-requirements.md)** - Learn the drafting loop
- **[Constraint Management](constraint-management.md)** - Understand constraints
- **[Reference: Node Types](../reference/node-types.md)** - Complete node type reference

