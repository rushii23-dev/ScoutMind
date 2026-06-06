/**
 * ScoutMind — Frontend Controller Engine
 * #21n Architectural Design System — Dynamic State Logic
 */

// ══════════════════════════════════════════════════════════════════════════════
// 1. GLOBAL ROLE CATALOG — 50 Live Industry Target Roles
// ══════════════════════════════════════════════════════════════════════════════
const ALL_ROLES = [
  'AI & Machine Learning Engineer',
  'Generative AI Solutions Architect',
  'Agentic AI Architect',
  'MLOps Engineer',
  'Model Context Protocol (MCP) Integration Engineer',
  'Deep Learning Specialist',
  'NLP Engineer',
  'Data Scientist',
  'Big Data Pipeline Engineer',
  'Prompt Optimization Engineer',
  'LLM Evaluation Specialist',
  'Backend Systems Engineer',
  'Frontend UI/UX Architect',
  'Fullstack Product Engineer',
  'Mobile iOS Specialist',
  'Android Systems Engineer',
  'Embedded Systems Lead',
  'Distributed Systems Software Engineer',
  'API & Microservices Architect',
  'High-Performance Computing Engineer',
  'Rust Systems Developer',
  'DevOps Automation Engineer',
  'Cloud Solutions Infrastructure Architect',
  'Site Reliability Engineer (SRE)',
  'Kubernetes Specialist',
  'Sovereign Cloud Engineer',
  'Platform Engineering Lead',
  'Zero Trust Security Architect',
  'Cloud & AI Security Engineer',
  'Cyber Threat Analyst',
  'Data Governance Specialist',
  'DevSecOps Security Engineer',
  'Application Penetration Tester',
  'AI Product Manager',
  'Technical Program Manager (TPM)',
  'Engineering Lead',
  'QA Automation Architect',
  'GCC Tech Lead',
  'Enterprise SaaS Solutions Engineer',
  'IT Project Manager',
  'Systems Infrastructure Lead',
  'Infrastructure as Code (IaC) Engineer',
  'Network Engineer',
  'Core Java Platform Developer',
  '.NET Cloud Engineer',
  'C++ Software Engineer',
  'Computer Vision Developer',
  'MLOps Security Auditor',
  'Compliance Analyst',
  'Solutions Architect',
];

// ══════════════════════════════════════════════════════════════════════════════
// 2. UTILITY HELPERS
// ══════════════════════════════════════════════════════════════════════════════

// Page detection flags
const PAGE = {
  isLanding: document.body.classList.contains('page-landing'),
  isDashboard: document.body.classList.contains('page-dashboard'),
};

// Escape HTML strings to prevent XSS
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text || '';
  return div.innerHTML;
}

// Populate a <select> dropdown with role options
function populateRoleSelect(selectEl, defaultRole) {
  if (!selectEl) return;
  selectEl.innerHTML = '';
  ALL_ROLES.forEach(role => {
    const opt = document.createElement('option');
    opt.value = role;
    opt.textContent = role;
    if (role === defaultRole) opt.selected = true;
    selectEl.appendChild(opt);
  });
}

// Bind a search input to dynamically filter visible <option> elements
function bindRoleSearch(searchInput, selectEl) {
  if (!searchInput || !selectEl) return;
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase().trim();
    const options = selectEl.options;
    let firstVisibleSelected = false;
    for (let i = 0; i < options.length; i++) {
      const text = options[i].textContent.toLowerCase();
      const match = !query || text.includes(query);
      options[i].hidden = !match;
      // Auto-select first visible match to keep dropdown in sync
      if (match && !firstVisibleSelected) {
        options[i].selected = true;
        firstVisibleSelected = true;
      }
    }
  });
}


