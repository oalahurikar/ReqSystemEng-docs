# User Documentation Writing Guide

**Purpose:** Comprehensive guide for writing user-facing documentation for the Requirements-Driven Development (RDD) tool. Combines documentation best practices with writing techniques for complex engineering systems.

**Philosophy:** Docs as Code, Signal over Noise, Engineer-to-Engineer communication.

**Status:** PRIVATE - This document stays in the main branch only. It should NOT be synced to the public-docs branch.

---

## Why This Approach Matters

### The Problem with Traditional Documentation

Traditional software documentation follows a "User Manual" model: a linear, comprehensive guide that documents every button and feature. For engineering tools, this creates three problems:

1. **Information Overload:** Engineers don't need to know about every feature—they need to solve specific problems.
2. **Context Loss:** Manuals explain "what" but rarely explain "why" the tool rejects their input or enforces certain rules.
3. **Stale Documentation:** Large manuals become outdated quickly and are rarely updated incrementally.

### Our Solution: "Docs as Code" + "Jobs to be Done"

**Docs as Code:**
- Documentation lives in version control (Git)
- Written in Markdown (same as requirements)
- Linked to source of truth (ICDs, L2 requirements)
- Updated incrementally as features are built

**Jobs to be Done Organization:**
- Documentation is organized by what engineers are trying to accomplish, not by feature names
- Each guide answers: "I need to [do X] so that [outcome Y]"
- Examples are concrete engineering scenarios, not generic placeholders

**Why This Works:**
- Engineers think in problems, not features
- When the Governor rejects their input, they need to know *why* (the physics), not just *what* (the error message)
- Documentation stays current because it's written alongside code, not after

---

## Quick Reference: What to Include/Exclude

### ✅ INCLUDE in User Docs (Public)

| Category | What to Include |
|----------|----------------|
| **Concepts** | "The Governor validates requirements", "Graph structure", "Scenarios provide context" |
| **User Actions** | How to create requirements, define scenarios, resolve conflicts |
| **Error Messages** | What errors mean, why they're blocked, how to fix them |
| **Examples** | Generic but concrete: "Motor torque < 50Nm", "System detects faults within 100ms" |
| **Workflows** | Happy path AND error path for each feature |

### ❌ EXCLUDE from User Docs (Proprietary)

| Category | What NOT to Include |
|----------|-------------------|
| **Architecture** | "Postgres with pgvector", "Streamlit implementation", "Vector Store", "Graph Store" |
| **Requirements** | "L1-REQ-7", "L2-REQ-7.1", any requirement IDs or hierarchy |
| **ICDs** | "ICD-01: Graph Ontology", schema definitions, data contracts |
| **Implementation** | Database schemas, API endpoints, code structure, algorithms |
| **Internal Names** | Component names, internal system names |

---

## The Four-Tier Structure

Organize documentation into four tiers that match the user's learning curve and needs.

### Tier 1: Onboarding (The First 15 Minutes)

**Goal:** Get engineers productive immediately and explain the "why" behind the tool's design.

**Must Include:**
- **The Philosophy:** Brief explanation of why the tool exists
  - "Why we use a Graph, not a List"
  - "Why the Governor exists" (prevents zombie requirements)
  - "Why Scenarios matter" (context-aware constraints)
- **Quick Start:** "Project SkyMule" Tutorial
  - Walk through creating 1 Job, 1 Scenario, and 1 Requirement in 5 minutes
  - Use concrete engineering example (e.g., "Motor torque < 50Nm")
- **The UI Tour:** Explain the Split Screen
  - "Left is Draft (Sandpit)" - where you experiment
  - "Right is Truth (Database)" - what's committed to the graph
  - Why this separation matters (prevents accidental commits)

