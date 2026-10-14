/**
 * Mayank Verma // 1st Year B.Tech Portfolio
 * Interactive Functionality & Modern UX Scripts
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. THEME SWITCHER (Dark / Light Mode)
     ========================================================================== */
  const themeToggle = document.getElementById('theme-toggle');
  const htmlRoot = document.documentElement;

  // Retrieve saved theme or system preference
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme) {
    htmlRoot.setAttribute('data-theme', savedTheme);
  } else {
    htmlRoot.setAttribute('data-theme', prefersDark ? 'dark' : 'dark'); // Default dark
  }

  themeToggle.addEventListener('click', () => {
    const currentTheme = htmlRoot.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    htmlRoot.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    showToast(`Switched to ${newTheme === 'dark' ? 'Dark' : 'Light'} Mode`);
  });


  /* ==========================================================================
     2. MOBILE DRAWER NAVIGATION
     ========================================================================== */
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  const toggleMobileMenu = () => {
    const isOpen = mobileDrawer.classList.contains('open');
    if (isOpen) {
      mobileDrawer.classList.remove('open');
      mobileToggle.classList.remove('active');
      mobileToggle.setAttribute('aria-expanded', 'false');
      mobileDrawer.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    } else {
      mobileDrawer.classList.add('open');
      mobileToggle.classList.add('active');
      mobileToggle.setAttribute('aria-expanded', 'true');
      mobileDrawer.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  };

  mobileToggle.addEventListener('click', toggleMobileMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileDrawer.classList.contains('open')) {
        toggleMobileMenu();
      }
    });
  });


  /* ==========================================================================
     3. TYPEWRITER ANIMATION (Hero Section)
     ========================================================================== */
  const typewriterElement = document.getElementById('typewriter');
  const phrases = [
    'Data Structures & Algorithms in C++',
    'Responsive & Modern Web Apps',
    'Python Scripting & Logic Building',
    'Core Computer Science Foundations',
    'Clean, Modular & Scalable Code'
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 90;

  function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
      typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 45;
    } else {
      typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 85;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      // Pause at full phrase
      typingSpeed = 1800;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typingSpeed = 450;
    }

    setTimeout(typeEffect, typingSpeed);
  }

  if (typewriterElement) {
    typeEffect();
  }


  /* ==========================================================================
     4. NAVBAR SCROLL EFFECT & ACTIVE SECTION TRACKING
     ========================================================================== */
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    // Header styling on scroll
    if (scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Back to top button visibility
    if (scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }

    // Active navigation highlight
    let currentSectionId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });


  /* ==========================================================================
     5. SKILLS FILTERING TABS
     ========================================================================== */
  const skillTabs = document.querySelectorAll('.skill-tab');
  const skillCards = document.querySelectorAll('.skill-card');

  skillTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      skillTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const filterValue = tab.getAttribute('data-filter');

      skillCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.opacity = '1';
          }, 50);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });


  /* ==========================================================================
     6. PROJECTS FILTERING
     ========================================================================== */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const categories = card.getAttribute('data-category') || '';
        if (filter === 'all' || categories.includes(filter)) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.opacity = '1';
          }, 50);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });


  /* ==========================================================================
     7. INTERACTIVE STUDENT TOOL (Attendance & Safety Margin Calculator)
     ========================================================================== */
  const conductedInput = document.getElementById('classes-conducted');
  const attendedInput = document.getElementById('classes-attended');
  const targetInput = document.getElementById('target-percentage');
  const currAttendanceEl = document.getElementById('curr-attendance');
  const attendanceMsgEl = document.getElementById('attendance-msg');

  function calculateAttendance() {
    const conducted = parseInt(conductedInput.value, 10) || 0;
    const attended = parseInt(attendedInput.value, 10) || 0;
    const target = parseInt(targetInput.value, 10) || 75;

    if (conducted <= 0) {
      currAttendanceEl.textContent = '0%';
      attendanceMsgEl.textContent = 'Please enter valid total classes conducted.';
      return;
    }

    if (attended > conducted) {
      attendedInput.value = conducted;
      return calculateAttendance();
    }

    const currentPercentage = ((attended / conducted) * 100).toFixed(1);
    currAttendanceEl.textContent = `${currentPercentage}%`;

    const targetFraction = target / 100;

    if (parseFloat(currentPercentage) >= target) {
      // Classes user can safely miss: attended / (conducted + x) >= targetFraction => x <= (attended / targetFraction) - conducted
      const safeMisses = Math.floor((attended / targetFraction) - conducted);
      if (safeMisses > 0) {
        attendanceMsgEl.innerHTML = `🎉 <strong>Excellent standing!</strong> You can safely miss up to <strong>${safeMisses} more class${safeMisses > 1 ? 'es' : ''}</strong> while remaining comfortably above ${target}%.`;
      } else {
        attendanceMsgEl.innerHTML = `⚠️ <strong>Borderline zone!</strong> You are currently at target. Do not miss the next class to prevent falling below ${target}%.`;
      }
    } else {
      // Classes user must attend consecutively: (attended + x) / (conducted + x) >= targetFraction => x >= (targetFraction * conducted - attended) / (1 - targetFraction)
      const needed = Math.ceil(((targetFraction * conducted) - attended) / (1 - targetFraction));
      attendanceMsgEl.innerHTML = `🚨 <strong>Below ${target}%!</strong> You need to attend the next <strong>${needed} class${needed > 1 ? 'es' : ''}</strong> without fail to recover your attendance standing.`;
    }
  }

  if (conductedInput && attendedInput && targetInput) {
    conductedInput.addEventListener('input', calculateAttendance);
    attendedInput.addEventListener('input', calculateAttendance);
    targetInput.addEventListener('input', calculateAttendance);
    calculateAttendance();
  }


  /* ==========================================================================
     8. PROJECT DETAIL MODAL SYSTEM
     ========================================================================== */
  const projectModal = document.getElementById('project-modal');
  const modalClose = document.getElementById('modal-close');
  const modalContainer = document.getElementById('modal-content-container');
  const projectTriggers = document.querySelectorAll('.project-modal-trigger');

  const projectDetails = {
    campussync: {
      tag: 'Full-Stack Student Suite',
      title: 'CampusSync // Student Academic & Attendance Tracker',
      desc: 'An end-to-end academic companion crafted for first-year engineering students to avoid attendance shortages and forecast semester CGPA accurately.',
      problem: 'College students often struggle with tracking subject-wise attendance thresholds (e.g. 75% university rule) and simulating how different grades affect their overall SGPA/CGPA.',
      solution: 'Built a lightweight, responsive progressive web tool with offline local storage, instant mathematical simulations for safe bunking margins, and visual grade projection.',
      features: [
        'Dynamic SGPA simulator with credit-weighted calculation',
        'Attendance deficit and safety buffer engine',
        'Encrypted LocalStorage persistence with JSON backup and restore',
        'Clean, accessible UI built without bulky frameworks for instant load'
      ],
      tech: ['JavaScript (ES6+)', 'HTML5 & CSS Grid', 'LocalStorage API', 'Responsive UI'],
      github: 'https://github.com',
      demo: 'https://github.com'
    },
    algoflow: {
      tag: 'Interactive DSA Simulator',
      title: 'AlgoFlow // Sorting Algorithm Visualizer',
      desc: 'Visual educational tool created to break down algorithmic concepts into intuitive visual steps for freshman computer science peers.',
      problem: 'Understanding abstract sorting algorithms like Merge Sort and Quick Sort from static textbook diagrams is notoriously challenging for first-year students.',
      solution: 'Developed an animated HTML5 Canvas visualizer that illustrates array comparisons, swaps, and recursive partitions with speed regulation and complexity summaries.',
      features: [
        'Supports Bubble Sort, Selection Sort, Insertion Sort, and Merge Sort',
        'Color-coded states: Blue (unsorted), Orange (comparing), Red (swapping), Green (sorted)',
        'Adjustable array generation size (10 to 100 elements) and speed control slider',
        'Real-time comparison counters and Time/Space complexity cheat-sheet'
      ],
      tech: ['HTML5 Canvas', 'Async JavaScript', 'CSS3 Animations', 'Algorithm Analysis'],
      github: 'https://github.com',
      demo: 'https://github.com'
    },
    eduvault: {
      tag: 'C++ Systems & DSA Engine',
      title: 'EduVault // CLI Student Record Management System',
      desc: 'High-performance command-line database written in C++17 utilizing custom linked list nodes and binary file serialization for persistent record handling.',
      problem: 'Freshman programming projects often rely on ephemeral variables that wipe out data on terminal exit, with unstructured array limitations.',
      solution: 'Constructed an in-memory singly linked list data structure paired with binary file I/O streams (`fstream`) to offer durable CRUD operations, sorting, and search.',
      features: [
        'Pointer-based linked list implementation with O(1) insertion and O(N) deletion',
        'Direct binary file serialization preserving student structs across program runs',
        'Fast search by Roll Number and sorting algorithms by SGPA rank',
        'Strict input sanitization handling buffer overflows and type mismatches'
      ],
      tech: ['C++17', 'Linked Lists', 'Binary File I/O', 'Algorithm Design'],
      github: 'https://github.com',
      demo: 'https://github.com'
    },
    bytenotes: {
      tag: 'Engineering Knowledge Base',
      title: 'ByteNotes // Engineering Revision & Notes Hub',
      desc: 'Clean, distraction-free technical documentation portal created to share simplified 1st year notes on C pointers, recursion, and web basics with classmates.',
      problem: 'Scattered lecture notes and PDFs make quick exam revisions tedious and time-consuming before semester tests.',
      solution: 'Curated a searchable, organized web documentation platform with syntax-highlighted snippets, copy-paste cheatsheets, and estimated reading times.',
      features: [
        'Instant client-side fuzzy search across all subjects and topics',
        'Built-in code copy buttons with visual feedback',
        'Reading progress bar indicator and distraction-free dark reading mode',
        'Mobile-optimized typography following WCAG accessibility guidelines'
      ],
      tech: ['HTML5', 'Modern CSS3', 'JavaScript', 'Documentation Design'],
      github: 'https://github.com',
      demo: 'https://github.com'
    },
    portfolio: {
      tag: 'Personal Brand & Showcase',
      title: 'Mayank Dev // Modern Student Portfolio',
      desc: 'The official digital portfolio of Mayank Verma, designed and coded from scratch with modern web standards, zero third-party dependencies, and high performance.',
      problem: 'First-year students need a sleek, professional digital identity to showcase academic progress, verified skills, and coding initiatives to recruiters and mentors.',
      solution: 'Crafted a high-performance web experience featuring CSS variables, dark/light theme persistence, smooth scroll tracking, and interactive student utilities.',
      features: [
        '100% responsive and accessible architecture matching modern design trends',
        'Interactive GPA & Attendance Safety margin calculator widget',
        'Accessible modal drawers and client-side contact validation',
        'Zero bloated dependencies—pure, lightning-fast vanilla web code'
      ],
      tech: ['Semantic HTML5', 'CSS3 Variables', 'Vanilla JavaScript', 'Accessibility (a11y)'],
      github: 'https://github.com',
      demo: '#home'
    }
  };

  function openProjectModal(projectId) {
    const project = projectDetails[projectId];
    if (!project) return;

    modalContainer.innerHTML = `
      <div class="modal-header-block">
        <span class="modal-tag">${project.tag}</span>
        <h3 class="modal-title">${project.title}</h3>
        <p class="project-summary">${project.desc}</p>
      </div>

      <h4 class="modal-section-title">The Challenge & Motivation</h4>
      <p class="modal-feature-item">${project.problem}</p>

      <h4 class="modal-section-title">Technical Solution</h4>
      <p class="modal-feature-item">${project.solution}</p>

      <h4 class="modal-section-title">Key Architectural Highlights</h4>
      <div class="modal-feature-list">
        ${project.features.map(f => `<div class="modal-feature-item">✓ ${f}</div>`).join('')}
      </div>

      <h4 class="modal-section-title">Technologies Utilized</h4>
      <div class="project-tech-stack">
        ${project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
      </div>

      <div class="modal-actions">
        <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary">
          <span>GitHub Repository</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        </a>
        <a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-secondary">
          <span>Live Demo / Preview</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
        </a>
      </div>
    `;

    projectModal.classList.add('active');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    projectModal.classList.remove('active');
    projectModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  projectTriggers.forEach(btn => {
    btn.addEventListener('click', () => {
      const pId = btn.getAttribute('data-project');
      openProjectModal(pId);
    });
  });

  if (modalClose) {
    modalClose.addEventListener('click', closeProjectModal);
  }

  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) {
        closeProjectModal();
      }
    });
  }


  /* ==========================================================================
     9. CERTIFICATE PREVIEW MODAL SYSTEM
     ========================================================================== */
  const certModal = document.getElementById('cert-modal');
  const certClose = document.getElementById('cert-close');
  const certContainer = document.getElementById('cert-content-container');
  const certTriggers = document.querySelectorAll('.cert-view-btn');

  const certData = {
    hackerrank: {
      platform: 'HackerRank Verified Skill',
      title: 'Problem Solving (Intermediate)',
      issued: 'November 2024',
      id: 'HR-PS-89214',
      desc: 'Validated core algorithmic mastery including complex data structures, graph traversals, dynamic programming basics, and time-optimized computations.',
      skills: ['Algorithms', 'Data Structures', 'C++', 'Complexity Optimization']
    },
    cs50: {
      platform: 'Harvard edX',
      title: "CS50's Introduction to Computer Science",
      issued: 'October 2024',
      id: 'CS50x-MAYANK-2024',
      desc: 'In-depth university-level foundation covering C memory pointers, binary representations, algorithmic sorting, web development basics, and computational thinking.',
      skills: ['Low-level C', 'Pointers & Memory', 'Algorithms', 'Computer Systems']
    },
    freecodecamp: {
      platform: 'freeCodeCamp Developer Certification',
      title: 'Responsive Web Design (300 Hours)',
      issued: 'September 2024',
      id: 'FCC-RWD-7341',
      desc: 'Demonstrated proficiency in semantic HTML5 markup, responsive CSS architectures, modern Flexbox, CSS Grid layouts, and web accessibility standards.',
      skills: ['HTML5', 'CSS3 Flexbox & Grid', 'Responsive Design', 'Web Accessibility']
    },
    python: {
      platform: 'University of Michigan / Coursera',
      title: 'Python for Everybody Specialization',
      issued: 'August 2024',
      id: 'COURSERA-PY-5401',
      desc: 'Comprehensive training in Python data structures, handling external web services, JSON/XML parsing, and SQLite database manipulation.',
      skills: ['Python 3', 'Data Structures', 'File & Web Parsing', 'SQLite Fundamentals']
    }
  };

  function openCertModal(certKey) {
    const cert = certData[certKey];
    if (!cert) return;

    certContainer.innerHTML = `
      <div class="modal-header-block">
        <span class="modal-tag">${cert.platform}</span>
        <h3 class="modal-title">${cert.title}</h3>
        <p class="cert-issuer">Issued: ${cert.issued} • Credential ID: <code>${cert.id}</code></p>
      </div>

      <p class="modal-feature-item">${cert.desc}</p>

      <h4 class="modal-section-title">Verified Competencies</h4>
      <div class="project-tech-stack">
        ${cert.skills.map(s => `<span class="tech-tag">${s}</span>`).join('')}
      </div>

      <div class="modal-actions">
        <button class="btn btn-sm btn-primary" onclick="window.showToast('Credential verification simulated successfully!')">
          <span>Verify Credential Online</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
        </button>
      </div>
    `;

    certModal.classList.add('active');
    certModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeCertModal() {
    certModal.classList.remove('active');
    certModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  certTriggers.forEach(btn => {
    btn.addEventListener('click', () => {
      const cKey = btn.getAttribute('data-cert');
      openCertModal(cKey);
    });
  });

  if (certClose) {
    certClose.addEventListener('click', closeCertModal);
  }

  if (certModal) {
    certModal.addEventListener('click', (e) => {
      if (e.target === certModal) {
        closeCertModal();
      }
    });
  }

  // Close modals on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (projectModal && projectModal.classList.contains('active')) closeProjectModal();
      if (certModal && certModal.classList.contains('active')) closeCertModal();
    }
  });


  /* ==========================================================================
     10. COPY EMAIL TO CLIPBOARD
     ========================================================================== */
  const copyEmailBtn = document.getElementById('copy-email-btn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = 'mayank.btech.dev@gmail.com';
      navigator.clipboard.writeText(email)
        .then(() => {
          showToast('Email copied to clipboard: ' + email);
        })
        .catch(() => {
          showToast('Email address: ' + email);
        });
    });
  }


  /* ==========================================================================
     11. RESUME BUTTON ACTION
     ========================================================================== */
  const resumeBtn = document.getElementById('resume-btn');
  if (resumeBtn) {
    resumeBtn.addEventListener('click', () => {
      showToast('Opening Mayank\'s B.Tech Resume...');
      // Smooth scroll to education or open preview
      const educationSection = document.getElementById('education');
      if (educationSection) {
        educationSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }


  /* ==========================================================================
     12. CONTACT FORM VALIDATION & INTERACTIVE SUBMISSION
     ========================================================================== */
  const contactForm = document.getElementById('contact-form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const subjectInput = document.getElementById('subject');
  const messageInput = document.getElementById('message');
  const submitBtn = document.getElementById('submit-btn');
  const formSuccess = document.getElementById('form-success');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;

      // Validate Name
      if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
        document.getElementById('name-error').classList.add('visible');
        nameInput.classList.add('invalid');
        isValid = false;
      } else {
        document.getElementById('name-error').classList.remove('visible');
        nameInput.classList.remove('invalid');
      }

      // Validate Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
        document.getElementById('email-error').classList.add('visible');
        emailInput.classList.add('invalid');
        isValid = false;
      } else {
        document.getElementById('email-error').classList.remove('visible');
        emailInput.classList.remove('invalid');
      }

      // Validate Subject
      if (!subjectInput.value) {
        document.getElementById('subject-error').classList.add('visible');
        subjectInput.classList.add('invalid');
        isValid = false;
      } else {
        document.getElementById('subject-error').classList.remove('visible');
        subjectInput.classList.remove('invalid');
      }

      // Validate Message
      if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
        document.getElementById('message-error').classList.add('visible');
        messageInput.classList.add('invalid');
        isValid = false;
      } else {
        document.getElementById('message-error').classList.remove('visible');
        messageInput.classList.remove('invalid');
      }

      if (!isValid) return;

      // Simulate sending state
      submitBtn.classList.add('loading');
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
        formSuccess.classList.add('visible');
        contactForm.reset();
        showToast('Message sent! Mayank will reply soon.');

        setTimeout(() => {
          formSuccess.classList.remove('visible');
        }, 7000);
      }, 1200);
    });
  }


  /* ==========================================================================
     13. TOAST NOTIFICATION UTILITY
     ========================================================================== */
  window.showToast = function(msg) {
    const toastContainer = document.getElementById('toast-container');
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
      <span>${msg}</span>
    `;

    toastContainer.appendChild(toast);

    // Animate in
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    // Auto dismiss after 3.2s
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        toast.remove();
      }, 300);
    }, 3200);
  };

});
