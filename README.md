<div align="center">
  <br />
  <h1>ScoutMind</h1>
  <p><strong>Intelligent Candidate Discovery</strong></p>
  <p><i>Built by Team <b>Byte Force</b> | Led by <b>Rushikesh Milind Patil</b></i></p>
  <br />
</div>

## The Core Problem

Traditional Applicant Tracking Systems (ATS) are fundamentally broken. They rely on rigid, keyword-stuffed parsing that is easily gamed by candidates and entirely misses the nuance of true technical capability. **ScoutMind** overthrows this outdated model by introducing an intelligent, high-dimensional understanding of candidate profiles—ensuring that exceptional talent is surfaced based on actual substance, not SEO optimization.

---

## Engineering Blueprint

At the heart of ScoutMind is a **high-velocity dual-retrieval funnel** architected for maximum precision and recall. 

Instead of relying on single-axis searches, we combine two powerful retrieval methods:
1. **Sparse BM25 Exact Search:** Guarantees precise keyword matching for non-negotiable hard skills and specific tooling.
2. **Dense High-Dimensional Vector Embeddings:** Powered by advanced **E5/BGE models**, this layer understands the semantic meaning and contextual relationships within candidate experience, bypassing traditional keyword limitations.

These dual pipelines feed into an optimized **Vector Database Layer** (Qdrant / Pinecone), enabling sub-second latency across massive candidate pools.

---

## Pipeline Filtering Rules & Scoring Matrix

ScoutMind moves away from single-winner caps, dynamically batching talent into scalable tiers based on a proprietary scoring matrix:

- **The Split:** 80% Technical Capability | 20% Behavioral Availability Signals.
- **The Threshold:** A strict **>70% capability cutoff** ensures absolute quality control.

Candidates passing the threshold are autonomously extracted and routed into:
* **Tier 1 (Perfect Match):** Candidates hitting exact technical requirements with strong behavioral alignment.
* **Tier 2 (Strong Match):** Highly capable candidates demonstrating high-dimensional semantic overlap with the role's core competencies.

---

## System Properties & UI Design

We believe powerful enterprise software shouldn't look like a spreadsheet. ScoutMind features a distraction-free, high-density **editorial Brutalist UI** designed for extreme usability and extended cognitive focus.

**Design Tokens & Aesthetics:**
* **Typography:** Crisp, clean layouts driven by **Manrope** typography, prioritizing scanning speed and legibility.
* **Color Architecture:** Grounded in a minimalist, premium palette featuring **Concrete Canvas** (`#e2e2df`) and **Cream Card** (`#f7f6f2`) variables.
* **Layout:** High-density data presentation without visual clutter, perfectly tracking between our landing page and the core discovery dashboard.

---

<div align="center">
  <p><i>Engineered for the next generation of talent discovery.</i></p>
</div>