// ══════════════════════════════════════════════════════════════════════════════
// 3. PUBLIC LANDING PAGE — Widget Simulation Engine
// ══════════════════════════════════════════════════════════════════════════════
if (PAGE.isLanding) {
  const MOCK_CANDIDATES = [
    {
      name: 'Elena Kozlova',
      title: 'Senior ML Engineer @ TechFlow',
      score: 96,
      tech_depth: 'Exemplary',
      culture_fit: 'High Alignment',
      why_fit: 'Deep expertise in PyTorch distributed training; scaled models for 50M+ users.',
      skills: ['Python', 'PyTorch', 'AWS', 'Docker'],
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100'
    },
    {
      name: 'Julian Duarte',
      title: 'Backend Architect @ AlphaNodes',
      score: 91,
      tech_depth: 'Exemplary',
      culture_fit: 'Founder Mindset',
      why_fit: 'Built high-throughput Go microservices; strong system design fundamentals.',
      skills: ['Go', 'PostgreSQL', 'Redis', 'Docker'],
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100'
    },
    {
      name: 'Sarah Manning',
      title: 'Fullstack Lead @ CloudScale',
      score: 84,
      tech_depth: 'Strong',
      culture_fit: 'Medium Alignment',
      why_fit: 'Solid React/TypeScript patterns; lacks deep database optimization patterns.',
      skills: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100'
    },
    {
      name: 'Alex Chen',
      title: 'DevOps Engineer @ CloudStack',
      score: 78,
      tech_depth: 'Average',
      culture_fit: 'High Alignment',
      why_fit: 'Competent infrastructure automations with Kubernetes; learning PyTorch deployment models.',
      skills: ['Python', 'Kubernetes', 'AWS', 'Docker'],
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100'
    }
  ];

  let simRole = 'Frontend UI/UX Architect';
  let simSeniority = 'Senior';

  const demoRoleSelect = document.getElementById('demoRoleSelect');
  const demoRoleSearch = document.getElementById('demoRoleSearch');
  const demoSeniorityPills = document.getElementById('demoSeniorityPills');
  const demoLeaderboard = document.getElementById('demoLeaderboard');

  populateRoleSelect(demoRoleSelect, simRole);
  bindRoleSearch(demoRoleSearch, demoRoleSelect);

  // Render mock leaderboard with shimmer transition
  function renderSimLeaderboard() {
    if (!demoLeaderboard) return;

    // Show shimmer placeholders
    demoLeaderboard.innerHTML = '';
    for (let i = 0; i < 4; i++) {
      const tr = document.createElement('tr');
      tr.className = 'shimmer-loading';
      tr.innerHTML = `<td colspan="7"></td>`;
      demoLeaderboard.appendChild(tr);
    }

    setTimeout(() => {
      const scored = MOCK_CANDIDATES.map(cand => {
        let scoreMod = cand.score;
        if (simRole.includes('Frontend') || simRole.includes('React') || simRole.includes('Fullstack')) {
          if (cand.skills.includes('React') || cand.skills.includes('TypeScript')) {
            scoreMod = Math.min(100, scoreMod + 5);
          } else if (cand.skills.includes('PyTorch')) {
            scoreMod = Math.max(40, scoreMod - 15);
          }
        } else if (simRole.includes('Machine Learning') || simRole.includes('AI')) {
          if (cand.skills.includes('PyTorch')) {
            scoreMod = Math.min(100, scoreMod + 3);
          }
        } else {
          if (cand.skills.includes('PyTorch')) {
            scoreMod = Math.max(40, scoreMod - 10);
          }
        }
        if (simSeniority === 'Junior') {
          scoreMod = Math.round(scoreMod * 0.7);
        } else if (simSeniority === 'Mid') {
          scoreMod = Math.round(scoreMod * 0.85);
        } else if (simSeniority === 'Lead') {
          scoreMod = Math.min(100, scoreMod + 2);
        }
        return { ...cand, score: Math.max(20, Math.min(100, scoreMod)) };
      });

      scored.sort((a, b) => b.score - a.score);

      demoLeaderboard.innerHTML = '';
      scored.forEach((cand, idx) => {
        const tr = document.createElement('tr');
        tr.style.opacity = '0';
        tr.style.transform = 'translateY(4px)';
        tr.style.transition = 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)';

        const trClass = cand.tech_depth.toLowerCase();
        const cfClass = cand.culture_fit.toLowerCase().replace(/\s/g, '').replace('/', '');

        tr.innerHTML = `
          <td class="col-rank">#${String(idx + 1).padStart(2, '0')}</td>
          <td>
            <div class="candidate-cell">
              <div class="candidate-avatar"><img src="${cand.avatar}" alt="${cand.name}"></div>
              <div class="candidate-info">
                <span class="candidate-name">${cand.name}</span>
                <span class="candidate-role-sub">${cand.title}</span>
              </div>
            </div>
          </td>
          <td class="score-cell">
            <div class="score-bar-container">
              <div class="score-bar-bg"><div class="score-bar-fill" style="width: ${cand.score}%"></div></div>
              <span class="score-text">${cand.score}%</span>
            </div>
          </td>
          <td><span class="tech-badge ${trClass}">${cand.tech_depth}</span></td>
          <td><span class="culture-badge ${cfClass}">${cand.culture_fit}</span></td>
          <td class="col-justification">"${cand.why_fit}"</td>
          <td class="col-tags">
            <div class="row-tags-wrapper">
              ${cand.skills.map(s => `<span class="row-tag">${s}</span>`).join('')}
            </div>
          </td>
        `;
        demoLeaderboard.appendChild(tr);

        requestAnimationFrame(() => {
          setTimeout(() => {
            tr.style.opacity = '1';
            tr.style.transform = 'translateY(0)';
          }, idx * 80);
        });
      });
    }, 450);
  }

  if (demoRoleSelect) {
    demoRoleSelect.addEventListener('change', () => {
      simRole = demoRoleSelect.value;
      renderSimLeaderboard();
    });
  }
  if (demoSeniorityPills) {
    demoSeniorityPills.addEventListener('click', (e) => {
      const pill = e.target.closest('.seniority-pill');
      if (!pill) return;
      demoSeniorityPills.querySelectorAll('.seniority-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      simSeniority = pill.dataset.level;
      renderSimLeaderboard();
    });
  }
  if (demoLeaderboard) {
    renderSimLeaderboard();
  }

  // Scroll reveal observer for how.html animations
  const revealElements = document.querySelectorAll('.scroll-reveal');
  if (revealElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          if (entry.target.id === 'step-evaluation') {
            const matchValEl = document.getElementById('matchValue');
            if (matchValEl && matchValEl.textContent === '0%') {
              animatePercentCounter(matchValEl, 97, 1000);
            }
          }
        }
      });
    }, { threshold: 0.25 });
    revealElements.forEach(el => observer.observe(el));
  }

  function animatePercentCounter(el, targetValue, durationMs) {
    let startTime = null;
    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / durationMs, 1);
      el.textContent = Math.floor(progress * targetValue) + '%';
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        el.textContent = targetValue + '%';
      }
    }
    window.requestAnimationFrame(step);
  }
}


