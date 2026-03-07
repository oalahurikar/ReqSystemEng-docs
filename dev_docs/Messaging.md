# Messaging

> What we say, how we say it, and the promise boundary. Source of truth for landing page copy, conversations, and content.
> For who we say it to: [[ICP and Go-to-Market]]
> For why it matters: [[Strategic Anchor]]

**Last Updated:** 2026-03-04

---

## Core Value Statement

**The product holds the cross-domain picture you can't hold in your head — and flags when pieces don't fit.**

Engineers think one component at a time. Failures live in the connections between components. The co-pilot compensates for that attention limit: it catches gaps, conflicts, and ripple effects at the boundaries — by listening to how you already think.

---

## The Pitch (Three Lengths)

### One line
> Talk through your design with an AI co-pilot. It catches what you missed at the boundaries before you build it.

### 30 seconds

Hardware engineers know their components. What they miss is the spaces between — the interface where the battery meets the motor, where the sensor talks to the MCU. That's where integration failures happen, and they cost $5K–$50K per hardware respin.

You talk through your design with an AI co-pilot. It captures your decisions, flags gaps at boundaries, catches conflicts between specs, and generates structured engineering artifacts — directly from the conversation. No forms, no modeling languages. Think out loud, get structured output.

### 2 minutes

_[30-second version, plus:]_

Three things make this work:

1. **Conversation is the natural capture mechanism.** Engineers already reason out loud — in design reviews, in their heads, on whiteboards. We capture that reasoning as structured data instead of making them fill out forms after the fact.

2. **The AI understands cross-domain engineering.** When you specify a motor, it knows to ask about thermal coupling to the battery. When you define an I2C interface, it flags that you haven't specified pull-up values or bus length. Not from a checklist — from pattern recognition across thousands of hardware designs.

3. **Artifacts are byproducts, not busywork.** Every captured decision, every flagged gap, every dependency — that's your Interface Control Document. That's your compliance trail. Teams doing ISO 26262 or IEC 62304 get documentation from the engineering work they're already doing.

**What we're not:** We're not a PLM. We're not replacing your CAD or your BOM tool. We're the thinking layer that sits before all of that — where decisions get made and where the expensive mistakes happen.

---

## Value Hierarchy

What makes someone pay, in order:

1. **Catching** — "It found something I would have missed." The core. Everything else amplifies this.
2. **Artifacts** — "I walked away with a structured document I can use." The proof of value. What makes the catching shareable (design reviews, vendor meetings).
3. **Compliance** — "My audit trail built itself." The multiplier for teams. Not what sells to individuals, but what justifies team pricing.

If the catching doesn't work, nothing else matters. If it works but artifacts are ugly, it's still valuable but hard to share. If catching + artifacts work, compliance is free.

---

## "Worth Paying For" Moments

Each example must be something the LLM can realistically catch from pattern recognition — not physics computation.

### For entry ICP (individual engineer)

> "I was specifying an I2C sensor interface — just protocol and voltage. The co-pilot flagged that I hadn't defined pull-up resistor values, bus length limits, or what happens when the sensor goes offline. I was thinking about the sensing algorithm, not the physical connection. That's a board respin I didn't have to do."

> "I said the system needs a 24V motor and a 12V sensor on the same power bus. I hadn't thought about voltage regulation at that interface. The co-pilot caught the mismatch before I ordered parts."

> "I described my drone for 20 minutes. At the end, the co-pilot showed me 8 structured decisions with specs and tests, plus 3 interfaces where I'd only defined one side. I would have found those gaps during assembly — three weeks later."

### For target ICP (teams, later)

> "An engineer changed the motor spec. The co-pilot showed the blast radius — thermal budget, battery sizing, frame stress, and firmware timing all affected. If we'd caught that before ordering the PCB, we'd have saved $15K and 6 weeks."

---

## Promise Boundary

Be honest about what v1 can and can't do.

**V1 catches:**
- Conflicts in stated values ("you said 24V here and 12V there")
- One-sided interface definitions ("sensor side defined, MCU side never mentioned")
- Common missing interface parameters ("I2C without pull-ups, motor without stall protection, battery without low-voltage behavior") — from LLM domain knowledge
- Ripple effects ("you changed the sensor voltage, three downstream decisions assumed the old value")
- Premature solutioning ("you're specifying a motor before defining the mission")
- Ambiguity ("'fast response' — what response time, under what load, at what temperature?")

