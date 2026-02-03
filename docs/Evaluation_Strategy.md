# Evaluation Strategy for RDD System

This document outlines where evaluations (evals) are needed, why they matter, and when to run them.

## Overview

The RDD system has two categories of functionality:
1. **Deterministic Logic** (The Governor, Graph Store) - Validated via unit/functional tests
2. **LLM-Based Intelligence** (LLM Orchestrator) - Requires evals for quality assurance

This strategy focuses on **LLM evals** since deterministic components already have test coverage.

---

## Why Evals Are Needed

### The Problem
LLM-based components are non-deterministic and probabilistic. Unlike unit tests that verify binary correctness, evals measure:
- **Accuracy**: Does the LLM produce correct outputs?
- **Consistency**: Does it produce similar outputs for similar inputs?
- **Adherence to Rules**: Does it follow the Governor's Constitution?
- **Degradation Detection**: Does quality degrade over time (model drift)?

### The Risk Without Evals
Without evals, you cannot know if:
- Coach Mode actually improves requirement quality
- Spider Mode creates correct or spurious relationships
- System prompts are effective
- Model changes/updates break functionality

---

## Where Evals Are Needed

### 1. Coach Mode: Quality Guidance (L2-REQ-6.1, 6.2, 6.3)

**Component**: LLM Orchestrator → Coach Mode  
**Capabilities to Evaluate**:
- Ambiguity detection accuracy
- Verifiability check accuracy
- Guidance quality (suggestions improve requirements)
- System prompt adherence

**Eval Dataset Structure**:
```json
{
  "test_case_id": "COACH_001",
  "input_requirement": "The system shall be fast",
  "expected_ambiguity_flags": ["fast"],
  "expected_verifiability": false,
  "expected_suggestion_contains": ["response time", "latency", "ms"],
  "category": "ambiguity_detection"
}
```

**Success Metrics**:
- **Precision**: % of flagged terms that are actually ambiguous
- **Recall**: % of ambiguous terms that were caught
- **Suggestion Quality**: Human expert rating (1-5) of suggestions
- **Rule Adherence**: % of outputs that follow "shall" syntax, valid types, etc.

**When to Run**:
- **Before Deployment**: Validate baseline performance
- **After Prompt Changes**: Ensure improvements don't regress
- **Model Updates**: Detect degradation
- **Continuous**: Sample production inputs weekly

---

### 2. Coach Mode: Draft Creation (L2-REQ-5.2)

**Component**: LLM Orchestrator → `process_user_input()`  
**Capabilities to Evaluate**:
- Natural language → structured requirement conversion
- Context awareness (related requirements linked correctly)
- Parent requirement inference accuracy

**Eval Dataset Structure**:
```json
{
  "test_case_id": "DRAFT_001",
  "user_input": "Create a requirement about motor torque limits",
  "existing_graph": {
    "nodes": ["REQ-050: Motor safety constraints"],
    "edges": []
  },
  "expected_output": {
    "type": "Requirement",
    "parent_uid": "REQ-050",
    "content_contains": ["torque", "limit", "Nm"]
  }
}
```

**Success Metrics**:
- **Conversion Accuracy**: % of inputs correctly converted to requirements
- **Parent Linking Accuracy**: % of correct parent assignments
- **De-duplication**: % of duplicates correctly identified

**When to Run**:
- **Before Deployment**: Baseline conversion quality
- **After Graph Changes**: Ensure context retrieval works with new data
- **Model Updates**: Check for regression

---

### 3. Spider Mode: Relationship Inference (L2-REQ-8.1, 8.2)

**Component**: LLM Orchestrator → Spider Mode  
**Capabilities to Evaluate**:
- Semantic matching accuracy (false positives/negatives)
- Edge type correctness (Derived_From vs. Constrains)
- Confidence score calibration

**Eval Dataset Structure**:
```json
{
  "test_case_id": "SPIDER_001",
  "source_node": {
    "uid": "REQ-100",
    "content": "Motor torque < 100 Nm"
  },
  "target_nodes": [
    {"uid": "REQ-101", "content": "Motor controller shall limit torque"},
    {"uid": "REQ-102", "content": "Battery voltage > 12V"}
  ],
  "expected_edges": [
    {"from": "REQ-100", "to": "REQ-101", "type": "Derived_From", "confidence": "high"},
    {"from": "REQ-100", "to": "REQ-102", "type": null, "confidence": null}
  ]
}
```

**Success Metrics**:
- **Precision**: % of created edges that are correct
- **Recall**: % of correct edges that were found
- **Edge Type Accuracy**: % of correct edge type assignments
- **Confidence Calibration**: Do high-confidence scores correlate with correctness?

**When to Run**:
- **Before Deployment**: Baseline inference accuracy
- **After Vector Store Changes**: Embedding quality affects matching
- **Continuous**: Sample production inferences weekly (high-risk area)

---

### 4. End-to-End: Requirement Quality Improvement

**Component**: Full System (Coach + Governor)  
**Capability**: Does the system actually improve requirement quality?

**Eval Dataset Structure**:
```json
{
  "test_case_id": "E2E_001",
  "initial_requirement": "The system shall be fast",
  "after_coach_iterations": [
    "The system shall respond within 100ms",
    "The system shall respond within 50ms under normal load"
  ],
  "expert_rating_before": 1,
  "expert_rating_after": 5
}
```

**Success Metrics**:
- **Quality Improvement**: Average expert rating improvement (before → after)
- **Time to Quality**: Number of iterations to reach "approvable" state
- **Approval Rate**: % of requirements that eventually pass quality gates