// ══════════════════════════════════════════════════════════════════════════════
// 4. DASHBOARD CONTROLLER — Two-Step AI Evaluation Pipeline
// ══════════════════════════════════════════════════════════════════════════════
if (PAGE.isDashboard) {

  // ── State Management ─────────────────────────────────────────────────────
  const state = {
    jobDescription: '',
    files: [],
    results: [],
    allEvaluatedResults: [],
    currentSort: 'score',
    isEvaluating: false,
    currentTab: 'live' // 'live' or 'all'
  };

  // ── DOM Element Map ──────────────────────────────────────────────────────
  const dom = {
    jobDescriptionInput: document.getElementById('jobDescriptionInput'),
    jobDescriptionFile: document.getElementById('jobDescriptionFile'),
    jobDescriptionStatus: document.getElementById('jobDescriptionStatus'),
    analyzeReqBtn: document.getElementById('analyzeReqBtn'),
    workflowSection: document.getElementById('workflowSection'),
    step1Card: document.getElementById('step1Card'),
    
    fileInput: document.getElementById('fileInput'),
    fileList: document.getElementById('fileList'),
    uploadZone: document.getElementById('uploadZone'),
    executeBtn: document.getElementById('executeBtn'),
    leaderboard: document.getElementById('leaderboard'),

    evaluationBanner: document.getElementById('evaluationBanner'),
    bannerSummaryText: document.getElementById('bannerSummaryText'),
    bannerProgressFill: document.getElementById('bannerProgressFill'),

    analyticsMatrix: document.getElementById('analyticsMatrix'),
    leaderboardContainer: document.getElementById('leaderboardContainer'),
    workflowSection: document.getElementById('workflowSection'),
    allCandidatesView: document.getElementById('allCandidatesView'),
    backToDashboardBtn: document.getElementById('backToDashboardBtn'),
    allCandidatesTableBody: document.getElementById('allCandidatesTableBody'),

    metricProcessing: document.getElementById('metricProcessing'),
    metricCost: document.getElementById('metricCost'),
    metricSkill: document.getElementById('metricSkill'),
    metricFlags: document.getElementById('metricFlags'),
    metricFlagsBadge: document.getElementById('metricFlagsBadge'),

    sortButtons: document.querySelectorAll('.sort-button'),

    loadingOverlay: document.getElementById('loadingOverlay'),
    progressFill: document.getElementById('progressFill'),
    loadingText: document.getElementById('loadingText'),

    drawerBackdrop: document.getElementById('drawerBackdrop'),
    detailDrawer: document.getElementById('detailDrawer'),
    drawerTitle: document.getElementById('drawerTitle'),
    drawerBody: document.getElementById('drawerBody'),
    drawerClose: document.getElementById('drawerClose'),

    subnavTabs: document.querySelectorAll('.subnav-tab'),
  };

  // ── Job Description Input ───────────────────────────────────────────────
  function syncJobDescriptionStatus() {
    if (!dom.jobDescriptionStatus) return;
    const hasDescription = state.jobDescription.trim().length > 0;
    dom.jobDescriptionStatus.textContent = hasDescription
      ? 'Context ready for analysis'
      : 'Waiting for context';
    dom.jobDescriptionStatus.classList.toggle('ready', hasDescription);
  }

  if (dom.jobDescriptionInput) {
    dom.jobDescriptionInput.addEventListener('input', () => {
      state.jobDescription = dom.jobDescriptionInput.value;
      syncJobDescriptionStatus();
    });
  }

  if (dom.jobDescriptionFile) {
    dom.jobDescriptionFile.addEventListener('change', async (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;

      if (file.type === 'text/plain' || file.name.toLowerCase().endsWith('.txt')) {
        state.jobDescription = await file.text();
        if (dom.jobDescriptionInput) dom.jobDescriptionInput.value = state.jobDescription;
      } else {
        state.jobDescription = `Uploaded context: ${file.name}`;
        if (dom.jobDescriptionInput && !dom.jobDescriptionInput.value.trim()) {
          dom.jobDescriptionInput.value = state.jobDescription;
        }
      }

      syncJobDescriptionStatus();
    });
  }

  syncJobDescriptionStatus();

  // ── Subnav Tabs & SPA Toggling Logic ─────────────────────────────────────
  if (dom.subnavTabs && dom.subnavTabs.length > 0) {
    dom.subnavTabs.forEach((tab, index) => {
      tab.addEventListener('click', () => {
        // Toggle active visual state
        dom.subnavTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        // Logic based on tab text
        const text = tab.textContent.toLowerCase();
        if (text.includes('all candidates')) {
          state.currentTab = 'all';
          // Hide Dashboard Views
          if (dom.workflowSection) dom.workflowSection.style.display = 'none';
          if (dom.analyticsMatrix) dom.analyticsMatrix.style.display = 'none';
          if (dom.leaderboardContainer) dom.leaderboardContainer.style.display = 'none';
          
          // Show All Candidates View
          if (dom.allCandidatesView) {
            dom.allCandidatesView.style.display = 'block';
            dom.allCandidatesView.classList.remove('hidden-results');
            dom.allCandidatesView.classList.add('fade-in-up');
            renderAllCandidatesTable(state.allEvaluatedResults);
          }
        } else if (text.includes('live ranking')) {
          state.currentTab = 'live';
          
          // Hide All Candidates View
          if (dom.allCandidatesView) dom.allCandidatesView.style.display = 'none';
          
          // Restore Dashboard Views
          if (dom.workflowSection) dom.workflowSection.style.display = '';
          if (state.isEvaluating === false && state.results.length > 0) {
             if (dom.analyticsMatrix) dom.analyticsMatrix.style.display = '';
             if (dom.leaderboardContainer) dom.leaderboardContainer.style.display = '';
          }
        } else {
          // Processed PDFs or other tabs - placeholder
        }
      });
    });
  }

  // ── Back to Dashboard Button ─────────────────────────────────────────────
  if (dom.backToDashboardBtn) {
    dom.backToDashboardBtn.addEventListener('click', () => {
      // Simulate clicking the Live Ranking tab
      const liveRankingTab = Array.from(dom.subnavTabs).find(t => t.textContent.toLowerCase().includes('live ranking'));
      if (liveRankingTab) liveRankingTab.click();
    });
  }

  // ── 2-Step Wizard Logic: Phase 1 -> Phase 2 ────────────────────────────
  if (dom.analyzeReqBtn) {
    dom.analyzeReqBtn.addEventListener('click', () => {
      if (!state.jobDescription.trim()) {
        alert('Please paste a job description, provide a link, or upload a document first.');
        return;
      }
      
      dom.analyzeReqBtn.classList.add('analyzing');
      
      // Simulate AI requirement analysis parsing
      setTimeout(() => {
        dom.analyzeReqBtn.classList.remove('analyzing');
        dom.analyzeReqBtn.innerHTML = '✓ Context Analyzed';
        dom.analyzeReqBtn.disabled = true;
        
        // Reveal Phase 2
        if (dom.uploadZone && dom.workflowSection) {
          dom.uploadZone.classList.remove('step-hidden');
          // small delay for layout to register display:block before animating opacity/transform
          requestAnimationFrame(() => {
            dom.workflowSection.classList.add('step-2-active');
            dom.uploadZone.classList.add('animate-in');
          });
        }
      }, 800);
    });
  }

  // ── File Upload Management ───────────────────────────────────────────────
  function addUploadFiles(newFiles) {
    for (const f of newFiles) {
      if (!state.files.some(existing => existing.name === f.name)) {
        state.files.push(f);
      }
    }
    renderUploadFilesList();
  }

  function removeUploadFile(index) {
    state.files.splice(index, 1);
    renderUploadFilesList();
  }

  function renderUploadFilesList() {
    dom.fileList.innerHTML = '';
    state.files.forEach((file, idx) => {
      const tag = document.createElement('span');
      tag.className = 'file-pill';
      tag.innerHTML = `📄 ${escapeHtml(file.name)} <span class="remove-file" data-idx="${idx}">&times;</span>`;
      dom.fileList.appendChild(tag);
    });

    dom.uploadZone.style.borderColor = state.files.length > 0
      ? 'var(--color-active-indigo)'
      : '';
  }

  dom.fileInput.addEventListener('change', (e) => {
    if (e.target.files.length) addUploadFiles(e.target.files);
  });

  dom.fileList.addEventListener('click', (e) => {
    const removeBtn = e.target.closest('.remove-file');
    if (removeBtn) {
      removeUploadFile(parseInt(removeBtn.dataset.idx, 10));
    }
  });

  // ── Drag-and-Drop Events ─────────────────────────────────────────────────
  dom.uploadZone.addEventListener('dragenter', (e) => {
    e.preventDefault();
    dom.uploadZone.classList.add('drag-over');
  });
  dom.uploadZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dom.uploadZone.classList.add('drag-over');
  });
  dom.uploadZone.addEventListener('dragleave', (e) => {
    e.preventDefault();
    dom.uploadZone.classList.remove('drag-over');
  });
  dom.uploadZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dom.uploadZone.classList.remove('drag-over');
    if (e.dataTransfer.files.length) addUploadFiles(e.dataTransfer.files);
  });

  // ── Candidate Scoring & Mapping Logic ────────────────────────────────────
  function scoreCandidate(c, jdText) {
    let score = 0;
    const skills = c.skills ? c.skills.map(s => s.toLowerCase()) : [];
    const skillsStr = skills.join(' ');
    const company = c.current_company ? c.current_company.toLowerCase() : '';
    const summary = c.summary ? c.summary.toLowerCase() : '';
    
    let fitReasons = [];
    let gapReasons = [];

    // Product Experience (30 pts)
    if (company.includes('product') || summary.includes('product')) {
      score += 30;
      fitReasons.push("Strong product background");
    } else {
      gapReasons.push("Lacks direct product-company experience");
    }

    // Vector DB Experience (20 pts)
    const vectorDBs = ['pinecone', 'milvus', 'qdrant', 'weaviate', 'chromadb', 'faiss'];
    if (vectorDBs.some(v => skillsStr.includes(v) || summary.includes(v))) {
      score += 20;
      fitReasons.push("Production vector database experience");
    } else {
      gapReasons.push("No vector database experience");
    }

    // Python Proficiency (20 pts)
    if (skillsStr.includes('python')) {
      score += 20;
      fitReasons.push("Python proficiency");
    } else {
      gapReasons.push("Lacks Python skills");
    }

    // IR/Ranking Experience (20 pts)
    const irTerms = ['ndcg', 'mrr', 'ranking', 'sentence-transformers', 'bert', 'embeddings', 'semantic search', 'retrieval', 'hybrid search'];
    if (irTerms.some(term => skillsStr.includes(term) || summary.includes(term))) {
      score += 20;
      fitReasons.push("IR/Ranking expertise");
    } else {
      gapReasons.push("Missing core search/ranking evaluation experience");
    }

    // Experience (10 pts)
    if (c.experience_years >= 5) {
      score += 10;
    } else {
      gapReasons.push("Slightly junior for a senior role");
    }

    // Calculate final why_fit
    let why_fit = "";
    if (score >= 75) {
      why_fit = "Excellent fit. " + fitReasons.join(", ") + ".";
    } else {
      why_fit = (fitReasons.length > 0 ? "Has " + fitReasons.slice(0, 2).join(" and ") + ", but " : "Weak fit because ") + 
                gapReasons.slice(0, 2).join(" and ") + ".";
    }

    // Determine badge logic
    let tech_depth = "Strong";
    if (score < 75 && score >= 50) tech_depth = "Average";
    if (score < 50) tech_depth = "Weak";

    let culture_fit = "High Alignment";
    if (score < 75 && score >= 50) culture_fit = "Medium Alignment";
    if (score < 50) culture_fit = "Rejected/Flagged";

    return {
      ...cand,
      title: cand.current_company || "Unknown Role",
      score: score,
      tech_depth: tech_depth,
      culture_fit: culture_fit,
      why_fit: why_fit
    };
  }

  // ── Execute Evaluation Pipeline ──────────────────────────────────────────
  dom.executeBtn.addEventListener('click', async () => {
    if (state.files.length === 0) {
      alert('Please upload at least one candidate resume or file.');
      return;
    }
    if (state.isEvaluating) return;
    state.isEvaluating = true;
    dom.executeBtn.disabled = true;

    // Show loading overlay
    dom.loadingOverlay.classList.add('visible');
    dom.progressFill.style.width = '10%';
    dom.loadingText.textContent = 'Reading files and context...';
    const startTime = performance.now();

    const jsonFiles = state.files.filter(f => f.name.toLowerCase().endsWith('.json') || f.type === 'application/json');
    const otherFiles = state.files.filter(f => !f.name.toLowerCase().endsWith('.json') && f.type !== 'application/json');

    let allResults = [];

    try {
      // 1. Process JSON Files Locally
      if (jsonFiles.length > 0) {
        dom.progressFill.style.width = '30%';
        dom.loadingText.textContent = 'Parsing structured JSON data...';
        
        for (const jFile of jsonFiles) {
          const text = await jFile.text();
          let data;
          try {
            data = JSON.parse(text);
          } catch (e) {
            throw new Error(`Invalid JSON format in file: ${jFile.name}`);
          }
          
          let candidatesArray = Array.isArray(data) ? data : (data.candidates ? data.candidates : [data]);
          
          // Basic validation and mapping
          candidatesArray = candidatesArray
            .filter(c => c && c.name) // only require name, no hard score/field filters
            .map(c => c.score !== undefined ? c : scoreCandidate(c, state.jobDescription)); // apply weighted scoring if raw
            
          allResults = allResults.concat(candidatesArray);
        }
      }

      // 2. Process other files via AI pipeline
      if (otherFiles.length > 0) {
        dom.progressFill.style.width = '50%';
        dom.loadingText.textContent = 'Connecting AI evaluation pipeline...';

        const formData = new FormData();
        formData.append('config', JSON.stringify({
          job_description: state.jobDescription,
        }));
        otherFiles.forEach(file => formData.append('files', file));

        const response = await fetch('/api/evaluate', {
          method: 'POST',
          body: formData,
          credentials: 'same-origin',
        });

        dom.progressFill.style.width = '75%';
        dom.loadingText.textContent = 'Analyzing and scoring candidate profiles...';

        if (!response.ok) {
          const err = await response.json().catch(() => ({ detail: 'API error' }));
          throw new Error(err.detail || `Server status ${response.status}`);
        }

        const apiResults = await response.json();
        allResults = allResults.concat(apiResults);
      }
      
      if (allResults.length === 0) {
        throw new Error("No valid candidates found in the provided files.");
      }
      
      // Sort all results by score descending
      allResults.sort((a, b) => b.score - a.score);
      
      // Store complete unsliced list
      state.allEvaluatedResults = [...allResults];
      
      // 3. Evaluation Filtering & Relative Ranking Fallback
      let maxScore = allResults[0].score;
      if (maxScore >= 75) {
        // Enforce strict 70% capability threshold if strong candidates exist
        allResults = allResults.filter(c => c.score >= 70);
      } else {
        console.log("Max score is below 75%. Falling back to relative ranking mode.");
        // Take top 10 as relative matches
        allResults = allResults.slice(0, 10);
      }

      const elapsed = ((performance.now() - startTime) / 1000).toFixed(1);

      dom.progressFill.style.width = '100%';
      dom.loadingText.textContent = 'Rendering live metrics...';

      await new Promise(r => setTimeout(r, 250));

      state.results = allResults;
      state.currentSort = 'score';
      updateMetricsKPI(elapsed);
      
      // Render based on active tab
      if (state.currentTab === 'all') {
        renderAllCandidatesTable(state.allEvaluatedResults);
      } else {
        renderLeaderboardRows(state.results);
      }
      
      syncSortControls();
      
      dom.loadingOverlay.classList.remove('visible');

      // Reveal metrics and leaderboard
      if (dom.analyticsMatrix && dom.leaderboardContainer) {
        dom.analyticsMatrix.classList.remove('hidden-results');
        dom.leaderboardContainer.classList.remove('hidden-results');
        
        requestAnimationFrame(() => {
          dom.analyticsMatrix.classList.add('fade-in-up');
          dom.leaderboardContainer.classList.add('fade-in-up');
          dom.leaderboardContainer.style.animationDelay = '0.1s';
          
          // Scroll smoothly to results
          setTimeout(() => {
             dom.analyticsMatrix.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100);
        });
      }

    } catch (err) {
      console.error('Evaluation Pipeline Error:', err);
      dom.loadingOverlay.classList.remove('visible');
      // Reveal leaderboard container to show error
      if (dom.leaderboardContainer) {
        dom.leaderboardContainer.classList.remove('hidden-results');
        dom.leaderboardContainer.classList.add('fade-in-up');
      }
      dom.leaderboard.innerHTML = `
        <tr>
          <td colspan="7">
            <div class="leaderboard-empty" style="color: var(--color-accent-red); border-color: var(--color-accent-red);">
              ⚠️ Evaluation failed: ${escapeHtml(err.message)}
            </div>
          </td>
        </tr>`;
    } finally {
      if (!dom.evaluationBanner || dom.evaluationBanner.classList.contains('hidden-results')) {
        dom.loadingOverlay.classList.remove('visible');
      }
      state.isEvaluating = false;
      dom.executeBtn.disabled = false;
    }
  });

  // ── Metrics KPI Update ───────────────────────────────────────────────────
  function updateMetricsKPI(seconds) {
    dom.metricProcessing.textContent = `${seconds}s`;
    dom.metricCost.textContent = '$14.2k';
    dom.metricSkill.textContent = 'AI Detected';
    dom.metricFlags.textContent = 'Low (4%)';
    dom.metricFlagsBadge.className = 'analytics-badge green';
    dom.metricFlagsBadge.innerHTML = '<span class="status-node"></span> Low';
  }

  // ── Leaderboard Row Rendering ────────────────────────────────────────────
  function renderLeaderboardRows(results) {
    dom.leaderboard.innerHTML = '';

    if (!results || results.length === 0) {
      dom.leaderboard.innerHTML = `
        <tr>
          <td colspan="7">
            <div class="leaderboard-empty">No matching candidates could be evaluated.</div>
          </td>
        </tr>`;
      return;
    }

    results.forEach((cand, idx) => {
      const rank = idx + 1;
      const tr = document.createElement('tr');
      tr.dataset.idx = idx;
      tr.style.cursor = 'pointer';

      // Badge CSS class derivation
      const tdClass = cand.tech_depth.toLowerCase();
      const cfClass = cand.culture_fit.toLowerCase().replace(/\s/g, '').replace('/', '');

      // Avatar selection by name heuristic
      let avatarUrl = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100';
      const nameLower = cand.name.toLowerCase();
      if (['elena', 'sarah', 'sofia', 'olivia', 'sophia', 'anna', 'maria', 'nina', 'lisa', 'emma'].some(n => nameLower.includes(n))) {
        avatarUrl = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100';
      } else if (['julian', 'alex', 'chen', 'liam', 'omar', 'raj', 'david', 'james', 'max'].some(n => nameLower.includes(n))) {
        avatarUrl = 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=100';
      }

      tr.innerHTML = `
        <td class="col-rank">#${String(rank).padStart(2, '0')}</td>
        <td>
          <div class="candidate-cell">
            <div class="candidate-avatar">
              <img src="${avatarUrl}" alt="${escapeHtml(cand.name)}">
            </div>
            <div class="candidate-info">
              <span class="candidate-name">${escapeHtml(cand.name)}</span>
              <span class="candidate-role-sub">${escapeHtml(cand.title)}</span>
            </div>
          </div>
        </td>
        <td class="score-cell">
          <div class="score-bar-container">
            <div class="score-bar-bg">
              <div class="score-bar-fill" style="width: ${cand.score}%"></div>
            </div>
            <span class="score-text">${cand.score}%</span>
          </div>
        </td>
        <td><span class="tech-badge ${tdClass}">${escapeHtml(cand.tech_depth)}</span></td>
        <td><span class="culture-badge ${cfClass}">${escapeHtml(cand.culture_fit)}</span></td>
        <td class="col-justification">"${escapeHtml(cand.why_fit)}"</td>
        <td class="col-tags">
          <div class="row-tags-wrapper">
            ${(cand.skills || []).slice(0, 5).map(s => `<span class="row-tag">${escapeHtml(s)}</span>`).join('')}
          </div>
        </td>
      `;

      // Row click → open detail drawer
      tr.addEventListener('click', () => {
        openCandidateDetailsDrawer(cand, avatarUrl);
      });

      tr.style.opacity = '1';
      tr.style.transform = 'translateY(0)';
      dom.leaderboard.appendChild(tr);
    });
  }

  // ── All Candidates Table Rendering ───────────────────────────────────────
  function renderAllCandidatesTable(results) {
    if (!dom.allCandidatesTableBody) return;
    dom.allCandidatesTableBody.innerHTML = '';

    if (!results || results.length === 0) {
      dom.allCandidatesTableBody.innerHTML = `
        <tr>
          <td colspan="5">
            <div class="leaderboard-empty">No candidates evaluated yet.</div>
          </td>
        </tr>`;
      return;
    }

    results.forEach((cand, idx) => {
      const tr = document.createElement('tr');
      tr.style.cursor = 'pointer';

      // Badge CSS class derivation
      const cfClass = (cand.culture_fit || 'Rejected/Flagged').toLowerCase().replace(/\s/g, '').replace('/', '');

      // Avatar selection by name heuristic
      let avatarUrl = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100';
      const nameLower = (cand.name || '').toLowerCase();
      if (['elena', 'sarah', 'sofia', 'olivia', 'sophia', 'anna', 'maria', 'nina', 'lisa', 'emma', 'priya', 'sneha', 'ananya', 'meera', 'kriti', 'tanvi', 'riya', 'divya', 'pooja', 'isha', 'shreya', 'anushka', 'deepika', 'alia', 'katrina', 'sara'].some(n => nameLower.includes(n))) {
        avatarUrl = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100';
      } else if (['julian', 'alex', 'chen', 'liam', 'omar', 'raj', 'david', 'james', 'max', 'rohan', 'amit', 'vikram', 'arjun', 'sandeep', 'aditya', 'gaurav', 'nikhil', 'abhishek', 'varun', 'manish', 'karan', 'siddharth', 'ranveer', 'ranbir', 'vicky', 'kartik'].some(n => nameLower.includes(n))) {
        avatarUrl = 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=100';
      }

      tr.innerHTML = `
        <td>
          <div class="candidate-cell">
            <div class="candidate-avatar">
              <img src="${avatarUrl}" alt="${escapeHtml(cand.name)}">
            </div>
            <div class="candidate-info">
              <span class="candidate-name">${escapeHtml(cand.name)}</span>
            </div>
          </div>
        </td>
        <td>
          <span class="candidate-role-sub" style="font-size: 13px;">${escapeHtml(cand.title || 'N/A')}</span>
        </td>
        <td style="font-weight: 500; color: var(--color-deep-charcoal);">${cand.experience_years || 0} yrs</td>
        <td class="score-cell">
          <div class="score-bar-container" style="max-width: 140px;">
            <div class="score-bar-bg">
              <div class="score-bar-fill" style="width: ${cand.score || 0}%"></div>
            </div>
            <span class="score-text">${cand.score || 0}%</span>
          </div>
        </td>
        <td><span class="culture-badge ${cfClass}">${escapeHtml(cand.culture_fit || 'Flagged')}</span></td>
      `;

      // Row click → open detail drawer
      tr.addEventListener('click', () => {
        openCandidateDetailsDrawer(cand, avatarUrl);
      });

      // Staggered entry animation
      tr.style.opacity = '0';
      tr.style.transform = 'translateY(6px)';
      tr.style.transition = 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)';

      dom.allCandidatesTableBody.appendChild(tr);

      requestAnimationFrame(() => {
        setTimeout(() => {
          tr.style.opacity = '1';
          tr.style.transform = 'translateY(0)';
        }, Math.min(idx * 20, 600)); // Cap delay for large lists
      });
    });
  }

  // ── Candidate Detail Drawer ──────────────────────────────────────────────
  function openCandidateDetailsDrawer(candidate, avatar) {
    dom.drawerTitle.textContent = candidate.name;

    dom.drawerBody.innerHTML = `
      <div style="display: flex; align-items: center; gap: 16px;">
        <div class="candidate-avatar" style="width: 64px; height: 64px;">
          <img src="${avatar}" alt="${escapeHtml(candidate.name)}" style="width: 100%; height: 100%;">
        </div>
        <div style="display: flex; flex-direction: column; gap: 2px;">
          <h3 style="font-size: 20px; font-weight: 700; color: var(--color-deep-charcoal);">${escapeHtml(candidate.name)}</h3>
          <span style="font-size: 14px; color: var(--color-muted-graphite);">${escapeHtml(candidate.title)}</span>
        </div>
      </div>

      <div class="drawer-section">
        <label class="sidebar-label">Strategy Fit Score</label>
        <div class="score-bar-container" style="margin-top: 6px;">
          <div class="score-bar-bg" style="width: 160px; height: 8px;">
            <div class="score-bar-fill" style="width: ${candidate.score}%"></div>
          </div>
          <strong style="font-size: 16px; color: var(--color-active-indigo);">${candidate.score}% Overall Fit</strong>
        </div>
      </div>

      <div class="drawer-section">
        <label class="sidebar-label">Signal Assessments</label>
        <div style="display: flex; gap: 16px; margin-top: 6px;">
          <div>
            <span class="sidebar-label" style="font-size: 11px; display: block; margin-bottom: 4px;">Tech Depth</span>
            <span class="tech-badge ${candidate.tech_depth.toLowerCase()}">${escapeHtml(candidate.tech_depth)}</span>
          </div>
          <div>
            <span class="sidebar-label" style="font-size: 11px; display: block; margin-bottom: 4px;">Culture Alignment</span>
            <span class="culture-badge ${candidate.culture_fit.toLowerCase().replace(/\s/g, '').replace('/', '')}">${escapeHtml(candidate.culture_fit)}</span>
          </div>
        </div>
      </div>

      <div class="drawer-section">
        <label class="sidebar-label">Pipeline Justification</label>
        <p style="font-size: 15px; color: var(--color-muted-graphite); font-style: italic; margin-top: 6px; line-height: 1.6;">
          "${escapeHtml(candidate.why_fit)}"
        </p>
      </div>

      <div class="drawer-section">
        <label class="sidebar-label">Extracted Skill Keywords</label>
        <div class="row-tags-wrapper" style="margin-top: 8px; gap: 8px;">
          ${(candidate.skills || []).map(s => `<span class="row-tag" style="font-size: 13px; padding: 5px 12px;">${escapeHtml(s)}</span>`).join('')}
        </div>
      </div>
    `;

    dom.drawerBackdrop.classList.add('visible');
    dom.detailDrawer.classList.add('open');
  }

  function closeCandidateDrawer() {
    dom.detailDrawer.classList.remove('open');
    dom.drawerBackdrop.classList.remove('visible');
  }

  dom.drawerClose.addEventListener('click', closeCandidateDrawer);
  dom.drawerBackdrop.addEventListener('click', closeCandidateDrawer);

  // ── Sorting Controls ─────────────────────────────────────────────────────
  dom.sortButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      if (!state.results) return;
      state.currentSort = btn.dataset.sort;
      syncSortControls();

      const sorted = [...state.results];
      if (state.currentSort === 'score') {
        sorted.sort((a, b) => b.score - a.score);
      } else if (state.currentSort === 'tech_depth') {
        const priority = { 'Exemplary': 3, 'Strong': 2, 'Average': 1 };
        sorted.sort((a, b) => (priority[b.tech_depth] || 0) - (priority[a.tech_depth] || 0));
      } else if (state.currentSort === 'name') {
        sorted.sort((a, b) => a.name.localeCompare(b.name));
      }
      renderLeaderboardRows(sorted);
    });
  });

  function syncSortControls() {
    dom.sortButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.sort === state.currentSort);
    });
  }

  // ── Omni-Search Filter ───────────────────────────────────────────────────
  const omniSearch = document.getElementById('omniSearch');
  if (omniSearch) {
    omniSearch.addEventListener('input', () => {
      if (!state.results) return;
      const query = omniSearch.value.toLowerCase().trim();
      if (!query) {
        renderLeaderboardRows(state.results);
        return;
      }
      const filtered = state.results.filter(cand => {
        return cand.name.toLowerCase().includes(query) ||
               cand.title.toLowerCase().includes(query) ||
               (cand.skills || []).some(s => s.toLowerCase().includes(query));
      });
      renderLeaderboardRows(filtered);
    });
  }
}
