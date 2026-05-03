/* ========================================
   MODERN PORTFOLIO - JAVASCRIPT
   ======================================== */

// ========== SMOOTH SCROLL FUNCTION ==========
/**
 * Smooth scroll to a section when clicking nav links or buttons
 * @param {string} target - The selector of the target element
 */
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        // Close mobile menu if open
        closeMenu();
    }
}

// ========== MOBILE MENU TOGGLE ==========
/**
 * Initialize hamburger menu and toggle functionality
 */
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Animate hamburger
            hamburger.style.transform = navLinks.classList.contains('active') 
                ? 'rotate(90deg)' 
                : 'rotate(0deg)';
        });

        // Close menu when a link is clicked
        const links = navLinks.querySelectorAll('.nav-link');
        links.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }
}

/**
 * Close the mobile menu
 */
function closeMenu() {
    const navLinks = document.getElementById('navLinks');
    const hamburger = document.getElementById('hamburger');
    if (navLinks) {
        navLinks.classList.remove('active');
        if (hamburger) {
            hamburger.style.transform = 'rotate(0deg)';
        }
    }
}

// ========== SCROLL ANIMATIONS ==========
/**
 * Animate elements when they come into view
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideUp 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements that should animate on scroll
    const animateElements = document.querySelectorAll(
        '.highlight-card, .skill-badge, .project-card, .education-card, .contact-card'
    );

    animateElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.animationDelay = `${index * 0.05}s`;
        observer.observe(element);
    });
}

// ========== FORM HANDLING ==========
/**
 * Handle contact form submission
 */
function initContactForm() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Validate form
            if (!name || !email || !message) {
                showNotification('Please fill in all fields!', 'error');
                return;
            }

            // Validate email
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address!', 'error');
                return;
            }

            // Show success message
            showNotification(
                `Thank you, ${name}! I'll get back to you soon.`,
                'success'
            );

            // Reset form
            contactForm.reset();

            // In a real application, you would send this data to a backend server
            console.log('Form Data:', { name, email, message });
        });
    }
}

/**
 * Validate email address
 * @param {string} email - The email to validate
 * @returns {boolean} - True if email is valid
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Show a notification message
 * @param {string} message - The message to display
 * @param {string} type - The type of notification ('success' or 'error')
 */
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 2rem;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease;
        font-weight: 600;
        max-width: 400px;
    `;

    notification.textContent = message;
    document.body.appendChild(notification);

    // Remove notification after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 4000);
}

// ========== ACTIVE NAV LINK ==========
/**
 * Update active nav link based on scroll position
 */
function initActiveNavLink() {
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';

        // Get current section
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        // Update active link
        navLinks.forEach(link => {
            link.style.color = '';
            if (link.getAttribute('href') === `#${current}`) {
                link.style.color = 'var(--primary-color)';
            }
        });
    });
}

// ========== NAVBAR SCROLL EFFECT ==========
/**
 * Add shadow effect to navbar on scroll
 */
function initNavbarScrollEffect() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (scrollY > 50) {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
        }
    });
}

// ========== SKILL BADGE INTERACTION ==========
/**
 * Add interactive effects to skill badges
 */
function initSkillBadges() {
    const skillBadges = document.querySelectorAll('.skill-badge');

    skillBadges.forEach(badge => {
        badge.addEventListener('mouseenter', () => {
            badge.style.transform = 'translateY(-3px) scale(1.05)';
        });

        badge.addEventListener('mouseleave', () => {
            badge.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// ========== PROJECT CARD INTERACTION ==========
/**
 * Add interactive effects to project cards
 */
function initProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
}

// ========== BUTTON CLICK EFFECTS ==========
/**
 * Add ripple effect to buttons
 */
function initButtonEffects() {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                background: rgba(255, 255, 255, 0.5);
                border-radius: 50%;
                left: ${x}px;
                top: ${y}px;
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;

            // Make button position relative
            if (getComputedStyle(this).position === 'static') {
                this.style.position = 'relative';
            }

            this.appendChild(ripple);

            // Remove ripple after animation
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// ========== ADD RIPPLE ANIMATION ==========
/**
 * Add ripple animation to stylesheet
 */
function addRippleAnimation() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// ========== PAGE LOAD ANIMATIONS ==========
/**
 * Initialize all animations when page loads
 */
function initPageLoadAnimations() {
    // Fade in hero section
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.style.animation = 'fadeInUp 0.8s ease';
    }

    // Fade in navbar
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.style.animation = 'fadeInDown 0.6s ease';
    }
}

/**
 * Add fade in down animation
 */
function addFadeInDownAnimation() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInDown {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
}

// ========== COUNTER ANIMATION ==========
/**
 * Animate counters for stats (if added)
 */
function animateCounters() {
    const counters = document.querySelectorAll('[data-count]');

    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        let current = 0;
        const increment = target / 30;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };

        updateCounter();
    });
}

