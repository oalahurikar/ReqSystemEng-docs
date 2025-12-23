# Introduction

Welcome to ReqDrivenDev, a Requirements-Driven Development tool designed to help engineers manage complex system requirements efficiently and safely.

## Why This Tool Exists

Traditional requirements management tools treat requirements as isolated documents in folders. This creates several problems:

- **Zombie Requirements:** Requirements become stale when parents change, but children remain active
- **Manual Relationship Maintenance:** Engineers must manually maintain thousands of relationships (N² complexity problem)
- **Garbage In:** Bad requirements enter the database and are only caught weeks later
- **Context Loss:** Requirements lose their connection to the rest of the system

ReqDrivenDev solves these problems by:

- **Active Validation:** The system blocks invalid requirements before they enter the database
- **Automatic Relationships:** The system automatically maintains relationships, solving the N² complexity problem
- **Graph Structure:** Requirements are stored as connected nodes in a knowledge graph, not isolated text
- **Context-Aware Constraints:** Constraints apply in specific scenarios, preventing silent physics conflicts

## Core Concepts

### Graph vs. List

Requirements in ReqDrivenDev are stored as **connected nodes in a graph**, not as isolated text in folders. This means:

- Every requirement knows its parent and children
- You can see the complete dependency web at a glance
- The system can automatically detect conflicts and circular dependencies

### The Governor

The Governor is the validation system that **actively blocks** invalid requirements. It checks:

- Valid requirement types
- Existing parent requirements
- Circular dependencies
- Constraint violations

If any check fails, the requirement is blocked with a clear error message explaining why.

### Scenarios

Scenarios provide **context** for constraints. For example:

- "Motor torque < 50Nm" might be valid in "Idle" scenario
- But the same constraint might be violated in "Climb" scenario

This context-aware validation prevents silent physics conflicts.

## What's Next?

- **[Quick Start](quick-start.md)** - Get up and running in 5 minutes
- **[UI Tour](ui-tour.md)** - Understand the split-screen interface
- **[Creating Requirements](guides/creating-requirements.md)** - Learn the drafting loop

