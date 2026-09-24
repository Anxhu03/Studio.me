/**
 * ANSHUMAN (ANXHU) PORTFOLIO 3.0 — JAVASCRIPT APPLICATION
 * Interactive features, sound synthesizer, 3D tilt, case studies & draggable canvas
 */

document.addEventListener('DOMContentLoaded', () => {

  // =========================================================================
  // 1. DATA: CASE STUDIES
  // =========================================================================
  const projectsDatabase = {
    'continuo': {
      title: 'Continuo — AI Context Portability Platform',
      subtitle: 'Keep your context. Continue anywhere across ChatGPT, Claude & Cursor.',
      category: 'AI / Full Stack / Browser Extension',
      image: 'assets/projects/continuo.jpg',
      role: 'Lead Architect & Frontend Engineer',
      tech: ['React 19', 'Python FastAPI', 'Manifest V3', 'ChromaDB', 'Three.js Graph'],
      overview: 'Continuo is an open-source AI workflow extension that eliminates tedious context re-prompting. By running real-time DOM extraction and local semantic embeddings, Continuo creates a portable knowledge graph of active coding requirements and architecture decisions that developers can switch between LLM ecosystems in a single click.',
      theIdea: 'Modern software engineering with AI is heavily fragmented: engineers design system architectures in Claude, brainstorm algorithms in ChatGPT, and implement in Cursor. Every context transition loses nuances. Continuo solves this through a non-intrusive floating HUD and semantic snapshot pipeline.',
      process: [
        'Formulated custom DOM observation strategies across Claude 3.5 Sonnet and ChatGPT interfaces.',
        'Engineered an on-device lightweight vector embedding pipeline to summarize conversation state without token bloat.',
        'Crafted a high-contrast dark mode glassmorphic UI using Tailwind CSS and Framer motion principles.',
        'Implemented cross-platform export to structured Markdown bundles and local IDE sync APIs.'
      ],
      results: 'Enabled instantaneous context switching across 3 major AI platforms, slashing prompt setup time by over 80% in benchmark developer sessions.',
      githubUrl: 'https://github.com/Anxhu03/Continuo'
    },
    'sentinel-ai': {
      title: 'Sentinel AI — Autonomous Threat Surveillance',
      subtitle: 'Real-time telemetry and lateral network intrusion detection with neural graphs.',
      category: 'AI / Autonomous Security & Telemetry',
      image: 'assets/projects/sentinel.jpg',
      role: 'Full Stack ML Engineer & UI Designer',
      tech: ['Python', 'PyTorch', 'FastAPI', 'WebSockets', 'Three.js Visualizer'],
      overview: 'Sentinel AI monitors high-frequency network packets across distributed nodes, feeding communication topologies into an unsupervised graph neural network to compute neural risk vectors and identify anomalous lateral intrusion attempts.',
      theIdea: 'Conventional intrusion detection relies on static heuristics and rulesets, causing catastrophic alert fatigue. Sentinel AI models continuous baseline communication invariants and renders topological vulnerability maps with sub-50ms inference latency.',
      process: [
        'Built an autoencoder-based anomaly pipeline in PyTorch to score raw packet flows.',
        'Designed a high-density aerospace HUD console featuring curved telemetry graphs and real-time node vulnerability scores.',
        'Employed WebSockets streaming for live topology updates with zero UI frame drops.',
        'Structured automated network port isolation rules upon high-confidence anomaly spikes.'
      ],
      results: 'Benchmarked across 10,000+ synthetic concurrent telemetry streams with 0 false-positive cascades.',
      githubUrl: 'https://github.com/Anxhu03'
    },
    'ai-hedge-fund': {
      title: 'AI Hedge Fund — Market Intelligence Platform',
      subtitle: 'Quantitative algorithmic trading & multi-agent portfolio allocation.',
      category: 'Quantitative Finance / Algorithmic Trading',
      image: 'assets/projects/hedgefund.jpg',
      role: 'Quantitative Developer & System Architect',
      tech: ['Python (NumPy, SciPy)', 'LightGBM', 'Gaussian Processes', 'Interactive Brokers API'],
      overview: 'An institutional-grade systematic algorithmic trading research environment. The system orchestrates specialized algorithmic agents (volatility scalpers, trend analyzers, macro-liquidity monitors) to simulate disciplined portfolio allocation under strict risk drawdowns.',
      theIdea: 'Markets are non-linear and regime-dependent. A single predictive model easily falls into overfitting. By decoupling signal generation into autonomous committees and applying Monte Carlo stress testing, the platform achieves robust risk-adjusted execution.',
      process: [
        'Developed a tick-level historical backtesting engine with realistic bid-ask slippage models.',
        'Implemented real-time volatility surface interpolation and Monte Carlo drawdown simulation.',
        'Constructed custom interactive multi-chart dashboards with overlay confidence intervals.',
        'Configured automated kill-switch mechanics triggered on structural volatility shocks.'
      ],
      results: 'Simulated Sharpe ratio > 1.85 across 3-year historical test windows with max portfolio drawdown capped strictly at 8%.',
      githubUrl: 'https://github.com/Anxhu03'
    },
    'blender-collection': {
      title: 'Blender 3D Collection — Hard-Surface Mecha & Rig',
      subtitle: 'Photorealistic Cycles renders, armature rigging & web-ready GLTF assets.',
      category: '3D Design / Blender / WebGL',
      image: 'assets/projects/blender.jpg',
      role: '3D Modeler, Shader Artist & Character Rigger',
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
      category: 'AI Product / Interaction Design',
      image: 'assets/projects/nexora.jpg',
      role: 'Product Designer & Frontend Engineer',
      tech: ['Web Audio API', 'React', 'Tailwind CSS', 'Figma Design System', 'FastAPI'],
      overview: 'Nexora AI reimagines human-AI collaboration by introducing dynamic cognitive personality modes (Professional, Creative, Casual, Empathic). The interface density, micro-typography, and sound frequencies dynamically adapt to user intent.',
      theIdea: 'Most generative AI tools are static chat boxes. Nexora treats the workspace as a living medium with acoustic feedback, ambient state indicators, and modular cards that rearrange during creative ideation.',
      process: [
        'Conducted cognitive ergonomics research on multi-turn prompt fatigue.',
        'Synthesized real-time sinusoidal neural sound waves that oscillate in sync with streaming tokens.',
        'Constructed a token-driven Figma system with variable theme modes.',
        'Built keyboard-first shortcut command bars for rapid navigation.'
      ],
      results: 'Built a 20+ component design system with 4 distinct adaptive operational modes.',
      githubUrl: 'https://github.com/Anxhu03'
    },
    'uiux-work': {
      title: 'EcoTrack & Modular Design Tokens',
      subtitle: 'Comprehensive 40+ component design system and analytics dashboard.',
      category: 'Product Design / UI/UX Design System',
      image: 'assets/projects/uiux.jpg',
      role: 'Lead UI/UX Designer',
      tech: ['Figma Variables', 'Design Tokens', 'WCAG AAA Dark Theme', 'Interactive Prototyping'],
      overview: 'An end-to-end interface system comprising the EcoTrack mobile sustainability app and high-density SaaS analytics console. Engineered with modular Figma variable tokens to maintain 100% design-to-code parity.',
      theIdea: 'Great interface design eliminates visual friction while delighting the senses. Every button radius, hierarchy scale, and contrast ratio was calculated for accessibility and effortless spatial orientation.',
      process: [
        'Audited WCAG AAA contrast ratios across dark mode surfaces.',
        'Mapped mobile-first user journeys from onboarding to live analytics tracking.',
        'Created modular design tokens for colors, typography scales, spacing, and surface elevations.',
        'Designed high-density interactive dashboards with dynamic charts.'
      ],
      results: 'Comprehensive 40+ component library powering both mobile guidelines and desktop SaaS analytics.',
      githubUrl: 'https://github.com/Anxhu03'
    },
    'visual-lab': {
      title: 'Visual Lab — Swiss Typography & Liquid Chrome Studies',
      subtitle: 'Explorations in Swiss poster design, 3D lettering & brutalist compositions.',
      category: 'Graphic Design / Experimental 3D',
      image: 'assets/projects/visuallab.jpg',
      role: 'Creative Director & Designer',
      tech: ['Adobe Photoshop', 'Adobe Illustrator', 'Blender Splines', 'Swiss Grid System'],
      overview: 'An experimental creative laboratory exploring the frontiers of graphic design, Swiss international typographical style, 3D liquid chrome letterforms, and brutalist grid compositions.',
      theIdea: 'Visual experimentation fuels product innovation. Exploring tension between rigid typographical grids and fluid organic chrome caustics builds deep aesthetic intuition that elevates digital products.',
      process: [
        'Curated exhibition posters combining high-contrast monochrome with vivid neon accents.',
        'Modeled reflective liquid chrome typography using spline curves and physics simulations in Blender.',
        'Studied asymmetric grid tension and optical alignment.',
        'Standardized print and digital display color calibration.'
      ],
      results: 'Featured in creative community galleries and incorporated into personal brand aesthetic.',
      githubUrl: 'https://github.com/Anxhu03'
    }
  };

  // =========================================================================
  // 2. SYNTHESIZED SOUND ENGINE (Web Audio API - Zero External Dependencies)
  // =========================================================================
  class SoundEngine {
    constructor() {
      this.ctx = null;
      this.enabled = true;
    }

    init() {
      if (!this.ctx && typeof AudioContext !== 'undefined') {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioCtx();
      }
    }

    playClick() {
      if (!this.enabled) return;
      try {
        this.init();
        if (this.ctx.state === 'suspended') {
          this.ctx.resume();
        }
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(300, this.ctx.currentTime + 0.05);

        gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        osc.stop(this.ctx.currentTime + 0.05);
      } catch (e) {}
    }

    playHover() {
      if (!this.enabled) return;
      try {
        this.init();
        if (this.ctx.state === 'suspended') {
          this.ctx.resume();
        }
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(450, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(550, this.ctx.currentTime + 0.03);

        gain.gain.setValueAtTime(0.015, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.03);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        osc.stop(this.ctx.currentTime + 0.03);
      } catch (e) {}
    }

    playPop() {
      if (!this.enabled) return;
      try {
        this.init();
        if (this.ctx.state === 'suspended') {
          this.ctx.resume();
        }
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(320, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.08);

        gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        osc.stop(this.ctx.currentTime + 0.08);
      } catch (e) {}
    }
  }

  const sound = new SoundEngine();

  // =========================================================================
  // 3. INTERACTIVE MODE TOGGLE
  // =========================================================================
  const interactiveToggleBtn = document.getElementById('interactive-mode-btn');
  const customCursor = document.getElementById('custom-cursor');
  let isInteractive = localStorage.getItem('anxhu_interactive_mode') !== 'off';

  function applyInteractiveMode(state) {
    isInteractive = state;
    sound.enabled = state;
    if (state) {
      document.body.classList.add('interactive-mode-on');
      interactiveToggleBtn.classList.add('active');
      interactiveToggleBtn.querySelector('.toggle-text').textContent = 'ON';
    } else {
      document.body.classList.remove('interactive-mode-on');
      interactiveToggleBtn.classList.remove('active');
      interactiveToggleBtn.querySelector('.toggle-text').textContent = 'OFF';
    }
    localStorage.setItem('anxhu_interactive_mode', state ? 'on' : 'off');
  }

  applyInteractiveMode(isInteractive);

  interactiveToggleBtn.addEventListener('click', () => {
    sound.playClick();
    applyInteractiveMode(!isInteractive);
    showToast(isInteractive ? 'Interactive Mode Enabled ✨' : 'Minimal Fast Mode Enabled ⚡');
  });

  // Mode Tip Banner Close
  const modeTipBanner = document.getElementById('mode-tip-banner');
  const bannerCloseBtn = document.getElementById('banner-close-btn');

  if (bannerCloseBtn && modeTipBanner) {
    if (localStorage.getItem('anxhu_banner_closed') === 'true') {
      modeTipBanner.style.display = 'none';
    }
    bannerCloseBtn.addEventListener('click', () => {
      sound.playClick();
      modeTipBanner.style.display = 'none';
      localStorage.setItem('anxhu_banner_closed', 'true');
    });
  }

  // =========================================================================
  // 4. CUSTOM CURSOR & MOUSE FOLLOWER
  // =========================================================================
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let cursorX = mouseX;
  let cursorY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function updateCursor() {
    if (isInteractive && customCursor) {
      cursorX += (mouseX - cursorX) * 0.22;
      cursorY += (mouseY - cursorY) * 0.22;
      customCursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
    }
    requestAnimationFrame(updateCursor);
  }
  requestAnimationFrame(updateCursor);

  // Cursor Hover Targets
  const hoverSelectors = 'a, button, .polaroid-card, .book-card, .project-card, .timeline-card';
  document.querySelectorAll(hoverSelectors).forEach(el => {
    el.addEventListener('mouseenter', () => {
      if (isInteractive && customCursor) {
        customCursor.classList.add('cursor-hover');
        sound.playHover();
      }
    });
    el.addEventListener('mouseleave', () => {
      if (isInteractive && customCursor) {
        customCursor.classList.remove('cursor-hover', 'cursor-view');
      }
    });
  });

  // Project cards trigger "VIEW" label in cursor
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      if (isInteractive && customCursor) {
        customCursor.classList.add('cursor-view');
      }
    });
    card.addEventListener('mouseleave', () => {
      if (isInteractive && customCursor) {
        customCursor.classList.remove('cursor-view');
      }
    });
  });

  // =========================================================================
  // 5. 3D TILT EFFECT FOR CARDS (Perspective Tilt on MouseMove)
  // =========================================================================
  function initTilt(selector, maxTilt = 12) {
    const cards = document.querySelectorAll(selector);
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        if (!isInteractive) return;
        const rect = card.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const rx = (e.clientY - cy) / (rect.height / 2);
        const ry = (e.clientX - cx) / (rect.width / 2);

        const clamp = v => Math.max(-1, Math.min(1, v));
        const tiltX = -clamp(rx) * maxTilt;
        const tiltY = clamp(ry) * maxTilt;

        card.style.transform = `perspective(800px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) translateY(-4px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  initTilt('.book-card', 14);
  initTilt('#silver-badge', 16);

  // =========================================================================
  // 6. DRAGGABLE POLAROIDS & BRING-TO-FRONT
  // =========================================================================
  const polaroids = document.querySelectorAll('.polaroid-card');
  let topZIndex = 10;

  polaroids.forEach(card => {
    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let initialLeft = 0;
    let initialTop = 0;

    // Bring to front on mousedown
    card.addEventListener('mousedown', (e) => {
      if (!isInteractive) return;
      topZIndex++;
      card.style.zIndex = topZIndex;
      sound.playPop();

      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;

      const rect = card.getBoundingClientRect();
      const parentRect = card.parentElement.getBoundingClientRect();
      initialLeft = rect.left - parentRect.left;
      initialTop = rect.top - parentRect.top;

      card.style.transition = 'none';

      const onMouseMove = (moveEvent) => {
        if (!isDragging) return;
        const deltaX = moveEvent.clientX - startX;
        const deltaY = moveEvent.clientY - startY;

        card.style.left = `${initialLeft + deltaX}px`;
        card.style.top = `${initialTop + deltaY}px`;
        card.style.bottom = 'auto';
        card.style.right = 'auto';
      };

      const onMouseUp = () => {
        if (isDragging) {
          isDragging = false;
          card.style.transition = 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease';
          window.removeEventListener('mousemove', onMouseMove);
          window.removeEventListener('mouseup', onMouseUp);
        }
      };

      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
    });
  });

  // =========================================================================
  // 7. PROJECTS CATEGORY FILTERING
  // =========================================================================
  const filterTabs = document.querySelectorAll('.filter-tab');
  const projectCards = document.querySelectorAll('.project-card');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      sound.playClick();
      filterTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const filter = tab.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 30);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // =========================================================================
  // 8. CASE STUDY MODAL (Native Dialog API)
  // =========================================================================
  const modal = document.getElementById('case-study-modal');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const modalDismissBtn = document.getElementById('modal-dismiss-btn');
  const openCaseStudyBtns = document.querySelectorAll('.open-case-study-btn');

  function openCaseStudy(projectId) {
    const data = projectsDatabase[projectId];
    if (!data) return;

    sound.playPop();

    document.getElementById('modal-title').textContent = data.title;
    document.getElementById('modal-subtitle').textContent = data.subtitle;
    document.getElementById('modal-category').textContent = data.category;
    document.getElementById('modal-role').textContent = data.role;
    document.getElementById('modal-image').src = data.image;
    document.getElementById('modal-image').alt = data.title;
    document.getElementById('modal-overview').textContent = data.overview;
    document.getElementById('modal-idea').textContent = data.theIdea;
    document.getElementById('modal-results').textContent = data.results;
    document.getElementById('modal-github-btn').href = data.githubUrl;

    // Tech list
    const techContainer = document.getElementById('modal-tech');
    techContainer.innerHTML = '';
    data.tech.forEach(t => {
      const span = document.createElement('span');
      span.className = 'tech-tag';
      span.textContent = t;
      techContainer.appendChild(span);
    });

    // Process list
    const processContainer = document.getElementById('modal-process');
    processContainer.innerHTML = '';
    data.process.forEach(p => {
      const li = document.createElement('li');
      li.textContent = p;
      processContainer.appendChild(li);
    });

    modal.showModal();
    document.documentElement.style.overflow = 'hidden';
  }

  function closeCaseStudy() {
    sound.playClick();
    modal.close();
    document.documentElement.style.overflow = '';
  }

  openCaseStudyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-id');
      openCaseStudy(id);
    });
  });

  // Click on card opens case study as well
  projectCards.forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.card-github-link')) return;
      const id = card.getAttribute('data-project-id');
      if (id) openCaseStudy(id);
    });
  });

  if (closeModalBtn) closeModalBtn.addEventListener('click', closeCaseStudy);
  if (modalDismissBtn) modalDismissBtn.addEventListener('click', closeCaseStudy);

  // Close modal on click outside backdrop
  modal.addEventListener('click', (e) => {
    const dialogDimensions = modal.getBoundingClientRect();
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      closeCaseStudy();
    }
  });

  // =========================================================================
  // 9. WALL OF PORTFOLIOS CELEBRATION MODAL
  // =========================================================================
  const celebrationModal = document.getElementById('celebration-modal');
  const featuredWopBtn = document.getElementById('featured-wop-btn');
  const closeCelebrateBtn = document.getElementById('close-celebration-btn');
  const celebrateCloseBtn = document.getElementById('celebrate-close-btn');
  const shareWopBtn = document.getElementById('share-wop-btn');

  function openCelebration() {
    sound.playPop();
    celebrationModal.showModal();
    document.documentElement.style.overflow = 'hidden';
    spawnConfetti();
  }

  function closeCelebration() {
    sound.playClick();
    celebrationModal.close();
    document.documentElement.style.overflow = '';
  }

  if (featuredWopBtn) featuredWopBtn.addEventListener('click', openCelebration);
  if (closeCelebrateBtn) closeCelebrateBtn.addEventListener('click', closeCelebration);
  if (celebrateCloseBtn) celebrateCloseBtn.addEventListener('click', closeCelebration);

  if (shareWopBtn) {
    shareWopBtn.addEventListener('click', () => {
      sound.playClick();
      navigator.clipboard.writeText('https://www.wallofportfolios.in/portfolios/ayush-dhibar/');
      showToast('Showcase Link copied to clipboard! 📸');
    });
  }

  celebrationModal.addEventListener('click', (e) => {
    const rect = celebrationModal.getBoundingClientRect();
    if (
      e.clientX < rect.left ||
      e.clientX > rect.right ||
      e.clientY < rect.top ||
      e.clientY > rect.bottom
    ) {
      closeCelebration();
    }
  });

  // Canvas Confetti Generator
  function spawnConfetti() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.inset = '0';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '999999';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#63d94c', '#7970cd', '#1769f6', '#f59e0b', '#ffffff'];
    const particles = [];
    const count = 70;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        vx: (Math.random() - 0.5) * 16,
        vy: (Math.random() - 0.7) * 18,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 8 + 4,
        rotation: Math.random() * 360,
        vr: (Math.random() - 0.5) * 12,
        life: 1
      });
    }

    let animationFrame;
    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = false;

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.35; // gravity
        p.rotation += p.vr;
        p.life -= 0.012;

        if (p.life > 0) {
          alive = true;
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = Math.max(0, p.life);
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 1.5);
          ctx.restore();
        }
      });

      if (alive) {
        animationFrame = requestAnimationFrame(render);
      } else {
        cancelAnimationFrame(animationFrame);
        canvas.remove();
      }
    }
    render();
  }

  // =========================================================================
  // 10. COPY EMAIL & TOAST NOTIFICATION
  // =========================================================================
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const emailInput = document.getElementById('email-address-input');
  const toast = document.getElementById('toast-notification');
  const toastMsg = document.getElementById('toast-message');
  let toastTimer;

  function showToast(message) {
    if (!toast) return;
    toastMsg.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  if (copyEmailBtn && emailInput) {
    copyEmailBtn.addEventListener('click', () => {
      sound.playClick();
      navigator.clipboard.writeText(emailInput.value);
      showToast('Email address copied to clipboard! 📋');
    });
  }

  const resumeBtn = document.getElementById('view-resume-btn');
  if (resumeBtn) {
    resumeBtn.addEventListener('click', () => {
      sound.playClick();
      showToast('Resume link triggered! 📄');
    });
  }

  // =========================================================================
  // 11. LIVE INDIA TIME (IST Clock)
  // =========================================================================
  const liveTimeEl = document.getElementById('live-india-time');
  function updateLiveTime() {
    if (!liveTimeEl) return;
    const now = new Date();
    // Format to Asia/Kolkata timezone
    const options = {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    };
    const timeString = new Intl.DateTimeFormat('en-US', options).format(now);
    liveTimeEl.textContent = `${timeString} IST`;
  }
  updateLiveTime();
  setInterval(updateLiveTime, 1000);

  // =========================================================================
  // 12. ACTIVE NAV HIGHLIGHT ON SCROLL
  // =========================================================================
  const sections = document.querySelectorAll('main section');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 200;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

});
