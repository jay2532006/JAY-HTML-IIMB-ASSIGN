/**
 * =========================================================================
 * JAY PARMAR — PORTFOLIO JAVASCRIPT ARCHITECTURE
 * Course: Website Development (Instructor: Prof. Govind Shenoy, IIM Bangalore)
 * Curriculum Alignment: MODULE 6 — JAVASCRIPT ESSENTIALS (6.1 – 6.8)
 * 
 * Demonstrates:
 * - 6.1 JavaScript Fundamentals & DOM Integration
 * - 6.2 Data Types, Primitive vs. Reference, Scoping (const / let)
 * - 6.3 Strings, Template Literals, Numbers & Math Operations
 * - 6.4 Control Flow (if/else, ternary operators, truthy/falsy)
 * - 6.5 Arrays, NodeLists & Iteration Methods (.filter, .forEach, .map)
 * - 6.6 Objects, Dictionaries & Key-Value State Stores
 * - 6.7 Loops (for...of, traditional index loops)
 * - 6.8 Functions, Arrow Functions, DOM Manipulation & Event Listeners
 * =========================================================================
 */

'use strict'; // Module 6.1: Enforce strict parsing and error handling

document.addEventListener('DOMContentLoaded', () => {

  /* =========================================================================
   * MODULE 6.2 & 6.6: GLOBAL CONFIGURATION OBJECTS & STATE MANAGEMENT
   * ========================================================================= */
  
  // Module 6.6: Object dictionary for theme metadata
  const THEME_CONFIG = {
    themes: ['dark', 'light'],
    labels: {
      dark: '🌙 Dark',
      light: '☀️ Light',
      obsidian: '🌙 Dark'
    },
    storageKey: 'jay-portfolio-theme'
  };

  // Module 6.2: State variable with let (mutable)
  let currentThemeIndex = 0;


  /* =========================================================================
   * FEATURE 1 (USP 1): SCROLL-DRIVEN READING PROGRESS BAR
   * Syllabus: 6.3 (Numbers & Arithmetic), 6.4 (Control Flow / Ternary), 6.8 (DOM Events)
   * ========================================================================= */
  const progressBar = document.getElementById('scroll-progress');

  // Module 6.8: Pure calculation function with parameters and return value
  function calculateScrollPercentage(scrollTop, scrollHeight) {
    // Module 6.4: Ternary operator for safe division
    return scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
  }

  // Module 6.8: Event Listener on window scroll
  window.addEventListener('scroll', () => {
    // Module 6.3: Reading numeric scroll measurements
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    const percentage = calculateScrollPercentage(scrollTop, scrollHeight);

    // Module 6.4: Control flow to guard DOM mutation
    if (progressBar) {
      // Module 6.3: Template literal for CSS percentage string
      progressBar.style.width = `${percentage}%`;
    }
  }, { passive: true });


  /* =========================================================================
   * FEATURE 2 (USP 7): SCROLL REVEAL VIA INTERSECTION OBSERVER
   * Syllabus: 6.5 (Array/NodeList Iteration), 6.8 (DOM Manipulation & Callbacks)
   * ========================================================================= */
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

  // Module 6.4: Feature detection conditional
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      // Module 6.5: .forEach array iteration
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // Unobserve once animated
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    // Module 6.7: for...of loop over DOM NodeList
    for (const el of revealElements) {
      revealObserver.observe(el);
    }
  } else {
    // Graceful fallback for legacy browsers without IntersectionObserver
    revealElements.forEach(el => el.classList.add('is-visible'));
  }


  /* =========================================================================
   * FEATURE 3 (USP 5): ANIMATED NUMBER COUNTERS (QUANTITATIVE KPIS)
   * Syllabus: 6.3 (Numbers, Math.pow, requestAnimationFrame), 6.8 (Arrow Functions)
   * ========================================================================= */
  const statElements = document.querySelectorAll('.count-up');
  let statsHasAnimated = false; // Module 6.2: Boolean state flag

  // Module 6.8: Modular animation function
  const animateStats = () => {
    statElements.forEach(el => {
      // Module 6.3: Number parsing and attribute extraction
      const target = parseFloat(el.getAttribute('data-target'));
      const prefix = el.getAttribute('data-prefix') || '';
      const suffix = el.getAttribute('data-suffix') || '';
      const isDecimal = target % 1 !== 0; // Module 6.4: Modulo check for floating numbers
      const duration = 1800; // Duration in milliseconds
      const startTime = performance.now();

      // Module 6.8: Recursive animation frame handler
      const updateCount = (currentTime) => {
        const elapsed = currentTime - startTime;
        // Module 6.3: Math methods (Math.min, Math.pow for cubic easing curve)
        const progress = Math.min(elapsed / duration, 1);
        const easeOutProgress = 1 - Math.pow(1 - progress, 3);
        const currentVal = target * easeOutProgress;

        // Module 6.3 & 6.4: Formatted string output with ternary operator
        const formattedNumber = isDecimal ? currentVal.toFixed(1) : Math.round(currentVal);
        el.textContent = `${prefix}${formattedNumber}${suffix}`;

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          // Final exact value assignment to eliminate floating-point drift
          el.textContent = `${prefix}${target}${suffix}`;
        }
      };

      requestAnimationFrame(updateCount);
    });
  };

  const heroStatsSection = document.querySelector('.hero-stats-grid');
  if (heroStatsSection && 'IntersectionObserver' in window) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Module 6.4: Compound logical condition
        if (entry.isIntersecting && !statsHasAnimated) {
          statsHasAnimated = true;
          animateStats();
        }
      });
    }, { threshold: 0.25 });
    statsObserver.observe(heroStatsSection);
  }


  /* =========================================================================
   * FEATURE 4 (USP 8): MULTI-THEME CONTROLLER & LOCALSTORAGE PERSISTENCE
   * Syllabus: 6.2 (Variables), 6.4 (Control Flow), 6.5 (Arrays), 6.6 (Objects)
   * ========================================================================= */
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeNameEl = document.getElementById('theme-name');

  // Module 6.8: Helper function to apply theme to document root
  function applyTheme(themeKey) {
    document.documentElement.setAttribute('data-theme', themeKey);
    localStorage.setItem(THEME_CONFIG.storageKey, themeKey);
    
    // Module 6.4: Guard clause for DOM label update
    if (themeNameEl && THEME_CONFIG.labels[themeKey]) {
      themeNameEl.textContent = THEME_CONFIG.labels[themeKey];
    }
  }

  // Initialize theme from localStorage or fallback to default
  let savedTheme = localStorage.getItem(THEME_CONFIG.storageKey) || 'dark'; if (savedTheme === 'obsidian' || savedTheme === 'contrast') savedTheme = 'dark';
  // Module 6.5: Array.indexOf() method
  const foundIndex = THEME_CONFIG.themes.indexOf(savedTheme);
  currentThemeIndex = foundIndex !== -1 ? foundIndex : 0;
  applyTheme(THEME_CONFIG.themes[currentThemeIndex]);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      // Module 6.3: Modulo cycle arithmetic through array bounds
      currentThemeIndex = (currentThemeIndex + 1) % THEME_CONFIG.themes.length;
      const nextTheme = THEME_CONFIG.themes[currentThemeIndex];
      applyTheme(nextTheme);
    });
  }


  /* =========================================================================
   * FEATURE 5: INTERACTIVE PROJECT CATEGORY FILTERING (USP 9)
   * Syllabus: 6.5 (Array.from, .filter, .forEach), 6.8 (DOM Event Delegation)
   * ========================================================================= */
  const filterButtons = document.querySelectorAll('.project-filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterButtons.length > 0 && projectCards.length > 0) {
    filterButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        // Module 6.8: Active button styling toggle
        filterButtons.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');

        const selectedFilter = btn.getAttribute('data-filter') || 'all';

        // Module 6.5: Convert NodeList to Array and filter
        const cardsArray = Array.from(projectCards);

        cardsArray.forEach(card => {
          const cardCategory = card.getAttribute('data-category') || '';
          
          // Module 6.4: Control flow to determine card visibility
          const shouldShow = (selectedFilter === 'all') || (cardCategory.indexOf(selectedFilter) !== -1);

          if (shouldShow) {
            card.style.display = '';
            card.style.opacity = '0';
            card.style.transform = 'translateY(12px)';
            
            // Subtle entrance animation using requestAnimationFrame
            requestAnimationFrame(() => {
              card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            });
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }


  /* =========================================================================
   * FEATURE 6: INTERACTIVE 3D CARD HOVER TILT WITH SPECULAR SHEEN
   * Syllabus: 6.3 (Coordinate Arithmetic & Percentages), 6.8 (Mouse Events)
   * ========================================================================= */
  const interactiveCards = document.querySelectorAll('.project-card, .exp-card, .metric-card');

  interactiveCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      // Module 6.3: Calculate cursor position relative to card center (-1 to 1)
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -6; // Max 6deg tilt
      const rotateY = ((x - centerX) / centerX) * 6;

      // Module 6.3: Template literal for 3D transform matrix
      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      // Smooth reset back to baseline
      card.style.transform = '';
    });
  });


  /* =========================================================================
   * FEATURE 7: ONE-CLICK EMAIL CLIPBOARD COPY WITH ACCESSIBLE TOAST FEEDBACK
   * Syllabus: 6.3 (Strings), 6.6 (Objects), 6.8 (Async Clipboard API & DOM)
   * ========================================================================= */
  const copyEmailBtns = document.querySelectorAll('.copy-email-btn');

  copyEmailBtns.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const emailToCopy = btn.getAttribute('data-email') || 'jaydeepak2532006@gmail.com';
      
      try {
        await navigator.clipboard.writeText(emailToCopy);
        
        // Visual feedback on button
        const originalText = btn.innerHTML;
        btn.innerHTML = '<span>✓</span> Copied to Clipboard!';
        btn.classList.add('copy-success');

        // Module 6.8: Asynchronous timer reset with setTimeout
        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.classList.remove('copy-success');
        }, 2200);
      } catch (err) {
        // Fallback for non-secure contexts
        prompt('Copy email manually:', emailToCopy);
      }
    });
  });


  /* =========================================================================
   * FEATURE 8: ACCESSIBLE CONTACT FORM VALIDATION & CLIENT FEEDBACK
   * Syllabus: 6.3 (String regex & trim), 6.4 (if/else), 6.6 (Error object)
   * ========================================================================= */
  const contactForm = document.getElementById('contact-form') || document.querySelector('.contact-card form');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      const nameInput = document.getElementById('c-name');
      const emailInput = document.getElementById('c-email');
      const messageInput = document.getElementById('c-message');

      // Module 6.6: Object to hold validation errors
      const errors = {};

      // Module 6.3: String trimming and length evaluation
      if (!nameInput || nameInput.value.trim().length < 2) {
        errors.name = 'Please provide your full name (minimum 2 characters).';
      }

      // Module 6.3: Regular Expression pattern matching for email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput || !emailRegex.test(emailInput.value.trim())) {
        errors.email = 'Please provide a valid corporate or academic email address.';
      }

      if (!messageInput || messageInput.value.trim().length < 10) {
        errors.message = 'Please provide a brief message of at least 10 characters.';
      }

      // Module 6.5: Object.keys() to evaluate error count
      const errorKeys = Object.keys(errors);

      if (errorKeys.length > 0) {
        e.preventDefault(); // Stop form submission
        
        // Show validation alert
        let errorMsg = 'Please correct the following fields:\n';
        // Module 6.7: for...of loop over error messages
        for (const key of errorKeys) {
          errorMsg += `• ${errors[key]}\n`;
        }
        alert(errorMsg);
      } else {
        // Valid submission feedback
        console.info('Contact Form validated successfully. Dispatching submission.');
      }
    });
  }


  /* =========================================================================
   * FEATURE 9: MOBILE HAMBURGER NAVIGATION TOGGLE
   * Syllabus: 6.8 (DOM Event Listener & ARIA accessibility)
   * ========================================================================= */
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('primary-navigation');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      
      if (navMenu.classList.contains('nav-menu-open')) {
        navMenu.classList.remove('nav-menu-open');
      } else {
        navMenu.classList.add('nav-menu-open');
      }
    });

    // Close menu when clicking outside or clicking any nav link
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('nav-menu-open');
      });
    });
  }

  console.log('Jay Parmar Portfolio JavaScript engine initialized — Module 6 curriculum active.');
});