**Do NOT Include:**
- Detailed architecture diagrams (users don't care about Postgres CTEs)
- Every possible feature (focus on core flow)
- Marketing language ("revolutionary AI")

---

### Tier 2: Core Workflows (The "How-To")

**Goal:** Step-by-step guides for common tasks, including both happy paths and error handling.

**Must Include:**

1. **Defining Context**
   - How to create Jobs (JTBD) and Scenarios
   - Explain inheritance (e.g., "High Wind" inherits from "Cruise")
   - When to use Scenarios vs. Jobs

2. **The Drafting Loop**
   - How to chat with the LLM to create requirements
   - Examples of good vs. bad prompts
   - How to refine draft cards
   - When to accept vs. reject LLM suggestions

3. **The Governor: Error Messages**
   - Guide to "Why the Governor rejects data"
   - Common errors:
     - "Parent Missing" - what this means and how to fix
     - "Cycle Detected" - why circular dependencies are blocked
     - "Constraint Violation" - how to resolve conflicts
   - Show both the error message AND the underlying logic

4. **Defining Interfaces**
   - How to use ICD-Lite feature to link components
   - When to define interfaces vs. requirements

**Do NOT Include:**
- Every single button click (don't document standard UI patterns)
- Generic examples ("Lorem Ipsum" requirements)
- Internal implementation details (Vector Store, Postgres schemas)

---

### Tier 3: The Reference (The Dictionary)

**Goal:** Quick lookup for schemas, node types, edge types, and search syntax.

**Must Include:**

1. **The Schema: A Readable Version of ICDs**
   - Explain what a "Constraint" node is vs. a "Parameter" node
   - When to use each node type
   - Edge types and what they mean (Derived_From, Verified_By, etc.)
   - Visual diagram of the graph model (not the database schema)

2. **Search Queries**
   - How to use Semantic Search effectively
   - Query syntax examples
   - When to use semantic search vs. UID lookup

**Do NOT Include:**
- Database schema details (users don't need to know about `nodes` and `edges` tables)
- API endpoints (unless they're user-facing)
- Internal algorithms (how pgvector works)

---

### Tier 4: Advanced / Admin

**Goal:** Specialized guides for power users and administrators.

**Must Include:**
- **Importing Legacy Data:** (If supported) How to bring in CSVs, existing requirements databases
- **Connecting to Code:** How to reference Graph UIDs in Git commits, code comments
- **Bulk Operations:** How to update multiple requirements, batch imports
- **Troubleshooting:** Common issues and solutions

**Do NOT Include:**
- Internal system administration (database backups, etc.)
- Development setup (that's in developer docs)

---

## Writing Best Practices

### Structure for Precision: Beyond Basic Templates

For complex engineering systems, documentation benefits from structured approaches:

**The 3 C's:**
- **Card:** The brief statement of what the feature does
- **Conversation:** The dialogue explaining why it matters and how it works
- **Confirmation:** Clear examples and acceptance criteria

**Behavior-Driven Documentation (BDD-style):**
Use *Given-When-Then* structure to uncover edge cases and state-based scenarios:

```markdown
**Given** the system has a constraint "Max torque < 50Nm" in "Idle" scenario
**When** a user tries to create requirement "Motor torque = 60Nm" in "Idle" scenario
**Then** the system blocks the requirement with error "Constraint Violation"
```

### Uncover Gaps with Example Mapping

When documenting features, use example mapping to identify edge cases:

- **Yellow Card:** The main feature/functionality
- **Blue Cards:** Business Rules (e.g., "Constraints apply in specific scenarios")
- **Green Cards:** Specific Examples/Scenarios (e.g., "Motor torque < 50Nm in Idle")
- **Red Cards:** **Questions/Edge Cases** (This is where blind spots are captured)

**Example Questions to Document:**
- "What happens if a constraint conflicts with a requirement?"
- "What if the parent requirement doesn't exist?"
- "What if there's a circular dependency?"

### Document Edge Cases and Error Paths

**Always document both:**
1. **Happy Path:** The normal, successful workflow
2. **Error Path:** What happens when things go wrong

**For each error, document:**
- **What it means:** Plain English explanation
- **Why it's blocked:** The underlying logic/physics
- **How to fix:** Step-by-step resolution
- **Example:** Concrete scenario showing the error and fix

### Use Concrete Engineering Examples

**Always use concrete but generic examples:**

✅ **Good Examples:**
- "Motor torque < 50Nm in Idle scenario"
- "System shall detect faults within 100ms"
- "Motor temperature shall not exceed 80°C"

❌ **Bad Examples:**
- "The system shall be good"
- "REQ-001: Lorem ipsum dolor sit amet"
- "Make it fast"

**Why:** Concrete examples help engineers understand the tool in their context, but generic enough to not expose proprietary project details.

---

## Signal vs. Noise: What to Include

| Category | MUST INCLUDE (The Signal) | DO NOT INCLUDE (The Noise) |
|----------|---------------------------|----------------------------|
| **Architecture** | "The concept of 'The Governor' (Validation) and 'Scenarios' (Context)." | Internal backend diagrams (Vector Store, Postgres CTEs). Users don't care about your stack; they care about their data. |
| **Examples** | Concrete Engineering: "Motor Torque < 50Nm." | Generic Fluff: "The system shall be good." / "Lorem Ipsum." |
| **Workflow** | "The Happy Path" AND "The Error Path." Show them what happens when they break a rule. | Every single button click. Don't document standard UI patterns (e.g., "Click the X to close"). |
| **Tone** | Professional, Engineer-to-Engineer. "This constraint ensures safety." | Marketing hype. "Our revolutionary AI empowers you to..." |
| **Visuals** | Diagrams of the Data Model (Graph relationships). | Screenshots of empty screens. Always populate screens with data before capturing. |

---

## Documentation Templates

### Template: Feature Guide

```markdown
# [Feature Name]

**Status:** [Draft | In Progress | Complete]  
**Last Updated:** [Date]  
**Related Requirements:** [L1-REQ-X, L2-REQ-X.Y] (PRIVATE - don't include in public docs)

## What This Does
[One paragraph: what the feature does for the user]

## Why This Matters
[One paragraph: what problem it solves, what value it provides. Link to JTBD if relevant.]

## How to Use It

### The Happy Path
[Step-by-step instructions with concrete examples]

### The Error Path
[Common errors and how to resolve them]

### Example
[Concrete engineering example with sample data]

## Edge Cases
[What happens in unusual scenarios - use Given-When-Then format]

## Common Questions
- **Q:** [Question]  
  **A:** [Answer]

## Related Features
- [Link to related guide]
```

### Template: Error Documentation

```markdown
## Error: "[Error Name]"

**What it means:** [Plain English explanation]

**Why it's blocked:** [The underlying logic/physics. Explain the "why", not just the "what"]

**How to fix:** [Step-by-step resolution]

**Example:**
[Concrete scenario showing the error and fix]

**Edge Cases:**
- [What if scenario X?]
- [What if scenario Y?]
```

---

## Key File Locations

### Documentation Files (User-Facing)

**Location:** `website/docs/`

```
website/docs/
├── getting-started/          # Tier 1: Onboarding
│   ├── introduction.md
│   ├── quick-start.md
│   └── ui-tour.md
├── guides/                    # Tier 2: Core Workflows
│   ├── creating-requirements.md
│   ├── defining-context.md
│   ├── constraint-management.md
│   └── error-guide.md
├── reference/                 # Tier 3: Reference
│   ├── node-types.md
│   ├── edge-types.md
│   └── search-guide.md
├── advanced/                  # Tier 4: Advanced
│   ├── legacy-import.md
│   ├── code-integration.md
│   └── troubleshooting.md
└── scenarios/                 # Real-world examples
    ├── drafting-first-req.md
    └── handling-conflicts.md
```

### Configuration Files

**Docusaurus Config:** `website/docusaurus.config.ts`
- Update title, tagline, URLs
- Configure GitHub Pages deployment
- Set organization/project names

**Sidebar Config:** `website/sidebars.ts`
- Define navigation structure
- Add new documentation sections

---

## What to Reference (Safe Links)

### ✅ Safe to Reference

1. **Other User Docs:**
   ```markdown
   See [Creating Requirements](guides/creating-requirements.md)
   ```

2. **Concepts (Abstracted):**
   ```markdown
   The Governor validates requirements before they're added to the graph.
   ```

3. **Generic Examples:**
   ```markdown
   Example: "Motor torque < 50Nm in Idle scenario"
   ```

### ❌ Do NOT Reference

1. **Requirement Files:**
   ```markdown
   ❌ See [L1-REQ-7](../requirements/L1_MVP.md#l1-req-7)
   ❌ This implements L2-REQ-7.1
   ```

2. **Internal Architecture:**
   ```markdown
   ❌ The Vector Store uses pgvector
   ❌ Postgres stores nodes in the nodes table
   ```

3. **ICD Definitions:**
   ```markdown
   ❌ See ICD-01 for the schema
   ❌ According to ICD-02
   ```

4. **Component Names:**
   ```markdown
   ❌ The Graph Store component
   ❌ LLM Orchestrator uses OpenAI
   ```

---

## Common Patterns: Good vs. Bad

### Pattern 1: Explaining Features

**❌ Bad (Exposes Implementation):**
```markdown
The LLM Orchestrator queries the Vector Store (pgvector) and Graph Store 
(Postgres) to find similar requirements, then generates a Draft Card using 
OpenAI's API.
```

**✅ Good (User-Focused):**
```markdown
When you type a requirement, the system:
1. Searches for similar requirements you've created before
2. Suggests a parent requirement based on context
3. Generates a draft requirement card
4. Lets you refine it before adding to the graph
```

### Pattern 2: Error Documentation

**❌ Bad (Generic):**
```markdown
This error occurs when the parent requirement is not found.
```

**✅ Good (Complete):**
```markdown
## Error: "Parent Missing"

**What it means:** The requirement you're trying to create references 
a parent that doesn't exist.

**Why it's blocked:** Requirements must be part of a hierarchy. 
If you reference a parent that doesn't exist, the system can't 
maintain proper relationships.

**How to fix:** 
1. Create the parent requirement first, or
2. Select an existing requirement as the parent

**Example:**
- You type: "Motor torque < 50Nm, parent: REQ-100"
- System error: "Parent Missing: REQ-100 does not exist"
- Fix: Create REQ-100 first, or change parent to existing requirement
```

### Pattern 3: Examples

**❌ Bad (Generic/Placeholder):**
```markdown
Example: "The system shall be good"
Example: "REQ-001: Lorem ipsum dolor sit amet"
```

**✅ Good (Concrete but Generic):**
```markdown
Example: "Motor torque shall be less than 50Nm in Idle scenario"
Example: "System shall detect faults within 100ms"
```

---

## Deployment Process

### Local Development

```bash
# Navigate to website directory
cd website

# Install dependencies (first time only)
npm install

# Start development server
npm start

# Build for production (test build)
npm run build
```

**Local URL:** http://localhost:3000

### Deployment Options

#### Option 1: GitHub Pages (Recommended)

**Prerequisites:**
- GitHub repository created
- `public-docs` branch pushed to GitHub

**Steps:**

1. **Update Docusaurus Config:**
   ```typescript
   // website/docusaurus.config.ts
   url: 'https://your-username.github.io',
   baseUrl: '/ReqDrivenDev/',  // or '/' if using custom domain
   organizationName: 'your-username',
   projectName: 'ReqDrivenDev',
   ```

2. **Deploy:**
   ```bash
   # On public-docs branch
   cd website
   npm run deploy
   ```

   This will:
   - Build the site
   - Push to `gh-pages` branch
   - Deploy to GitHub Pages

3. **Configure GitHub:**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` (created by deploy script)
   - Folder: `/ (root)`

**URL:** `https://your-username.github.io/ReqDrivenDev/`

#### Option 2: Netlify

1. **Connect Repository:**
   - Sign up at netlify.com
   - Connect GitHub repository
   - Select `public-docs` branch

2. **Build Settings:**
   - Build command: `cd website && npm install && npm run build`
   - Publish directory: `website/build`

3. **Deploy:**
   - Netlify auto-deploys on push to `public-docs` branch

#### Option 3: Vercel

1. **Connect Repository:**
   - Sign up at vercel.com
   - Import GitHub repository
   - Select `public-docs` branch

2. **Build Settings:**
   - Framework: Other
   - Root directory: `website`
   - Build command: `npm run build`
   - Output directory: `build`

3. **Deploy:**
   - Vercel auto-deploys on push to `public-docs` branch

---

## Workflow: Updating Documentation

### Step-by-Step Process

1. **Update Docs on Main Branch:**
   ```bash
   # Make sure you're on main branch
   git checkout main
   
   # Edit documentation files in website/docs/
   # ... make your changes ...
   
   # Commit changes
   git add website/docs/
   git commit -m "Update documentation: [description]"
   ```

2. **Review for Proprietary Content:**
   - [ ] No L1/L2 requirement IDs
   - [ ] No internal component names
   - [ ] No implementation details
   - [ ] Examples are generic but concrete
   - [ ] No links to requirement files
   - [ ] Both happy path and error path documented
   - [ ] Edge cases identified and documented

3. **Sync to Public-Docs Branch:**
   ```bash
   # Use the sync script
   ./scripts/sync-public-docs.sh "Update documentation: [description]"
   ```

   Or manually:
   ```bash
   git checkout public-docs
   git checkout main -- website/
   git add website/
   git commit -m "Update user documentation"
   git push origin public-docs
   git checkout main
   ```

4. **Deploy (if using GitHub Pages):**
   ```bash
   git checkout public-docs
   cd website
   npm run deploy
   ```

---

## Common Scenarios

### Scenario 1: Adding a New Feature Guide

**Files to Update:**
1. Create: `website/docs/guides/new-feature.md`
2. Update: `website/sidebars.ts` - Add to guides category
3. Update: `website/docs/getting-started/quick-start.md` (if it's a core feature)

**Example:**
```typescript
// website/sidebars.ts
{
  type: 'category',
  label: 'Guides',
  items: [
    'guides/creating-requirements',
    'guides/new-feature',  // Add here
    // ...
  ],
}
```

### Scenario 2: Documenting a New Error

**Files to Update:**
1. Update: `website/docs/guides/error-guide.md` - Add new error section
2. Update: Feature-specific guide (if applicable)

**Template:**
```markdown
## Error: "[Error Name]"

**What it means:** [Plain English explanation]

**Why it's blocked:** [The underlying logic]

**How to fix:** [Step-by-step resolution]

**Example:**
[Concrete scenario showing error and fix]

**Edge Cases:**
- [What if scenario X?]
- [What if scenario Y?]
```

### Scenario 3: Updating Configuration

**Files to Update:**
- `website/docusaurus.config.ts` - For site-wide changes
- `website/sidebars.ts` - For navigation changes

**Common Updates:**
- GitHub URLs (when repo is created)
- Base URL (if domain changes)
- Organization/project names

---

## Safety Checklist

Before syncing to public-docs branch, verify:

- [ ] No L1/L2 requirement IDs mentioned
- [ ] No internal component names (Vector Store, Graph Store, etc.)
- [ ] No implementation details (Postgres, Streamlit, pgvector)
- [ ] No ICD references or schema details
- [ ] No links to `requirements/` or `docs/` directories
- [ ] Examples are generic but concrete engineering scenarios
- [ ] Error messages explain "why", not just "what"
- [ ] Screenshots show real data (not empty screens)
- [ ] Both happy path and error path documented
- [ ] Edge cases identified and explained

---

## Quality Checklist

Before publishing documentation, verify:

- [ ] Uses concrete engineering examples (not generic placeholders)
- [ ] Explains "why" behind constraints, not just "what"
- [ ] Documents both happy path and error path
- [ ] Screenshots show real data, not empty screens
- [ ] Tone is engineer-to-engineer (not marketing)
- [ ] No references to L1/L2 requirements (in public docs)
- [ ] No internal implementation details
- [ ] No standard UI patterns documented
- [ ] Examples are realistic engineering scenarios
- [ ] Edge cases are documented using Given-When-Then format
- [ ] Error documentation includes examples

---

## Summary

**Key Principles:**
1. **Abstract concepts, not implementation** - Document what users see, not how it's built
2. **Use concrete examples** - Generic engineering scenarios, not placeholders
3. **Explain the "why"** - Error messages should explain logic, not just state facts
4. **Keep it self-contained** - User docs shouldn't link to private requirement files
5. **Update incrementally** - Document as you build, not at the end
6. **Document edge cases** - Use Given-When-Then and example mapping to uncover gaps
7. **Show both paths** - Always document happy path AND error path

**Quick Commands:**
```bash
# Sync docs to public branch
./scripts/sync-public-docs.sh

# Test locally
cd website && npm start

# Deploy (GitHub Pages)
cd website && npm run deploy
```

**File Locations:**
- User Documentation: `website/docs/`
- Docusaurus Config: `website/docusaurus.config.ts`
- Sidebar Config: `website/sidebars.ts`
- Sync Script: `scripts/sync-public-docs.sh`
