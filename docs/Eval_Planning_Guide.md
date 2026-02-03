# When and Where to Plan Evals in Requirements Hierarchy

## Answer: Start Planning at **L2 Level**

Evals should be **identified and planned during L2 requirement writing**, specifically for L2 requirements that allocate to **LLM Orchestrator** components.

---

## Requirements Hierarchy Overview

| Level | Purpose | Eval Planning Role |
|-------|---------|-------------------|
| **JTBD** | High-level jobs (the "why") | No evals here - too abstract |
| **L1** | Strategic outcomes/goals | Identify which L1s will need LLM components → signals need for evals |
| **L2** | Backend mechanisms/logic | **START HERE** - Specify which L2s need evals |
| **L3** | Component interface specs | Evals are implemented/tested here |

---

## Why L2 is the Right Level

### L2 Specifies the Mechanisms
L2 requirements define **WHAT** the system does at the mechanism level. For LLM-based mechanisms, you need evals to measure **HOW WELL** they work.

**Example**: 
- **L2-REQ-6.1** (Ambiguity Detection Engine) → Specifies dictionary-based detection
- **Eval Needed**: Does it catch ambiguous terms accurately? What's the precision/recall?

### L2 Already Has LITMUS TESTS (But Those Are Different)
L2 requirements include **LITMUS TESTS** which are functional tests for deterministic behavior. Evals are different:

| Aspect | LITMUS TESTS | EVALS |
|--------|--------------|-------|
| Purpose | Verify deterministic behavior works | Measure probabilistic quality |
| Example | "System detects 'fast' in text" | "System detects 90% of ambiguous terms with <5% false positives" |
| Used For | Governor, Graph Store (deterministic) | LLM Orchestrator (probabilistic) |

### L2 Allocates to Components
The **Allocation Map** (4. Allocation Map.md) shows which L2s allocate to LLM Orchestrator:
- L2-REQ-5.2 → LLM Orchestrator (Coach Mode)
- L2-REQ-6.1, 6.2, 6.3, 6.4 → LLM Orchestrator (Coach Mode)
- L2-REQ-8.1, 8.2, 8.4 → LLM Orchestrator (Spider Mode)

**Rule**: If an L2 allocates to LLM Orchestrator → it needs evals.

---

## When to Plan Evals: The Requirements Lifecycle

### Phase 1: L2 Requirement Writing
**Action**: When writing L2 requirements that allocate to LLM Orchestrator, add an **EVAL REQUIREMENTS** section.

**Example Structure**:
```markdown
**ID:** L2-REQ-6.1
**Derived From:** L1-REQ-6
**Capability:** Ambiguity Detection Engine
**Priority:** #P0 (MVP)

**WHAT:** [mechanism specification]

**WHY:** [rationale]

**LITMUS TEST:** [functional test script]

**EVAL REQUIREMENTS:**
- **Precision**: > 90% (flagged terms are actually ambiguous)
- **Recall**: > 85% (catch most ambiguous terms)
- **Dataset Size**: ~100-200 examples
- **Categories**: Ambiguity detection, suggestion quality
```

### Phase 2: L3 Decomposition
**Action**: L3 specs should reference the eval requirements from L2, but evals are not part of the interface specification itself.

**Example**: L3-LLM-Orchestrator.md specifies `check_quality()` interface, but the eval requirements come from L2-REQ-6.1.

### Phase 3: Implementation & Testing
**Action**: Implement evals as part of testing infrastructure (`tests/evals/`), using the eval requirements from L2 as success thresholds.

---

## Which L2 Requirements Need Evals?

Based on the Allocation Map, these **L2 requirements need evals**:

### Coach Mode (Quality Guidance)
- ✅ **L2-REQ-6.1**: Ambiguity Detection Engine
- ✅ **L2-REQ-6.2**: Verifiability Check
- ✅ **L2-REQ-6.3**: Real-Time Guidance Interface
- ✅ **L2-REQ-5.2**: Draft Requirement Creation

### Spider Mode (Relationship Inference)
- ✅ **L2-REQ-8.1**: Semantic Matching Engine
- ✅ **L2-REQ-8.2**: Automatic Edge Creation
- ✅ **L2-REQ-8.4**: Background Inference Process

### Not Needed (Deterministic Logic)
- ❌ L2-REQ-2.1, 2.2, 2.3, 2.4 → Governor (State Machine) - use LITMUS TESTS
- ❌ L2-REQ-1.x → Graph Store - use LITMUS TESTS
- ❌ L2-REQ-7.x → Governor (Constraint Rules) - use LITMUS TESTS

---

## How to Add Eval Requirements to L2

### Option 1: Add Section to Existing L2 Files
Add an **EVAL REQUIREMENTS** section after LITMUS TEST:

```markdown
**LITMUS TEST:**
[existing functional test]

**EVAL REQUIREMENTS:**
- **Success Metrics**: [precision, recall, etc.]
- **Thresholds**: [specific targets]
- **Dataset Scope**: [what to test]
- **When to Run**: [development, deployment, continuous]
```

### Option 2: Create Separate Eval Requirements Document
Create `requirements/L2/P0/Eval_Requirements.md` that maps L2 → Eval needs.

**Recommendation**: Option 1 is better - keeps eval requirements co-located with the mechanism specification.

---

## Traceability: L1 → L2 → Evals

### Example Traceability Chain

```
L1-REQ-6 (Real-Time Quality Guidance)
  ↓
L2-REQ-6.1 (Ambiguity Detection Engine)
  ├─ LITMUS TEST: Functional test (deterministic)
  └─ EVAL REQUIREMENTS: Quality metrics (probabilistic)
      ↓
  Implementation: tests/evals/evaluators/coach_mode_evaluator.py
```

### L1 Signals Need, L2 Specifies, L3 Implements

- **L1-REQ-6**: "System shall provide real-time guidance" → Signals need for quality measurement
- **L2-REQ-6.1**: "System shall detect ambiguous terms" → Specifies mechanism + eval requirements
- **L3**: Interface spec → Implementation includes evals

---

## Action Items

### For Existing L2 Requirements (LLM Orchestrator)

1. **Identify**: Review L2/P0/ requirements that allocate to LLM Orchestrator
2. **Add**: Add **EVAL REQUIREMENTS** section to each
3. **Reference**: Use `docs/Evaluation_Strategy.md` for guidance on metrics/thresholds

### For New L2 Requirements

1. **During L2 Writing**: Always add EVAL REQUIREMENTS section if allocating to LLM Orchestrator
2. **Check Allocation Map**: Confirm component allocation before deciding if evals needed
3. **Follow Pattern**: Use existing L2-REQ-6.1 as template (once updated)

---

## Summary

**Answer**: Start planning evals at **L2 level**, specifically:
- **When**: During L2 requirement writing phase
- **Where**: Add EVAL REQUIREMENTS section to L2 requirements that allocate to LLM Orchestrator
- **Why**: L2 specifies mechanisms, evals measure how well LLM mechanisms perform
- **How**: Add section after LITMUS TEST, specify success metrics and thresholds

**Key Principle**: 
- LITMUS TESTS = Deterministic functional tests (Governor, Graph Store)
- EVALS = Probabilistic quality metrics (LLM Orchestrator)
