# NLP Knowledge Artifact Repository

A notebook-styled **GitHub Pages repository** documenting **Week 1 Natural Language Processing (NLP) concepts** through concept cards, comparison pages, workflow diagrams, real-world applications, and research insights.

**Prepared by:**

* **Nupoor Mahajan**
* **Hansa Gusaiwal**

## Live Website

🌐 **GitHub Pages Site:** https://nupoor-mahajan.github.io/NLP/
📂 **GitHub Repository:** https://github.com/nupoor-mahajan/NLP

---

## About the Repository

This repository is an academic **Knowledge Artifact Repository** created to document and explain the **foundational NLP concepts covered in Week 1** of our coursework.

Instead of presenting the material as a static report, the project is designed as a **clean, notebook-inspired multi-page website** built using **HTML, CSS, and JavaScript**. The goal is to make core NLP topics easier to explore, revise, and understand through structured pages, visual workflows, comparison tables, and real-world applications.

The repository covers the journey from **raw text preprocessing** to **feature engineering**, **language representation**, and **language models**, while also connecting these concepts to research, industry use cases, and societal impact.

---

## Team Members and Individual Contributions

| Name               | Individual Contribution                                                                                                                                     |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Nupoor Mahajan** | Tokenization, Stemming, Bag of Words concept cards; **Stemming vs Lemmatization** comparison; **Text Preprocessing Pipeline** workflow; personal reflection |
| **Hansa Gusaiwal** | Lemmatization, TF-IDF, Word Embeddings concept cards; **TF vs TF-IDF** comparison; **Feature Engineering Pipeline** workflow; personal reflection           |

All remaining pages — including the additional concept cards, third comparison page, text-to-vector workflow, application pages, research/industry pages, sustainability section, glossary, references, homepage, and README — were **jointly prepared** by both students.

📌 See the full **Contribution Matrix** here:
**Contribution Matrix:** https://nupoor-mahajan.github.io/NLP/pages/contribution-matrix/index.html

---

# Repository Structure

```text
NLP/
├── README.md
├── index.html
├── assets/
│   ├── css/                  # style.css, components.css, pages.css
│   ├── js/                   # main.js, theme.js, search.js, progress.js
│   ├── images/               # diagrams, icons, placeholders
│   └── data/                 # glossary.json
│
└── pages/
    ├── about/
    ├── section-a-concept-cards/
    ├── section-b-comparative-analysis/
    ├── section-c-workflow-diagrams/
    ├── section-d-real-world-applications/
    ├── section-e-research-industry-insights/
    ├── sustainability-and-societal-impact/
    ├── contribution-matrix/
    ├── reflection-notes/
    ├── glossary/
    ├── references/
    └── academic-integrity/
```

---

# Repository Sections

## Section A — Concept Cards

Covers **21 NLP concept pages** grouped under:

* **Text Preprocessing**
* **Feature Engineering**
* **Language Representation**
* **Language Models**

Each concept page includes:

* Definition
* Purpose
* Working Principle
* Example
* Advantages
* Limitations
* Applications

🔗 **Open Section A:**
https://nupoor-mahajan.github.io/NLP/pages/section-a-concept-cards/index.html

---

## Section B — Comparative Analysis

Contains comparison pages designed to highlight similarities, differences, and practical use-cases of related NLP concepts.

Included comparisons:

* **Stemming vs Lemmatization**
* **TF vs TF-IDF**
* **One-Hot Encoding vs Word Embeddings**

Each comparison page includes:

* working mechanism
* computational complexity
* strengths
* weaknesses
* suitable applications

🔗 **Open Section B:**
https://nupoor-mahajan.github.io/NLP/pages/section-b-comparative-analysis/index.html

---

## Section C — Workflow Diagrams

Explains NLP pipelines visually through workflow pages and Mermaid-based diagrams.

Included workflows:

* **Complete Text Preprocessing Pipeline**
* **Feature Engineering Pipeline**
* **Text-to-Vector Transformation Process**

🔗 **Open Section C:**
https://nupoor-mahajan.github.io/NLP/pages/section-c-workflow-diagrams/index.html

---

## Section D — Real-World Applications

Shows how Week 1 NLP concepts are used in practical systems.

Applications included:

* Search Engines
* Chatbots
* Sentiment Analysis
* Machine Translation
* Text Summarization

Each application page explains:

* relevant NLP concepts
* why they are needed
* expected benefits
* a real-world example / industry connection

🔗 **Open Section D:**
https://nupoor-mahajan.github.io/NLP/pages/section-d-real-world-applications/index.html

---

## Section E — Research and Industry Insights

Connects foundational NLP concepts to current developments in the field.

This section includes:

* **two recent research developments**
* **two industrial applications**
* **one open-source NLP framework page** (spaCy, with NLTK briefly referenced)
* a summary connecting Week 1 concepts to modern NLP practice

🔗 **Open Section E:**
https://nupoor-mahajan.github.io/NLP/pages/section-e-research-industry-insights/index.html

---

## Sustainability and Societal Impact

A dedicated section on:

**How NLP Can Contribute to Society and Sustainable Development**

