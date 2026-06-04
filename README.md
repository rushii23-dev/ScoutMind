# ScoutMind 🚀

ScoutMind is an intelligent recruiter dashboard designed to batch process, evaluate, and rank candidate resumes against custom hiring strategy matrices in real-time. Featuring a multi-page, high-performance web architecture, it bridges the gap between raw candidate resumes and strategic organizational requirements using advanced alignment mapping.

---

## 🌟 Key Features

*   **Custom Hiring Strategies:** Configure target roles, required seniority levels, engineering focus areas (e.g., System Scalability, Clean Code), and recruiter red flags (e.g., Chronic Job Hopping, Keyword Stuffing).
*   **High-Fidelity Pipeline Analyzer:** A live simulator engine built right into the landing page. Recruiters can input a target role, run candidate batch simulations, and instantly see candidate cards grouped dynamically into **Tier 1 (High Alignment >70%)** and **Tier 2 (Missing Requirements <70%)** using a premium, brutalist visual hierarchy.
*   **Premium Brutalist UI & Design System:** Grounded in a flat, shadowless, warm-concrete zine aesthetic. Employs a cohesive color palette of warm concrete (`#e2e2df`), cream card surfaces (`#f7f6f2`), and Citra Orange (`#fc5000`) accents.
*   **Stepped, Professional Animations:** Subtle, non-bezier transitions including stepped typographic marquee loops for the partner strip, stepped vertical fade-ups for content elements, and crisp border-weight shifts (1px to 2px) on active hovers.
*   **Re-engineered Pricing Grid:** Equal-width pricing tier cards with 40px rounded corners and ultra-thin hairline borders (`1px solid #e5e7eb`). Highlights the premium Enterprise tier using Citra Orange CTA styling.
*   **Dual-Format Resume Processing:** Natively parses and processes both **PDF** and **Plain Text (TXT)** file formats.
*   **Intelligent Evaluation Engine:** Uses a normalized, multi-factor ranking scoring logic (fuzzy parsing, focus alignment, red flag penalties) to assess candidate matching.
*   **Interactive Recruiter Dashboard:** Live leaderboard, signal metrics, justification logs, and candidate details drawers.

---

## 🎨 Premium Design Tokens & Typography

*   **Color Palette:**
    *   Base Background: `#e2e2df` (Warm Concrete)
    *   Card Background: `#f7f6f2` (Cream Card)
    *   Accent Color: `#fc5000` (Citra Orange)
    *   Dark Text/Stroke: `#111111`
*   **Typography System:**
    *   *Display Headings:* **Anton**
    *   *Pricing Titles & Condensed Metrics:* **Bebas Neue**
    *   *Body Copy & Interface Labels:* **DM Sans (500)**

---

## 🛠️ Technology Stack

*   **Backend:** [FastAPI](https://fastapi.tiangolo.com/) (Python 3.10+), [Pydantic v2](https://docs.pydantic.dev/) (data validation), [Uvicorn](https://www.uvicorn.org/) (ASGI web server).
*   **Frontend:** HTML5, CSS3 (Vanilla Custom Styles with HSL-tailored colors, Brutalist zine-aesthetics, and responsive CSS grids), and Vanilla JavaScript (state management, drag-and-drop file processing, UI transitions, and drawer views).
*   **Resume Extraction:** [pypdf](https://pypdf.readthedocs.io/) (PDF text extraction) and Python native string decoding (for text/markdown resume parsing).

---

## 📂 Project Structure

```
SCOUTMIND/
├── app/
│   ├── __init__.py
│   ├── main.py          # FastAPI server configuration & routing
│   └── pipeline.py      # Core async parsing, scoring, & evaluation logic
├── static/              # Frontend static directory
│   ├── index.html       # Public landing page (with High-Fidelity Pipeline Analyzer widget)
│   ├── how.html         # Educational workflow page
│   ├── pricing.html     # Re-engineered pricing page (with custom Bebas Neue/DM Sans typography)
│   ├── login.html       # Minimalist session gate page
│   ├── dashboard.html   # Main recruiter evaluation workspace
│   ├── styles.css       # Premium responsive design system styles
│   ├── script.js        # Frontend state, drag/drop handlers, & modal drawers
│   └── header.html      # Shared header partial
├── package.json         # Front-end configuration (Vite dev server)
├── requirements.txt     # Python backend dependencies
└── README.md            # Project documentation (this file)
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have **Python 3.10+** and **Node.js** installed on your system.

### 1. Python Backend Installation & Run
1. Navigate to the project root directory.
2. Install the required dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Start the FastAPI backend server using Uvicorn:
   ```bash
   uvicorn app.main:app --reload --port 8000
   ```
   *The backend documentation will be accessible at [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs).*

### 2. Frontend Local Dev Server
The repository comes equipped with Vite for fast local preview:
1. Install Node dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open the displayed address (usually `http://localhost:5173`) in your web browser.

---

## 🛡️ Usage and Authentication

1. **Accessing the Dashboard:** The `/dashboard` route is protected by a session cookie.
2. **Login Credentials:** Any mock login on the `/login` page sets the session cookie and redirects you to the recruiter dashboard.
3. **Evaluating Resumes:**
   * Configure your **Hiring Strategy** in the sidebar (Role, Seniority, Focus areas, and Red Flags).
   * Drag and drop or browse `.pdf` or `.txt` resumes in the upload zone.
   * Click **Execute Intelligent Evaluation** to run the ranking model.
   * Review results on the **Live Leaderboard** or click individual rows to inspect specific signals.