// ========== SCROLL TO TOP BUTTON ==========
/**
 * Add scroll to top button functionality
 */
function initScrollToTop() {
    // Create scroll to top button
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '↑';
    scrollTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: linear-gradient(135deg, #6366f1, #8b5cf6);
        color: white;
        border: none;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        font-size: 1.5rem;
        cursor: pointer;
        display: none;
        z-index: 999;
        box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
        transition: all 0.3s ease;
        animation: slideUp 0.3s ease;
    `;

    document.body.appendChild(scrollTopBtn);

    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });

    // Scroll to top on click
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Hover effects
    scrollTopBtn.addEventListener('mouseenter', () => {
        scrollTopBtn.style.transform = 'translateY(-5px)';
        scrollTopBtn.style.boxShadow = '0 6px 20px rgba(99, 102, 241, 0.4)';
    });

    scrollTopBtn.addEventListener('mouseleave', () => {
        scrollTopBtn.style.transform = 'translateY(0)';
        scrollTopBtn.style.boxShadow = '0 4px 15px rgba(99, 102, 241, 0.3)';
    });
}

// ========== THEME TOGGLE (Optional) ==========
/**
 * Toggle between light and dark themes (optional feature)
 */
function initThemeToggle() {
    // Check for saved theme preference
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);

    // Create theme toggle button (optional)
    // Uncomment below to add a theme toggle button
    /*
    const themeBtn = document.createElement('button');
    themeBtn.innerHTML = '🌙';
    themeBtn.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: white;
        border: 2px solid #6366f1;
        color: #6366f1;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        cursor: pointer;
        font-size: 1.2rem;
        z-index: 998;
    `;

    themeBtn.addEventListener('click', () => {
        const theme = document.documentElement.getAttribute('data-theme');
        const newTheme = theme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        themeBtn.innerHTML = newTheme === 'light' ? '🌙' : '☀️';
    });

    document.body.appendChild(themeBtn);
    */
}

// ========== INITIALIZATION ==========
/**
 * Initialize all functions when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', () => {
    console.log('Initializing Portfolio...');

    // Add animations to stylesheet
    addRippleAnimation();
    addFadeInDownAnimation();

    // Initialize all features
    initMobileMenu();
    initScrollAnimations();
    initContactForm();
    initActiveNavLink();
    initNavbarScrollEffect();
    initSkillBadges();
    initProjectCards();
    initButtonEffects();
    initPageLoadAnimations();
    initScrollToTop();
    initThemeToggle();

    console.log('Portfolio initialized successfully!');
});

// ========== WINDOW LOAD EVENT ==========
/**
 * Run additional initialization after all resources are loaded
 */
window.addEventListener('load', () => {
    // Animate counters if any exist
    animateCounters();
});

// ========== KEYBOARD SHORTCUTS ==========
/**
 * Add keyboard shortcuts for navigation
 */
document.addEventListener('keydown', (e) => {
    // Press 'H' to go to home
    if (e.key === 'h' || e.key === 'H') {
        smoothScroll('#home');
    }
    // Press 'C' to go to contact
    if (e.key === 'c' || e.key === 'C') {
        smoothScroll('#contact');
    }
    // Press 'Escape' to close mobile menu
    if (e.key === 'Escape') {
        closeMenu();
    }
});

// ========== UTILITY FUNCTIONS ==========
/**
 * Get element by ID
 * @param {string} id - The ID of the element
 * @returns {Element} - The element
 */
function getById(id) {
    return document.getElementById(id);
}

/**
 * Get elements by class name
 * @param {string} className - The class name
 * @returns {NodeList} - List of elements
 */
function getByClass(className) {
    return document.querySelectorAll(`.${className}`);
}

/**
 * Add event listener to multiple elements
 * @param {NodeList} elements - List of elements
 * @param {string} event - The event type
 * @param {Function} callback - The callback function
 */
function addEventToAll(elements, event, callback) {
    elements.forEach(element => {
        element.addEventListener(event, callback);
    });
}

// ========== PERFORMANCE OPTIMIZATION ==========
/**
 * Throttle function for scroll events
 * @param {Function} func - The function to throttle
 * @param {number} wait - The wait time in milliseconds
 * @returns {Function} - The throttled function
 */
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Log portfolio information
 */
console.log('%c Welcome to Ankita\'s Portfolio!', 
    'color: #6366f1; font-size: 16px; font-weight: bold;');
console.log('%c Built with HTML, CSS, and Vanilla JavaScript', 
    'color: #8b5cf6; font-size: 12px;');
console.log('%c Contact: samantasingharankita3@gmail.com', 
    'color: #ec4899; font-size: 12px;');