/**
 * STUDIO.ME — JAVASCRIPT LOGIC
 * Replicating exact Framer portfolio interactive dynamics
 */

document.addEventListener('DOMContentLoaded', () => {

  // =========================================================================
  // 1. DATA: CASE STUDIES
  // =========================================================================
  const projectsData = {
    'continuo': {
      title: 'Continuo — AI Context Portability Platform',
      subtitle: 'Keep your context. Continue anywhere across ChatGPT, Claude & Cursor.',
      category: 'AI / EXTENSION / FULL STACK',
      image: 'assets/projects/continuo.jpg',
      tech: ['React 19', 'Python FastAPI', 'Manifest V3', 'ChromaDB', 'Three.js'],
      overview: 'Continuo is an open-source AI context portability platform designed to eliminate repetitive prompt briefing across fragmented AI ecosystems. It empowers developers and researchers to capture, summarize, and instantly transfer conversation threads, code context, and architectural requirements between ChatGPT, Claude, and local IDEs.',
      theIdea: 'Modern AI workflows are disjointed: developers brainstorm architectures in Claude, generate unit tests in ChatGPT, and implement in Cursor. Every transition demands tedious manual re-briefing. Continuo solves this through a lightweight browser extension that maintains an active semantic knowledge graph of project state.',
      process: [
        'Benchmarked DOM extraction algorithms across Claude 3.5 Sonnet and ChatGPT-4o interfaces.',
        'Engineered automated semantic summarization using local lightweight embeddings to preserve token budgets.',
        'Designed a floating dark-mode HUD with instant hotkey context synchronization.',
        'Built multi-platform export to Markdown, JSON context bundles, and direct API handoff.'
      ],
      results: 'Enabled instantaneous context switching across 3 major AI platforms, cutting project re-prompting time by over 80% in benchmark tests.',
      githubUrl: 'https://github.com/Anxhu03/Continuo'
    },
    'sentinel-ai': {
      title: 'Sentinel AI — Autonomous Threat Telemetry',
      subtitle: 'Real-time telemetry and lateral network intrusion detection with neural graphs.',
      category: 'AI / CYBER INTELLIGENCE',
      image: 'assets/projects/sentinel.jpg',
      tech: ['Python', 'PyTorch', 'FastAPI', 'WebSockets', 'Three.js Graph'],
      overview: 'Sentinel AI is an intelligent autonomous threat surveillance and anomaly detection system. It ingests distributed network events in real time, computes neural risk vectors, and renders interactive topological threat maps to detect lateral intrusion before system compromise.',
      theIdea: 'Conventional intrusion detection systems suffer from alert fatigue and static signature rules. Sentinel AI employs unsupervised graph neural networks to continuously model baseline communications and flag micro-deviations with explainable risk scores.',
      process: [
        'Implemented autoencoder-based anomaly detection on high-frequency network packets.',
        'Formulated a dynamic graph layout algorithm to highlight compromised nodes in real-time.',
        'Crafted an ergonomic cyber-defense console inspired by aerospace HUD telemetry.',
        'Integrated automated mitigation trigger rules for immediate port isolation.'
      ],
      results: 'Processed 10,000+ synthetic concurrent telemetry signals with sub-50ms inference latency and zero false-positive cascades.',
      githubUrl: 'https://github.com/Anxhu03'
    },
    'ai-hedge-fund': {
      title: 'AI Hedge Fund — Market Intelligence Platform',
      subtitle: 'Quantitative algorithmic trading & multi-agent portfolio allocation.',
      category: 'QUANT FINANCE / PYTHON',
      image: 'assets/projects/hedgefund.jpg',
      tech: ['Python (NumPy, SciPy)', 'LightGBM', 'Gaussian Processes', 'TimescaleDB'],
      overview: 'An institutional-grade algorithmic trading research environment powered by Python and multi-signal AI models. The platform computes real-time volatility surfaces, Gaussian process forecasts, and multi-factor sentiment signals to simulate systematic portfolio allocation under strict risk constraints.',
      theIdea: 'Financial markets are nonlinear and regime-dependent. Rather than relying on a single predictive black box, this system orchestrates a committee of specialized algorithmic agents: trend analyzers, volatility scalpers, liquidity detectors, and automated risk managers.',
      process: [
        'Constructed backtesting harness with tick-level historical data and realistic transaction costs.',
        'Developed Monte Carlo risk simulator to compute Value at Risk (VaR) and drawdown probability.',
        'Designed responsive candlestick charting with overlay confidence bands.',
        'Implemented automated kill-switch mechanics on volatility spikes.'
      ],
      results: 'Simulated robust risk-adjusted returns (Sharpe > 1.85 across 3-year backtest periods) with max drawdown strictly capped at 8%.',
      githubUrl: 'https://github.com/Anxhu03'
    },
    'blender-collection': {
      title: 'Blender 3D Collection — Hard-Surface Mecha & Rig',
      subtitle: 'Photorealistic Cycles renders, armature rigging & web-ready GLTF assets.',
      category: '3D DESIGN / BLENDER 4.1',
      image: 'assets/projects/blender.jpg',
      tech: ['Blender 4.1', 'Cycles Rendering', 'Procedural Shaders', 'Geometry Nodes', 'WebGL GLTF'],
      overview: 'A showcase of high-poly hard-surface modeling, procedural material synthesis, and character armature rigging. Features the Synapse Aethel mecha bust and the official ANXHU stylized 3D avatar rig.',
      theIdea: 'Rigorous engineering is magnified by visual craft. Mastering Blender provides complete creative freedom to create immersive 3D avatars, sci-fi mechanical assets, and WebGL-optimized 3D models for the modern web.',
      process: [
        'Sculpted intricate hard-surface paneling using Boolean modifier stacks and bevel shaders.',
        'Developed multi-layered procedural carbon fiber, brushed titanium, and emissive materials in Cycles.',
        'Rigged full character armatures with inverse kinematics (IK) for natural human gesturing.',
        'Decimated high-poly sculpts with baked normal maps into lightweight GLTF files running at 60 FPS in WebGL.'
      ],
      results: 'Curated gallery of high-resolution photorealistic portfolio renders and interactive 3D assets.',
      githubUrl: 'https://github.com/Anxhu03'
    },
    'nexora-ai': {
      title: 'Nexora AI — Fluid Multi-Persona Neural Workspace',
      subtitle: 'Cognitive personality modes with acoustic audio waves & modular cards.',
      category: 'AI PRODUCT / INTERACTION DESIGN',
      image: 'assets/projects/nexora.jpg',
      tech: ['Web Audio API', 'React', 'Tailwind CSS', 'Figma Design Tokens', 'FastAPI'],
      overview: 'Nexora AI explores the future of human-AI collaboration through dynamic cognitive personality modes (Professional, Creative, Casual, Empathic). The interface density, micro-typography, and sound feedback dynamically adapt to user intent.',
      theIdea: 'Most generative AI interfaces treat interaction as a static text-box monologue. Nexora reimagines the medium by introducing fluid personality shifting, ambient status indicators, and modular workspace cards that reconfigure during active synthesis.',
      process: [
        'User research on cognitive load during multi-turn LLM creative sessions.',
        'Prototyped personality-adaptive color shifts and micro-typography states.',
        'Constructed a canvas-based sinusoidal neural wave that dances in sync with streaming tokens.',
        'Tested keyboard-first command bar navigation for power users.'
      ],
      results: 'Created a cohesive product design system with 4 distinct operational modes and 20+ reusable modular interface components.',
      githubUrl: 'https://github.com/Anxhu03'
    },
    'uiux-work': {
      title: 'EcoTrack & Modular Design Tokens',
      subtitle: 'Comprehensive 40+ component design system and analytics dashboard.',
      category: 'PRODUCT DESIGN / DESIGN SYSTEMS',
      image: 'assets/projects/uiux.jpg',
      tech: ['Figma Variables', 'Design Tokens', 'WCAG AAA Dark Theme', 'Auto-Layout 5'],
      overview: 'A showcase of end-to-end interface and product design. Covers the complete EcoTrack mobile sustainability app suite, high-density desktop analytics console, and a modular token-driven design system engineered for engineering consistency.',
      theIdea: 'Effective interface design balances aesthetic beauty with frictionless cognitive ergonomics. Every button radius, hierarchy scale, and contrast ratio is calculated to empower user intent without unnecessary visual friction.',
      process: [
        'Audited WCAG AAA color contrast ratios across dark mode surfaces.',
        'Designed mobile-first splash, onboarding, activity feed, and challenge cards.',
        'Structured comprehensive component library: buttons, inputs, pills, cards, and modal sheets.',
        'Built multi-screen dashboard with dynamic data visualization widgets.'
      ],
      results: 'Comprehensive 40+ component design system powering both mobile iOS/Android guidelines and desktop SaaS analytics.',
      githubUrl: 'https://github.com/Anxhu03'
    }
  };

  // =========================================================================
  // 2. INTERACTIVE MODE TOGGLE
  // =========================================================================
  const interactiveToggle = document.getElementById('interactive-mode-toggle');
  let isInteractive = localStorage.getItem('anxhu_interactive_mode') !== 'off';

  function setInteractiveMode(state) {
    isInteractive = state;
    if (state) {
      document.body.classList.add('interactive-mode-on');
      interactiveToggle.classList.add('active');
      interactiveToggle.querySelector('.toggle-status-text').textContent = 'ON';
    } else {
      document.body.classList.remove('interactive-mode-on');
      interactiveToggle.classList.remove('active');
      interactiveToggle.querySelector('.toggle-status-text').textContent = 'OFF';
    }
    localStorage.setItem('anxhu_interactive_mode', state ? 'on' : 'off');
  }

  setInteractiveMode(isInteractive);

  interactiveToggle.addEventListener('click', () => {
    setInteractiveMode(!isInteractive);
    showToast(isInteractive ? 'Interactive Mode Enabled ✨' : 'Minimal Fast Mode Enabled ⚡');
  });

  // =========================================================================
  // 3. CUSTOM CURSOR
  // =========================================================================
  const cursor = document.getElementById('custom-cursor');
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let curX = mouseX;
  let curY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function renderCursor() {
    if (isInteractive && cursor) {
      curX += (mouseX - curX) * 0.25;
      curY += (mouseY - curY) * 0.25;
      cursor.style.transform = `translate3d(${curX}px, ${curY}px, 0)`;
    }
    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);

  // Hover triggers
  const hoverables = 'a, button, .framer-polaroid-card, .book-3d-item, .framer-project-item';
  document.querySelectorAll(hoverables).forEach(el => {
    el.addEventListener('mouseenter', () => {
      if (isInteractive && cursor) cursor.classList.add('cursor-hover');
    });
    el.addEventListener('mouseleave', () => {
      if (isInteractive && cursor) cursor.classList.remove('cursor-hover', 'cursor-view');
    });
  });

  document.querySelectorAll('.framer-project-item').forEach(card => {
    card.addEventListener('mouseenter', () => {
      if (isInteractive && cursor) cursor.classList.add('cursor-view');
    });
    card.addEventListener('mouseleave', () => {
      if (isInteractive && cursor) cursor.classList.remove('cursor-view');
    });
  });

  // =========================================================================
  // 4. 3D TILT EFFECT
  // =========================================================================
  function bindTilt(selector, maxTilt = 10) {
    document.querySelectorAll(selector).forEach(el => {
      el.addEventListener('mousemove', (e) => {
        if (!isInteractive) return;
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const rx = (e.clientY - cy) / (rect.height / 2);
        const ry = (e.clientX - cx) / (rect.width / 2);

        const tiltX = -Math.max(-1, Math.min(1, rx)) * maxTilt;
        const tiltY = Math.max(-1, Math.min(1, ry)) * maxTilt;

        el.style.transform = `perspective(800px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) translateY(-4px)`;
      });

      el.addEventListener('mouseleave', () => {
        el.style.transform = '';
      });
    });
  }

  bindTilt('.book-3d-item', 14);

  // =========================================================================
  // 5. DRAGGABLE POLAROIDS
  // =========================================================================
  let topZ = 10;
  document.querySelectorAll('.framer-polaroid-card').forEach(card => {
    let isDragging = false;
    let startX = 0, startY = 0;
    let initLeft = 0, initTop = 0;

    card.addEventListener('mousedown', (e) => {
      if (!isInteractive) return;
      topZ++;
      card.style.zIndex = topZ;

      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;

      const rect = card.getBoundingClientRect();
      const parentRect = card.parentElement.getBoundingClientRect();
      initLeft = rect.left - parentRect.left;
      initTop = rect.top - parentRect.top;

      card.style.transition = 'none';

      const onMove = (ev) => {
        if (!isDragging) return;
        card.style.position = 'relative';
        card.style.left = `${ev.clientX - startX}px`;
        card.style.top = `${ev.clientY - startY}px`;
      };

      const onUp = () => {
        isDragging = false;
        card.style.transition = 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease';
        window.removeEventListener('mousemove', onMove);
        window.removeEventListener('mouseup', onUp);
      };

      window.addEventListener('mousemove', onMove);
      window.addEventListener('mouseup', onUp);
    });
  });

  // =========================================================================
  // 6. PROJECTS FILTER CHIPS
  // =========================================================================
  const filterChips = document.querySelectorAll('.filter-chip');
  const projectItems = document.querySelectorAll('.framer-project-item');

  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      const filter = chip.getAttribute('data-filter');

      projectItems.forEach(item => {
        const cat = item.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          item.style.display = 'block';
          item.style.opacity = '0';
          setTimeout(() => {
            item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            item.style.opacity = '1';
          }, 20);
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // =========================================================================
  // 7. CASE STUDY MODAL (NATIVE DIALOG)
  // =========================================================================
  const modal = document.getElementById('case-study-modal');
  const closeModalBtn = document.getElementById('close-case-modal');

  function openCase(id) {
    const data = projectsData[id];
    if (!data) return;

    document.getElementById('case-modal-title').textContent = data.title;
    document.getElementById('case-modal-subtitle').textContent = data.subtitle;
    document.getElementById('case-modal-cat').textContent = data.category;
    document.getElementById('case-modal-img').src = data.image;
    document.getElementById('case-modal-img').alt = data.title;
    document.getElementById('case-modal-overview').textContent = data.overview;
    document.getElementById('case-modal-idea').textContent = data.theIdea;
    document.getElementById('case-modal-results').textContent = data.results;
    document.getElementById('case-modal-github-link').href = data.githubUrl;

    const techBox = document.getElementById('case-modal-tech');
    techBox.innerHTML = '';
    data.tech.forEach(t => {
      const sp = document.createElement('span');
      sp.className = 'ptag';
      sp.textContent = t;
      techBox.appendChild(sp);
    });

    const processBox = document.getElementById('case-modal-process');
    processBox.innerHTML = '';
    data.process.forEach(p => {
      const li = document.createElement('li');
      li.textContent = p;
      processBox.appendChild(li);
    });

    modal.showModal();
    document.documentElement.style.overflow = 'hidden';
  }

  function closeCase() {
    modal.close();
    document.documentElement.style.overflow = '';
  }

  document.querySelectorAll('.action-view-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openCase(btn.getAttribute('data-id'));
    });
  });

  projectItems.forEach(item => {
    item.addEventListener('click', (e) => {
      if (e.target.closest('.repo-link')) return;
      openCase(item.getAttribute('data-project'));
    });
  });

  if (closeModalBtn) closeModalBtn.addEventListener('click', closeCase);

  modal.addEventListener('click', (e) => {
    const rect = modal.getBoundingClientRect();
    if (
      e.clientX < rect.left ||
      e.clientX > rect.right ||
      e.clientY < rect.top ||
      e.clientY > rect.bottom
    ) {
      closeCase();
    }
  });

  // =========================================================================
  // 8. TOAST NOTIFICATION
  // =========================================================================
  const toast = document.getElementById('toast');
  const toastText = document.getElementById('toast-text');
  let toastTimer;

  function showToast(msg) {
    if (!toast) return;
    toastText.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  const resumeLinks = document.querySelectorAll('#nav-resume-btn, #view-resume-link');
  resumeLinks.forEach(l => {
    l.addEventListener('click', (e) => {
      e.preventDefault();
      showToast('Opening Resume portfolio documentation... 📄');
    });
  });

  // =========================================================================
  // 9. ACTIVE NAV ITEM ON SCROLL
  // =========================================================================
  const navItems = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('section');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.scrollY + 250;

    sections.forEach(s => {
      if (scrollY >= s.offsetTop && scrollY < s.offsetTop + s.offsetHeight) {
        current = s.getAttribute('id');
      }
    });

    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === `#${current}`) {
        item.classList.add('active');
      }
    });
  });

});
