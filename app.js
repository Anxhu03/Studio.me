/**
 * STUDIO.ME — JAVASCRIPT LOGIC
 * Replicating exact Framer portfolio interactive dynamics,
 * Three.js 3D character loading, hardware console slider, and visual rhythms.
 */

document.addEventListener('DOMContentLoaded', () => {

  // =========================================================================
  // 1. DATA: CASE STUDIES & PROJECTS
  // =========================================================================
  const projectsData = {
    'continuo': {
      title: 'Continuo — AI Context Portability Platform',
      subtitle: 'Keep your context. Continue anywhere across ChatGPT, Claude & Cursor.',
      category: 'AI / EXTENSION / FULL STACK',
      image: 'assets/projects/continuo.jpg',
      year: '2024',
      badge: 'FEATURED // AI PLATFORM',
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
      year: '2024',
      badge: 'SYSTEM // CYBER TELEMETRY',
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
      year: '2023',
      badge: 'ALGO // QUANT RESEARCH',
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
      year: '2024',
      badge: 'CREATIVE // BLENDER 4.1',
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
      year: '2023',
      badge: 'INTERACTION // DESIGN SYSTEM',
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
      year: '2023',
      badge: 'PRODUCT // DESIGN TOKENS',
      tech: ['Figma', 'Design Tokens', 'WCAG AAA Standards', 'Auto-Layout', 'Interactive Components'],
      overview: 'A robust, accessible design system built for data-dense telemetry and climate intelligence products. Contains tokens for typography, semantic palettes, elevation, and 40+ atomic components.',
      theIdea: 'Engineering velocity depends on design predictability. When engineers build from tokenized systems, design and implementation friction vanishes. EcoTrack demonstrates pixel-perfect design alignment with zero handoff ambiguity.',
      process: [
        'Structured systematic 8pt spacing grid and strict WCAG AAA contrast scales.',
        'Crafted modular chart components for real-time telemetry streaming.',
        'Conducted usability evaluations with 15 engineering peers to optimize keyboard shortcuts.'
      ],
      results: 'Accelerated interface prototyping velocity by 3x and achieved 100% WCAG accessibility compliance across dark/light modes.',
      githubUrl: 'https://github.com/Anxhu03'
    }
  };

  const projectKeys = ['continuo', 'sentinel-ai', 'ai-hedge-fund', 'blender-collection', 'nexora-ai', 'uiux-work'];
  let currentConsoleIdx = 0;

  // =========================================================================
  // 2. THREE.JS 3D CHARACTER ENGINE
  // =========================================================================
  const characterStage = document.getElementById('hero-character-stage');
  const canvasContainer = document.getElementById('character-canvas-container');
  const fallbackImg = document.getElementById('character-fallback');
  let scene, camera, renderer, characterModel, characterGroup;
  let targetRotationY = 0;
  let targetRotationX = 0;
  let mouseX = 0.5;
  let mouseY = 0.5;
  let isInteractiveMode = true;

  function initThreeCharacter() {
    if (!canvasContainer || typeof THREE === 'undefined') {
      if (fallbackImg) fallbackImg.style.display = 'block';
      return;
    }

    try {
      const width = canvasContainer.clientWidth || 480;
      const height = canvasContainer.clientHeight || 440;

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 100);
      camera.position.set(0, 0.85, 3.6);

      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance'
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.1;
      canvasContainer.appendChild(renderer.domElement);

      // Studio Lighting
      const ambientLight = new THREE.AmbientLight(0xd4e2ff, 1.2);
      scene.add(ambientLight);

      const keyLight = new THREE.DirectionalLight(0xffffff, 1.6);
      keyLight.position.set(3, 4, 3.5);
      scene.add(keyLight);

      const rimLight = new THREE.DirectionalLight(0x7970cd, 1.8);
      rimLight.position.set(-3, 2, -2.5);
      scene.add(rimLight);

      const fillLight = new THREE.DirectionalLight(0xffeedd, 0.6);
      fillLight.position.set(0, -2, 2.5);
      scene.add(fillLight);

      characterGroup = new THREE.Group();
      scene.add(characterGroup);

      // Loader with MeshoptDecoder
      const loader = new THREE.GLTFLoader();
      if (typeof MeshoptDecoder !== 'undefined') {
        loader.setMeshoptDecoder(MeshoptDecoder);
      }

      loader.load(
        'assets/models/character.glb',
        (gltf) => {
          characterModel = gltf.scene;

          // Compute bounds & normalize center
          const box = new THREE.Box3().setFromObject(characterModel);
          const center = box.getCenter(new THREE.Vector3());
          const size = box.getSize(new THREE.Vector3());

          // Center model on feet/base
          characterModel.position.x = -center.x;
          characterModel.position.y = -box.min.y;
          characterModel.position.z = -center.z;

          // Scale to fit nicely
          const maxDim = Math.max(size.x, size.y, size.z);
          const scale = 1.75 / (maxDim || 1);
          characterGroup.scale.set(scale, scale, scale);
          characterGroup.position.y = -0.7;

          characterGroup.add(characterModel);

          if (fallbackImg) fallbackImg.style.display = 'none';
        },
        undefined,
        (err) => {
          console.warn('Three.js character.glb loading notice:', err);
          if (fallbackImg) fallbackImg.style.display = 'block';
        }
      );

      // Mouse Look Awareness
      window.addEventListener('mousemove', (e) => {
        if (!isInteractiveMode) return;
        mouseX = e.clientX / window.innerWidth;
        mouseY = e.clientY / window.innerHeight;
        targetRotationY = (mouseX - 0.5) * 0.7;
        targetRotationX = (mouseY - 0.5) * 0.3;
      });

      // Window resize
      window.addEventListener('resize', () => {
        if (!canvasContainer || !camera || !renderer) return;
        const w = canvasContainer.clientWidth;
        const h = canvasContainer.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      });

      // Animation Loop
      let clock = new THREE.Clock();
      function animate() {
        requestAnimationFrame(animate);
        const elapsedTime = clock.getElapsedTime();

        if (characterGroup) {
          if (isInteractiveMode) {
            // Gentle idle bobbing & breathing
            characterGroup.position.y = -0.7 + Math.sin(elapsedTime * 1.6) * 0.035;
            characterGroup.rotation.y += (targetRotationY - characterGroup.rotation.y) * 0.07;
            characterGroup.rotation.x += (targetRotationX - characterGroup.rotation.x) * 0.07;
          } else {
            // Calm stationary stance
            characterGroup.position.y += (-0.7 - characterGroup.position.y) * 0.05;
            characterGroup.rotation.y += (0 - characterGroup.rotation.y) * 0.05;
            characterGroup.rotation.x += (0 - characterGroup.rotation.x) * 0.05;
          }
        }

        renderer.render(scene, camera);
      }
      animate();

    } catch (e) {
      console.warn('Three.js setup fallback:', e);
      if (fallbackImg) fallbackImg.style.display = 'block';
    }
  }

  initThreeCharacter();

  // =========================================================================
  // 3. RETRO HARDWARE CONSOLE SHOWCASE
  // =========================================================================
  const screenImg = document.getElementById('console-screen-img');
  const screenBadge = document.getElementById('console-screen-badge');
  const channelTag = document.getElementById('console-channel-tag');
  const catPill = document.getElementById('console-cat-pill');
  const yearTag = document.getElementById('console-year');
  const consoleTitle = document.getElementById('console-title');
  const consoleDesc = document.getElementById('console-desc');
  const consoleViewBtn = document.getElementById('console-view-modal-btn');
  const consoleGithubLink = document.getElementById('console-github-link');
  const knobEl = document.getElementById('rotary-knob-element');
  const switchImg = document.getElementById('switch-img');
  const nextBtn = document.getElementById('console-next-btn');
  const prevBtn = document.getElementById('console-prev-btn');
  const knobWrap = document.getElementById('console-knob');
  const switchBtn = document.getElementById('console-switch-btn');

  let knobRotation = 0;
  let switchState = true;

  function updateConsoleProject(idx) {
    currentConsoleIdx = (idx + projectKeys.length) % projectKeys.length;
    const key = projectKeys[currentConsoleIdx];
    const data = projectsData[key];

    if (!data) return;

    // Knob rotation animation
    knobRotation += 45;
    if (knobEl) {
      knobEl.style.transform = `rotate(${knobRotation}deg)`;
    }

    // Toggle switch flip
    switchState = !switchState;
    if (switchImg) {
      switchImg.src = switchState ? 'assets/ui/switch_up.png' : 'assets/ui/switch_down.png';
    }

    // Screen image fade transition
    if (screenImg) {
      screenImg.style.opacity = '0.3';
      screenImg.style.transform = 'scale(0.98)';
      setTimeout(() => {
        screenImg.src = data.image;
        screenImg.style.opacity = '1';
        screenImg.style.transform = 'scale(1)';
      }, 150);
    }

    if (screenBadge) screenBadge.textContent = data.badge;
    if (channelTag) channelTag.textContent = `CH 0${currentConsoleIdx + 1} / 06`;
    if (catPill) catPill.textContent = data.category;
    if (yearTag) yearTag.textContent = data.year;
    if (consoleTitle) consoleTitle.textContent = data.title;
    if (consoleDesc) consoleDesc.textContent = data.overview.slice(0, 180) + '...';
    if (consoleViewBtn) consoleViewBtn.setAttribute('data-id', key);
    if (consoleGithubLink) consoleGithubLink.href = data.githubUrl;
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => updateConsoleProject(currentConsoleIdx + 1));
  }
  if (prevBtn) {
    prevBtn.addEventListener('click', () => updateConsoleProject(currentConsoleIdx - 1));
  }
  if (knobWrap) {
    knobWrap.addEventListener('click', () => updateConsoleProject(currentConsoleIdx + 1));
  }
  if (switchBtn) {
    switchBtn.addEventListener('click', () => updateConsoleProject(currentConsoleIdx + 1));
  }

  // =========================================================================
  // 4. BLENDER STUDIO CAMERA ANGLE SWITCHER
  // =========================================================================
  const angleBtns = document.querySelectorAll('.angle-btn');
  const blenderImg = document.getElementById('blender-active-render');
  const angleMap = {
    'front': 'assets/character/front.jpg',
    'hero-waving': 'assets/character/hero-waving.jpg',
    'left': 'assets/character/left.jpg',
    'right': 'assets/character/right.png',
    'back': 'assets/character/back.jpg'
  };

  angleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const angle = btn.getAttribute('data-angle');
      if (angle && angleMap[angle] && blenderImg) {
        angleBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        blenderImg.style.opacity = '0.4';
        setTimeout(() => {
          blenderImg.src = angleMap[angle];
          blenderImg.style.opacity = '1';
        }, 120);
      }
    });
  });

  // =========================================================================
  // 5. INTERACTIVE MODE TOGGLE
  // =========================================================================
  const toggleBtn = document.getElementById('interactive-mode-toggle');
  const topHelper = document.getElementById('top-helper');

  function setInteractiveMode(enabled) {
    isInteractiveMode = enabled;
    if (enabled) {
      document.body.classList.remove('interactive-mode-off');
      document.body.classList.add('interactive-mode-on');
      if (toggleBtn) {
        toggleBtn.classList.remove('inactive');
        toggleBtn.classList.add('active');
        const badge = toggleBtn.querySelector('.toggle-badge');
        if (badge) badge.textContent = 'ON';
      }
      showToast('Interactive Mode ON: Full 3D motion & cursor active');
    } else {
      document.body.classList.remove('interactive-mode-on');
      document.body.classList.add('interactive-mode-off');
      if (toggleBtn) {
        toggleBtn.classList.remove('active');
        toggleBtn.classList.add('inactive');
        const badge = toggleBtn.querySelector('.toggle-badge');
        if (badge) badge.textContent = 'OFF';
      }
      showToast('Interactive Mode OFF: Calmer motion & faster performance');
    }
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      setInteractiveMode(!isInteractiveMode);
    });
  }

  // Fade top helper notice after 5 seconds
  if (topHelper) {
    setTimeout(() => {
      topHelper.style.opacity = '0';
    }, 5000);
  }

  // =========================================================================
  // 6. CUSTOM CURSOR FOLLOWER
  // =========================================================================
  const cursor = document.getElementById('custom-cursor');
  let mouseCurX = 0, mouseCurY = 0;
  let ringX = 0, ringY = 0;

  if (cursor) {
    window.addEventListener('mousemove', (e) => {
      mouseCurX = e.clientX;
      mouseCurY = e.clientY;
      cursor.style.left = `${mouseCurX}px`;
      cursor.style.top = `${mouseCurY}px`;
    });

    const hoverTargets = 'a, button, [data-tilt], .filter-chip, .framer-polaroid-card, .book-3d-item, .framer-project-item, .rotary-knob-wrap';
    document.querySelectorAll(hoverTargets).forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
    });

    document.querySelectorAll('.framer-project-item, .console-crt-screen').forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('cursor-view'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-view'));
    });
  }

  // =========================================================================
  // 7. TOAST NOTIFICATION HELPER
  // =========================================================================
  const toast = document.getElementById('toast');
  const toastText = document.getElementById('toast-text');
  let toastTimer;

  function showToast(message) {
    if (!toast || !toastText) return;
    toastText.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  // =========================================================================
  // 8. PROJECT FILTER CHIPS
  // =========================================================================
  const filterChips = document.querySelectorAll('.filter-chip');
  const projectItems = document.querySelectorAll('.framer-project-item');

  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      const filterVal = chip.getAttribute('data-filter');
      projectItems.forEach(item => {
        const itemCat = item.getAttribute('data-category');
        if (filterVal === 'all' || itemCat === filterVal) {
          item.style.display = 'block';
          item.style.opacity = '1';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // =========================================================================
  // 9. CASE STUDY MODAL
  // =========================================================================
  const modal = document.getElementById('case-study-modal');
  const closeModalBtn = document.getElementById('close-case-modal');

  function openCaseStudy(projectId) {
    const data = projectsData[projectId];
    if (!data || !modal) return;

    document.getElementById('case-modal-img').src = data.image;
    document.getElementById('case-modal-title').textContent = data.title;
    document.getElementById('case-modal-subtitle').textContent = data.subtitle;
    document.getElementById('case-modal-cat').textContent = data.category;
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
  }

  document.querySelectorAll('.action-view-btn, #console-view-modal-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const pid = btn.getAttribute('data-id');
      if (pid) openCaseStudy(pid);
    });
  });

  if (closeModalBtn && modal) {
    closeModalBtn.addEventListener('click', () => modal.close());
    modal.addEventListener('click', (e) => {
      const rect = modal.getBoundingClientRect();
      if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) {
        modal.close();
      }
    });
  }

  // =========================================================================
  // 10. RESUME MODAL
  // =========================================================================
  const resumeModal = document.getElementById('resume-modal');
  const navResumeBtn = document.getElementById('nav-resume-btn');
  const viewResumeLink = document.getElementById('view-resume-link');
  const closeResumeModal = document.getElementById('close-resume-modal');

  function openResume(e) {
    if (e) e.preventDefault();
    if (resumeModal) resumeModal.showModal();
  }

  if (navResumeBtn) navResumeBtn.addEventListener('click', openResume);
  if (viewResumeLink) viewResumeLink.addEventListener('click', openResume);
  if (closeResumeModal && resumeModal) {
    closeResumeModal.addEventListener('click', () => resumeModal.close());
    resumeModal.addEventListener('click', (e) => {
      const rect = resumeModal.getBoundingClientRect();
      if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) {
        resumeModal.close();
      }
    });
  }

  // =========================================================================
  // 11. SCROLL SPY & DOCK NAVIGATION HIGHLIGHT
  // =========================================================================
  const sections = document.querySelectorAll('section[id]');
  const dockLinks = document.querySelectorAll('.dock-link[data-nav]');

  window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY + window.innerHeight * 0.4;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        dockLinks.forEach(link => {
          if (link.getAttribute('data-nav') === id) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, { passive: true });

});
