# Legacy Import

Import existing requirements from other tools or documents into ReqDrivenDev.

## Supported Formats

- **CSV:** Comma-separated values with requirement data
- **Markdown:** Structured markdown documents
- **Text:** Plain text with requirement lists

## Import Process

### Step 1: Prepare Your Data

Ensure your data includes:
- Requirement text
- Requirement IDs (if available)
- Parent relationships (if available)
- Types (Requirement, TestCase, etc.)

### Step 2: Import

1. Select import option from menu
2. Choose file format
3. Upload your file
4. Review import preview

### Step 3: Review and Validate

The system will:
- Parse your requirements
- Suggest types and relationships
- Show preview of what will be imported
- Highlight potential issues

### Step 4: Commit

Review the import preview and commit to graph.

## Import Best Practices

1. **Clean Your Data:** Remove formatting issues before import
2. **Include IDs:** Preserve original IDs if you need traceability
3. **Review Suggestions:** System suggestions for types/relationships may need adjustment
4. **Import in Batches:** Large imports may be better split into smaller batches

## Next Steps

- **[Creating Requirements](../guides/creating-requirements.md)** - Manual requirement creation
- **[Troubleshooting](troubleshooting.md)** - Common import issues