**V1 does NOT catch:**
- Physics computation ("your battery's discharge curve crosses the motor's minimum voltage at 60% state of charge") — needs simulation, not pattern matching
- Silicon-specific edge cases ("your specific MCU has internal I2C pull-ups") — LLM knows common patterns, not every datasheet
- Novel interface types with no training precedent

**The tone rule:** Flags are awareness, not assertions. "I2C typically needs pull-up resistors — verify against your MCU's datasheet" not "You're missing pull-up resistors." One wrong confident assertion poisons trust in all correct flags.

---

## Audience Hooks

Same product, different frame depending on who you're talking to:

| Audience | Hook | What they care about |
|----------|------|---------------------|
| **Individual engineer** | "It catches what you missed at the boundary before you build it" | Time saved, respins avoided |
| **Engineering lead** | "Integration failures found on screen, not at the bench" | Team velocity, fewer surprises |
| **Startup founder** | "Structured specs from conversation — hand them to your contract manufacturer" | Speed to production |
| **Investor** | "Compliance-as-byproduct for hardware teams, $29 entry → $349/user/month expansion" | Market size, expansion revenue |

---

## Objection Handling

### "Isn't this just ChatGPT?"

ChatGPT can answer engineering questions. It can't track 30 decisions, flag when decision #27 contradicts decision #4, or generate a consistent ICD from a conversation. The value isn't the AI — it's the structured capture and cross-referencing that happens during the conversation.

### "I don't need requirements management"

Neither do we. You need to not burn a $15K PCB respin because the motor team and the thermal team had different assumptions. This isn't about managing requirements — it's about catching conflicts before you build.

### "My project is too simple for this"

If your system has fewer than 5 interacting components in a single domain, you're right — it fits in your head. If you have 5+ components across mechanical, electrical, and software, you're already missing connections. That's where this helps.

### "I don't trust AI with engineering decisions"

The co-pilot doesn't make decisions. You do. It asks questions, flags gaps, and surfaces conflicts. You verify and decide. Think of it as a second pair of eyes that never forgets what you said 20 minutes ago.

### "How is this different from DOORS/Jama?"

DOORS manages documents. We manage a conversation. DOORS requires you to write formal requirements in a specific syntax. We capture decisions from how you already think. DOORS costs $3-6K per seat and requires a systems engineering team to maintain. We cost $29 per session and work for one engineer on a side project.

---

## Landing Page Structure

### Above the fold
- **Headline:** "Talk through your design. Catch what you missed."
- **Subhead:** "An AI co-pilot for hardware engineers. It captures your decisions, flags gaps at boundaries, and generates structured specs — from conversation."
- **CTA:** "Try a session — $29"
- **Visual:** Before/after. Left: messy notes, vague specs. Right: structured decision table with specs, tests, dependencies, and flagged gaps.

### Section 1: The problem
"You know your components. You're missing the spaces between."
- The 7-domain interface example (Battery ↔ Motor: electrical, connector, wire, mechanical, thermal, protection, failure)
- "Engineers typically define 2-3. The other 4-5 surface at integration."

### Section 2: How it works
"Think out loud. Get structured output."
- 3-step flow: (1) Describe your project → (2) Co-pilot sharpens and captures → (3) Get structured artifacts
- Show a real session excerpt (2-3 exchanges showing ambiguity caught or gap flagged)

### Section 3: What you get
"One session. Real artifacts."
- Decision Document with specs, tests, rationale
- Interface Control Document with gap analysis
- Dependency map showing what connects to what

### Section 4: Who it's for
"If your system crosses domains, this is for you."
- Project examples: drone, robotic arm, IoT sensor, e-bike, medical device
- Complexity filter: 5+ interacting components across 2+ domains

### Section 5: Social proof (when available)
- Real session outputs (anonymized if needed)
- "I would have missed half of these" quotes

### Footer CTA
- "Try a session — $29. No signup required."

---

## One-Sentence Tests

Sentences to test in conversations and content. Track which ones make people lean in.

| # | Sentence | Tests |
|---|----------|-------|
| 1 | "Talk about what you're building. Get structured decisions in 20 minutes." | Speed + low friction |
| 2 | "It catches what you missed at the boundary before you build it." | Core value — catching |
| 3 | "Your components work. The connections between them don't. We fix that." | Problem framing |
| 4 | "Stop burning hardware respins on decisions that should have been caught at the whiteboard." | Pain + cost |
| 5 | "Think out loud. Get an ICD." | Artifact value + simplicity |

---

## Change Log

| Date | Change | Rationale |
|------|--------|-----------|
| 2026-03-04 | Created | Consolidated pitch, value hierarchy, promise boundary, objection handling, and landing page structure from strategy sessions. |