Topics include:

* Language Accessibility
* Regional Language Technologies
* Educational Inclusion
* Assistive Technologies
* Citizen Services

The discussion is written with relevance to **India, regional languages, and inclusive technology**.

🔗 **Open Sustainability Section:**
https://nupoor-mahajan.github.io/NLP/pages/sustainability-and-societal-impact/index.html

---

## Additional Academic Pages

### Contribution Matrix

Faculty-verifiable breakdown of individual and shared contributions.
🔗 https://nupoor-mahajan.github.io/NLP/pages/contribution-matrix/index.html

### Reflection Notes

Individual reflections by both students on their learning and contribution process.
🔗 https://nupoor-mahajan.github.io/NLP/pages/reflection-notes/index.html

### Glossary

Beginner-friendly definitions of important NLP terms used throughout the repository.
🔗 https://nupoor-mahajan.github.io/NLP/pages/glossary/index.html

### References

Sources, documentation links, and supporting material used while preparing the repository.
🔗 https://nupoor-mahajan.github.io/NLP/pages/references/index.html

### Academic Integrity

Includes:

* AI Usage Declaration
* Plagiarism and Originality Note

🔗 https://nupoor-mahajan.github.io/NLP/pages/academic-integrity/ai-usage-declaration.html

---

# Tech Stack

This project is intentionally built as a **fully static website**.

* **HTML5**
* **CSS3**
* **JavaScript**
* **Mermaid.js** (for workflow diagrams)
* **GitHub Pages** (for hosting)

No backend, framework, or build process is required.

---

# How to Run Locally

You can open the repository locally in two ways.

## Option 1 — Open directly

Open `index.html` in a browser.

## Option 2 — Run a simple local server (recommended)

Some browsers restrict certain local file behaviors, so using a local server gives a more accurate preview.

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

---

# How to Publish on GitHub Pages

This repository is already structured for GitHub Pages deployment.

## If deploying from your own GitHub repository:

1. Push the repository contents to GitHub.
2. Go to **Repository → Settings → Pages**
3. Under **Source**, choose:

   * **Deploy from a branch**
   * **Branch:** `main`
   * **Folder:** `/ (root)`
4. Save the settings.
5. GitHub will publish the site at:

```text
https://<your-username>.github.io/<repository-name>/
```

For this repository, the published URL is:

**https://nupoor-mahajan.github.io/NLP/**

Because the site uses **relative internal links**, it works correctly as a **GitHub Pages project site** inside a repository folder.

---

# Academic Integrity and AI Usage

This repository includes dedicated academic integrity pages:

* **AI Usage Declaration**
  https://nupoor-mahajan.github.io/NLP/pages/academic-integrity/ai-usage-declaration.html

* **Plagiarism & Originality Note**
  https://nupoor-mahajan.github.io/NLP/pages/academic-integrity/plagiarism-and-originality-note.html

In summary:

* **ChatGPT** was used for brainstorming, planning, and structuring content ideas
* **Claude** was used for coding/development assistance and debugging
* all final content was reviewed, curated, and organized by the students
* AI tools were used as support tools, not as a substitute for understanding

---

# Learning Focus of the Repository

Through this repository, we aimed to:

* understand how raw text is cleaned and prepared for NLP tasks
* compare different feature engineering techniques
* study the transition from sparse text features to dense vector representations
* understand the role of embeddings and language models in modern NLP
* connect foundational Week 1 concepts to practical applications, research, and societal impact
* build a structured academic resource rather than a one-time assignment file

---

# Quick Access Links

* **Homepage:** https://nupoor-mahajan.github.io/NLP/
* **Section A — Concept Cards:** https://nupoor-mahajan.github.io/NLP/pages/section-a-concept-cards/index.html
* **Section B — Comparative Analysis:** https://nupoor-mahajan.github.io/NLP/pages/section-b-comparative-analysis/index.html
* **Section C — Workflow Diagrams:** https://nupoor-mahajan.github.io/NLP/pages/section-c-workflow-diagrams/index.html
* **Section D — Real-World Applications:** https://nupoor-mahajan.github.io/NLP/pages/section-d-real-world-applications/index.html
* **Section E — Research & Industry Insights:** https://nupoor-mahajan.github.io/NLP/pages/section-e-research-industry-insights/index.html
* **Sustainability Section:** https://nupoor-mahajan.github.io/NLP/pages/sustainability-and-societal-impact/index.html
* **Contribution Matrix:** https://nupoor-mahajan.github.io/NLP/pages/contribution-matrix/index.html
* **Reflection Notes:** https://nupoor-mahajan.github.io/NLP/pages/reflection-notes/index.html
* **Glossary:** https://nupoor-mahajan.github.io/NLP/pages/glossary/index.html
* **References:** https://nupoor-mahajan.github.io/NLP/pages/references/index.html

---

# Final Note

This repository was created not only to complete an academic task, but also to build a **structured, readable, and reusable NLP learning resource**. By turning Week 1 concepts into a navigable website, the project aims to make revision, understanding, and explanation easier than a conventional report format.
