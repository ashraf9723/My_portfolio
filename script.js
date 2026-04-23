// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initSmoothScroll();
    initScrollAnimations();
    initSkillsChart();
    initProjectHover();
    initScrollIndicator();
});

// ============ Navigation ============
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Hamburger menu toggle
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Update active nav link on scroll
    window.addEventListener('scroll', () => {
        updateActiveNavLink();
    });

    // Set initial active link
    updateActiveNavLink();
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
}

// ============ Smooth Scrolling ============
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// ============ Scroll Animations ============
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = `fadeInUp 0.6s ease-out forwards`;
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.timeline-content, .project-card, .education-card, .cert-item').forEach(el => {
        observer.observe(el);
    });
}

// ============ Skills Chart ============
function initSkillsChart() {
    const chartCanvas = document.getElementById('skillsChart');
    if (!chartCanvas) return;

    const ctx = chartCanvas.getContext('2d');

    const chart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: [
                'Machine Learning',
                'Python',
                'Deep Learning',
                'Data Analysis',
                'NLP & LLM',
                'AWS',
                'Data Visualization',
                'SQL'
            ],
            datasets: [
                {
                    label: 'Proficiency Level',
                    data: [92, 95, 88, 90, 85, 80, 90, 85],
                    borderColor: '#0066ff',
                    backgroundColor: 'rgba(0, 102, 255, 0.15)',
                    borderWidth: 2,
                    pointBackgroundColor: '#00d9ff',
                    pointBorderColor: '#0066ff',
                    pointBorderWidth: 2,
                    pointRadius: 6,
                    pointHoverRadius: 8,
                    fill: true,
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    labels: {
                        color: '#a8b2d1',
                        font: {
                            size: 12,
                            weight: '600'
                        }
                    }
                }
            },
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    grid: {
                        color: 'rgba(45, 53, 97, 0.3)',
                        drawBorder: true
                    },
                    ticks: {
                        color: '#a8b2d1',
                        callback: function(value) {
                            return value;
                        }
                    },
                    pointLabels: {
                        color: '#a8b2d1',
                        font: {
                            size: 12,
                            weight: '500'
                        }
                    }
                }
            }
        }
    });

    // Animate chart on scroll
    const chartContainer = document.querySelector('.chart-container');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.animated) {
                // Trigger animation
                entry.target.dataset.animated = true;
                observer.unobserve(entry.target);
            }
        });
    });

    observer.observe(chartContainer);
}

// ============ Project Card Hover ============
function initProjectHover() {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.querySelector('.project-image').getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const overlay = card.querySelector('.project-overlay');
            overlay.style.setProperty('--mouse-x', `${x}px`);
            overlay.style.setProperty('--mouse-y', `${y}px`);
        });
    });
}

// ============ Scroll Indicator ============
function initScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.pointerEvents = 'none';
        } else {
            scrollIndicator.style.opacity = '1';
            scrollIndicator.style.pointerEvents = 'auto';
        }
    });
}

// ============ Parallax Effect ============
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const animatedBg = document.querySelector('.animated-bg');

    if (animatedBg) {
        animatedBg.style.transform = `translateY(${scrollY * 0.5}px)`;
    }

    const heroBefore = document.querySelector('.hero::before');
    if (heroBefore) {
        // Parallax effect is handled via CSS animation
    }
});

// ============ Keyboard Navigation ============
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const navMenu = document.querySelector('.nav-menu');
        const hamburger = document.querySelector('.hamburger');
        if (navMenu && hamburger) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    }
});

// ============ Progressive Enhancement ============
// Add classes to elements as they load
document.addEventListener('load', () => {
    const elements = document.querySelectorAll('img');
    elements.forEach(img => {
        img.addEventListener('load', function() {
            this.classList.add('loaded');
        });
    });
});

// ============ Responsive Hamburger Animation ============
const style = document.createElement('style');
style.textContent = `
    .hamburger.active span:nth-child(1) {
        transform: rotate(45deg) translate(10px, 10px);
    }

    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }

    .hamburger.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -7px);
    }
`;
document.head.appendChild(style);

// ============ Print Styles ============
const printStyle = document.createElement('style');
printStyle.textContent = `
    @media print {
        .navbar, .scroll-indicator, .btn {
            display: none;
        }

        body {
            background: white;
            color: black;
        }

        a {
            text-decoration: underline;
        }
    }
`;
document.head.appendChild(printStyle);

// ============ Dark Mode Toggle (Optional - for future enhancement) ============
// Uncomment if you want to add theme toggle functionality
/*
function initThemeToggle() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    
    if (prefersDark.matches) {
        document.documentElement.style.colorScheme = 'dark';
    } else {
        document.documentElement.style.colorScheme = 'light';
    }

    prefersDark.addEventListener('change', () => {
        if (prefersDark.matches) {
            document.documentElement.style.colorScheme = 'dark';
        } else {
            document.documentElement.style.colorScheme = 'light';
        }
    });
}
*/

// ============ Performance Optimization ============
// Debounce function for scroll events
function debounce(func, wait) {
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

// Throttle function for frequent events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ============ Lazy Loading Images (if added in future) ============
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }
}

// ============ Console Easter Egg ============
console.log('%c🚀 Welcome to MD Ashraf\'s Portfolio!', 'color: #0066ff; font-size: 20px; font-weight: bold;');
console.log('%cData Science | Machine Learning | AI', 'color: #00d9ff; font-size: 14px;');
console.log('%cFeel free to reach out: mdashraf9723@gmail.com', 'color: #a8b2d1; font-size: 12px;');