**When to Run**:
- **Before Deployment**: Validate system delivers value
- **Quarterly**: Track long-term quality trends
- **After Major Changes**: Ensure improvements don't regress

---

## Eval Architecture

### Test Data Sources

1. **Synthetic Test Cases**
   - Hand-crafted examples covering edge cases
   - Source: Requirements documents, L2 litmus tests
   - Size: ~100-200 examples per eval category

2. **Production Samples** (Anonymized)
   - Real user inputs from simulator
   - Ground truth labeled by experts
   - Size: ~50-100 examples per category

3. **Adversarial Cases**
   - Deliberately ambiguous inputs
   - Boundary conditions (very short, very long)
   - Source: Known failure modes

### Eval Infrastructure

**Location**: `tests/evals/`

```
tests/evals/
├── datasets/
│   ├── coach_mode_ambiguity.json
│   ├── coach_mode_verifiability.json
│   ├── draft_creation.json
│   ├── spider_mode_inference.json
│   └── e2e_quality.json
├── evaluators/
│   ├── coach_mode_evaluator.py
│   ├── spider_mode_evaluator.py
│   └── e2e_evaluator.py
└── reports/
    └── eval_report_template.md
```

### Running Evals

```bash
# Run all evals
pytest tests/evals/

# Run specific eval category
pytest tests/evals/evaluators/coach_mode_evaluator.py

# Generate report
pytest tests/evals/ --eval-report
```

---

## When to Run Evals

### Development Phase

| Event | Evals to Run | Why |
|-------|--------------|-----|
| Initial Implementation | All evals | Establish baseline |
| System Prompt Changes | Coach Mode, Draft Creation | Ensure improvements |
| Vector Store Changes | Spider Mode | Embedding quality affects inference |
| Model Switch/Update | All evals | Detect regression |

### Deployment Phase

| Phase | Evals to Run | Frequency |
|-------|--------------|-----------|
| Pre-Deployment | All evals | Once (must pass threshold) |
| Post-Deployment | Sample-based evals | Weekly |
| Production Monitoring | Error-based evals | Real-time |

### Maintenance Phase

| Event | Evals to Run | Why |
|-------|--------------|-----|
| Quarterly Review | End-to-End, Spider Mode | Track quality trends |
| User Complaints | Relevant category | Debug specific issues |
| Performance Degradation | All evals | Root cause analysis |

---

## Success Thresholds

### Coach Mode (Quality Guidance)

| Metric | Threshold | Rationale |
|--------|-----------|-----------|
| Ambiguity Precision | > 90% | Low false positives (users trust flags) |
| Ambiguity Recall | > 85% | Catch most ambiguous terms |
| Verifiability Precision | > 85% | Don't flag valid requirements |
| Suggestion Quality | > 4.0/5.0 | Expert-rated usefulness |

### Spider Mode (Relationship Inference)

| Metric | Threshold | Rationale |
|--------|-----------|-----------|
| Edge Precision | > 80% | Spurious edges create confusion |
| Edge Recall | > 70% | Find most correct relationships |
| Edge Type Accuracy | > 85% | Wrong type breaks graph semantics |
| Confidence Calibration | R² > 0.7 | High confidence = high correctness |

### End-to-End

| Metric | Threshold | Rationale |
|--------|-----------|-----------|
| Quality Improvement | > 2.0 points | System must improve requirements |
| Approval Rate | > 60% | Most requirements should be improvable |
| Time to Quality | < 3 iterations | Don't frustrate users |

---

## Continuous Improvement

### Eval-Driven Development

1. **Identify Failures**: Run evals, find low-scoring test cases
2. **Root Cause**: Analyze why LLM failed (prompt? context? data?)
3. **Fix**: Update prompt, add examples, improve context retrieval
4. **Re-eval**: Ensure fix doesn't regress other cases
5. **Document**: Record what worked (for future reference)

### Eval Dataset Expansion

- Add production samples quarterly
- Include adversarial cases from user reports
- Expand edge cases as system evolves
- Maintain balance (not just "easy" cases)

---

## Relationship to Existing Tests

### Unit Tests (Deterministic Logic)
- **Governor validation rules**: Already tested (`test_l2_req_2_lifecycle.py`)
- **Graph Store operations**: Already tested (`test_icd_01_ontology.py`)
- **Edge validation**: Already tested

### Functional Tests (L2 Litmus Tests)
- **State machine**: Already tested
- **CRUD operations**: Already tested
- **These are deterministic** - evals not needed

### Evals (LLM Intelligence)
- **Coach Mode quality guidance**: Needs evals (this doc)
- **Spider Mode inference**: Needs evals (this doc)
- **Draft creation**: Needs evals (this doc)

**Key Principle**: If it's deterministic logic, use tests. If it's LLM-based, use evals.

---

## Next Steps

1. **Create Eval Infrastructure**
   - Set up `tests/evals/` directory structure
   - Create base evaluator classes
   - Define eval dataset schema

2. **Build Initial Datasets**
   - Extract test cases from L2 requirements (LITMUS TESTS)
   - Create synthetic examples for each category
   - Label ground truth (expert review)

3. **Implement Evaluators**
   - Coach Mode evaluator
   - Spider Mode evaluator
   - End-to-End evaluator

4. **Establish Baselines**
   - Run evals on current implementation
   - Document baseline scores
   - Set improvement targets

5. **Integrate into CI/CD**
   - Run evals on pull requests (threshold checks)
   - Generate eval reports
   - Track trends over time
