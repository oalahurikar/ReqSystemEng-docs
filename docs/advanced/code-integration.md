# Code Integration

Link requirements to code, Git commits, and implementation artifacts.

## Referencing Requirements in Code

You can reference requirement UIDs in code comments to maintain traceability:

```python
# REQ-050: Motor torque shall be less than 50Nm
def get_motor_torque():
    max_torque = 50  # Complies with REQ-050
    return calculate_torque()
```

## Git Commit Integration

Reference requirements in Git commit messages:

```
feat: Implement motor torque control

Implements REQ-050: Motor torque < 50Nm
Related: REQ-051, REQ-052
```

## Best Practices

1. **Use UIDs:** Always reference requirement UIDs, not just text
2. **Be Specific:** Reference exact requirements, not vague descriptions
3. **Update Status:** When requirement is implemented, update its status
4. **Link Tests:** Link test code to TestCase nodes

## Next Steps

- **[Creating Requirements](../guides/creating-requirements.md)** - How to create requirements
- **[Reference: Node Types](../reference/node-types.md)** - Understanding requirement structure

