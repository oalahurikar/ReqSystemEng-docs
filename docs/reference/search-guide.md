# Search Guide

ReqDrivenDev provides semantic search to help you find related requirements and prevent duplicates.

## How Semantic Search Works

The system uses semantic matching to find requirements similar to what you're typing. It:

1. **Analyzes Your Input:** Understands the meaning of your requirement
2. **Searches the Graph:** Finds similar requirements already in the database
3. **Suggests Links:** Proposes parent requirements and related items
4. **Prevents Duplicates:** Warns if a very similar requirement exists

## Using Search Effectively

### When Creating Requirements

As you type a requirement, the system automatically searches for similar items:

**Example:**
- You type: "Motor torque shall be less than 50Nm"
- System finds: REQ-050 "Motor torque < 50Nm" (very similar)
- System suggests: Use existing REQ-050, or clearly differentiate your new requirement

### Finding Parent Requirements

The system suggests parent requirements based on semantic similarity:

**Example:**
- You type: "Motor temperature monitoring"
- System finds: REQ-001 "Motor system requirements" (likely parent)
- System suggests: Link new requirement to REQ-001

### Discovering Related Requirements

Search helps you discover requirements you might not know about:

**Example:**
- You type: "Thermal protection"
- System finds: Related requirements about temperature, cooling, overheating
- System shows: Complete context of thermal management requirements

## Search Tips

1. **Use Natural Language:** Type requirements as you would write them
2. **Be Specific:** "Motor torque < 50Nm" finds better matches than "torque limit"
3. **Review Suggestions:** System suggestions are usually helpful, but always review
4. **Check for Duplicates:** If system warns about duplicates, review existing requirements

## Limitations

- Search works best with clear, specific requirements
- Very generic terms may return many results
- Search is semantic, not exact text matching

## Next Steps

- **[Creating Requirements](../guides/creating-requirements.md)** - See search in action
- **[Node Types](node-types.md)** - Understand what you're searching for

