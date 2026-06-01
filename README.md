# TalentMatch AI 🚀

TalentMatch AI is an intelligent recruiter dashboard designed to batch process, evaluate, and rank candidate resumes against custom hiring strategy matrices in real-time. Featuring a multi-page, high-performance web architecture, it bridges the gap between raw candidate resumes and strategic organizational requirements.

---

## 🌟 Key Features

*   **Custom Hiring Strategies:** Configure target roles, required seniority levels, engineering focus areas (e.g., System Scalability, Clean Code), and check for recruiter red flags (e.g., Chronic Job Hopping, Keyword Stuffing).
*   **Batch Processing:** Upload multiple candidate resumes simultaneously.
*   **Dual-Format Parsing:** Natively supports both **PDF** and **Plain Text (TXT)** file formats for candidate resumes.
*   **Intelligent Scoring Engine:** Uses fuzzy matching, skill frequency, focus area alignment, and penalties/bonuses to produce a normalized 0-100 overall match score.
*   **Live Leaderboard:** Displays evaluations instantly with visual score bars, badge categorizations (Exemplary, Strong, Average), and automatic candidate-justification highlights.
*   **Candidate Detail Drawer:** Click on any candidate to inspect their complete profile, extracted keywords, specific signal assessments, and evaluation logs.

---

## 🛠️ Technology Stack

*   **Backend:** [FastAPI](https://fastapi.tiangolo.com/) (Python 3.10+), [Pydantic v2](https://docs.pydantic.dev/) (data validation), [Uvicorn](https://www.uvicorn.org/) (ASGI web server).
*   **Frontend:** HTML5, CSS3 (Vanilla Custom Styles with HSL-tailored colors, Sleek Dark Mode, glassmorphism, and responsive CSS grids), and Vanilla JavaScript (state management, drag-and-drop file processing, UI transitions, and drawer views).
*   **Resume Extraction:** [pypdf](https://pypdf.readthedocs.io/) (PDF text extraction) and Python native string decoding (for text/markdown resume parsing).

---

## 📂 Project Structure

```
TALENTMATCH/
├── app/
│   ├── __init__.py
│   ├── main.py          # FastAPI server configuration & routing
│   └── pipeline.py      # Core async parsing, scoring, & evaluation logic
├── static/              # Frontend static directory
│   ├── index.html       # Public landing page (with simulated workspace widget)
│   ├── how.html         # Educational workflow page
│   ├── pricing.html     # Interactive/humorous tier plans
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
   * Review results on the **Live Leaderboard** or click individual rows to inspect specific signals
