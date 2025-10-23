// ==================== NAVIGATION & MOBILE MENU ====================
const navbar = document.getElementById('navbar');
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('nav ul li a');

// Mobile menu toggle
mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileToggle.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileToggle.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        if (targetId.startsWith('#')) {
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
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

// ==================== COUNTER ANIMATION ====================
const counters = document.querySelectorAll('.count');
let counterAnimated = false;

const animateCounters = () => {
    if (counterAnimated) return;

    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); 
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };

        updateCounter();
    });

    counterAnimated = true;
};

const statsSection = document.querySelector('.stats');
const observerOptions = {
    threshold: 0.5
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
        }
    });
}, observerOptions);

if (statsSection) {
    statsObserver.observe(statsSection);
}

// ==================== PORTFOLIO FILTER ====================
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioCards = document.querySelectorAll('.portfolio-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        portfolioCards.forEach(card => {
            card.style.display = 'none';
            card.style.opacity = '0';
            card.style.transform = 'scale(0.8)';

            setTimeout(() => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                }
            }, 300);
        });
    });
});

// ==================== RESUME TABS ====================
const tabs = document.querySelectorAll('.tab');
const resumeContent = document.getElementById('resumeContent');

const resumeData = {
    education: [
        {
            year: '2008',
            title: 'Education Quality',
            subtitle: 'Personal Portfolio April Fools - (2008 - 2010)',
            description: 'The education should be very interactual. It should be very interesting. If education could be like entertainment then it would be great.'
        },
        {
            year: '2023',
            title: 'BSIT - Bachelor of Science in Information Technology',
            subtitle: 'Cor Jesu College - (2023 - 2027)',
            description: 'Graduated with honors. Focused on web development, software engineering, and database management systems.'
        },
        {
            year: '2015',
            title: 'Master of Computer Applications',
            subtitle: 'Tech Institute - (2015 - 2017)',
            description: 'Advanced studies in full-stack development, cloud computing, and modern web technologies.'
        },
        {
            year: '2018',
            title: 'Certification in UI/UX Design',
            subtitle: 'Design Academy - (2018)',
            description: 'Specialized training in user interface design, user experience principles, and modern design tools.'
        }
    ],
    skills: [
        {
            year: '95%',
            title: 'Web Development',
            subtitle: 'HTML, CSS, JavaScript, PHP',
            description: 'Expert in building responsive, modern websites with clean code and best practices. Proficient in both frontend and backend development.'
        },
        {
            year: '90%',
            title: 'React & Vue.js',
            subtitle: 'Modern JavaScript Frameworks',
            description: 'Advanced knowledge of component-based architecture, state management, and building scalable single-page applications.'
        },
        {
            year: '85%',
            title: 'UI/UX Design',
            subtitle: 'Figma, Adobe XD, Photoshop',
            description: 'Creating intuitive user interfaces with focus on user experience, accessibility, and visual appeal.'
        },
        {
            year: '88%',
            title: 'Database Management',
            subtitle: 'MySQL, MongoDB, PostgreSQL',
            description: 'Designing and optimizing database schemas, writing complex queries, and ensuring data integrity.'
        }
    ],
    experience: [
        {
            year: '2015',
            title: 'Job Experience',
            subtitle: 'Diploma in Web Development - (Aug 2012 - Dec 2014)',
            description: "Company's vision to make useful, If it could make learning a viable alternative to students who want to learn more about web development and make it part of their lifestyle."
        },
        {
            year: '2017',
            title: 'Senior Web Developer',
            subtitle: 'Tech Solutions Inc. - (2017 - 2019)',
            description: 'Led a team of 5 developers in creating enterprise-level web applications. Implemented modern development practices and improved code quality.'
        },
        {
            year: '2020',
            title: 'Full Stack Developer',
            subtitle: 'Digital Agency - (2020 - 2022)',
            description: 'Developed custom web solutions for clients across various industries. Specialized in e-commerce platforms and content management systems.'
        },
        {
            year: '2023',
            title: 'Freelance Developer & Consultant',
            subtitle: 'Self-Employed - (2023 - Present)',
            description: 'Providing web development services and technical consulting to businesses. Building custom solutions tailored to client needs.'
        }
    ],
    interview: [
        {
            year: '2018',
            title: 'Examples of Personal Portfolio',
            subtitle: 'BSc In CSE - (2006 - 2010)',
            description: 'The education should be very interactual. It should be very interesting. If education could be like entertainment then it would be great.'
        },
        {
            year: '2019',
            title: 'Technical Interview Success',
            subtitle: 'Top Tech Company - March 2019',
            description: 'Successfully completed a rigorous technical interview process, demonstrating strong problem-solving skills and deep knowledge of web technologies.'
        },
        {
            year: '2021',
            title: 'The Personal Portfolio Mystery',
            subtitle: 'Job Experience - August 2008',
            description: 'The education should be very interactual. It should be very interesting. If education could be like entertainment then it would be great.'
        },
        {
            year: '2024',
            title: 'Industry Expert Panel',
            subtitle: 'Web Development Conference - 2024',
            description: 'Invited as a panelist to discuss the future of web development and share insights on building modern, scalable applications.'
        }
    ]
};

const renderResumeContent = (category) => {
    const data = resumeData[category];
    resumeContent.innerHTML = '';

    data.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'resume-card';
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';

        card.innerHTML = `
            <span class="resume-year">${item.year}</span>
            <h3>${item.title}</h3>
            <p class="date">${item.subtitle}</p>
            <p>${item.description}</p>
        `;

        resumeContent.appendChild(card);

        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
};

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const category = tab.getAttribute('data-tab');
        renderResumeContent(category);
    });
});

// ==================== CONTACT FORM ====================
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    // Validate form
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        showFormMessage('Please fill in all fields', 'error');
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        showFormMessage('Please enter a valid email address', 'error');
        return;
    }

    // Simulate form submission
    showFormMessage('Sending message...', 'success');

    setTimeout(() => {
        showFormMessage('Thank you! Your message has been sent successfully.', 'success');
        contactForm.reset();

        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }, 1500);
});

// Function to show form message
const showFormMessage = (message, type) => {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';
};

// ==================== LOGOUT MODAL ====================
const logoutModal = document.getElementById('logoutModal');

// Open logout modal
function openLogoutModal(event) {
    event.preventDefault();
    logoutModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close logout modal
function closeLogoutModal() {
    logoutModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Confirm logout
function confirmLogout() {
    // Redirect to logout page
    window.location.href = 'logout.php';
}

// Close modal when clicking outside
logoutModal.addEventListener('click', (e) => {
    if (e.target === logoutModal) {
        closeLogoutModal();
    }
});

// Close modal with ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && logoutModal.classList.contains('active')) {
        closeLogoutModal();
    }
});

// ==================== BACK TO TOP BUTTON ====================
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ==================== SCROLL ANIMATIONS ====================
const observeElements = document.querySelectorAll('.service-card, .portfolio-card, .resume-card, .testimonial-card');

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

observeElements.forEach(element => {
    scrollObserver.observe(element);
});

// ==================== TYPING EFFECT (Optional Enhancement) ====================
const heroTitle = document.querySelector('.hero h2');
if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    let index = 0;

    const typeWriter = () => {
        if (index < text.length) {
            heroTitle.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        }
    };

    setTimeout(typeWriter, 500);
}

// ==================== PARTICLE BACKGROUND (Optional) ====================
const createParticles = () => {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 5 + 2}px;
            height: ${Math.random() * 5 + 2}px;
            background: rgba(233, 30, 99, 0.3);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 10 + 5}s infinite ease-in-out;
            z-index: 0;
        `;
        hero.style.position = 'relative';
        hero.appendChild(particle);
    }
};

const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% { transform: translateY(0) translateX(0); }
        25% { transform: translateY(-20px) translateX(10px); }
        50% { transform: translateY(-40px) translateX(-10px); }
        75% { transform: translateY(-20px) translateX(5px); }
    }
`;
document.head.appendChild(style);

createParticles();

// ==================== INITIALIZE PAGE ====================
document.addEventListener('DOMContentLoaded', () => {
    console.log('Dashboard loaded successfully!');

    renderResumeContent('education');

    const allSections = document.querySelectorAll('section');
    allSections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        setTimeout(() => {
            section.style.transition = 'all 0.8s ease';
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// ==================== PRELOADER (Optional) ====================
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }, 1000);
    }
});

// ==================== PORTFOLIO LIGHTBOX ====================
const portfolioImages = document.querySelectorAll('.portfolio-card');
let currentImageIndex = 0;
let portfolioImagesArray = [];

// Create lightbox modal
const createLightbox = () => {
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.style.cssText = `
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.95);
        z-index: 10000;
        justify-content: center;
        align-items: center;
    `;

    lightbox.innerHTML = `
        <button id="closeLightbox" style="position: absolute; top: 20px; right: 20px; background: #e91e63; color: white; border: none; width: 50px; height: 50px; border-radius: 50%; font-size: 24px; cursor: pointer; z-index: 10001;">×</button>
        <button id="prevImage" style="position: absolute; left: 20px; top: 50%; transform: translateY(-50%); background: #e91e63; color: white; border: none; width: 50px; height: 50px; border-radius: 50%; font-size: 24px; cursor: pointer; z-index: 10001;">‹</button>
        <button id="nextImage" style="position: absolute; right: 20px; top: 50%; transform: translateY(-50%); background: #e91e63; color: white; border: none; width: 50px; height: 50px; border-radius: 50%; font-size: 24px; cursor: pointer; z-index: 10001;">›</button>
        <div id="lightboxContent" style="max-width: 90%; max-height: 90%; text-align: center;">
            <img id="lightboxImage" style="max-width: 100%; max-height: 80vh; border-radius: 10px;">
            <div id="lightboxInfo" style="color: white; margin-top: 20px;">
                <h3 id="lightboxTitle" style="font-size: 24px; margin-bottom: 10px;"></h3>
                <p id="lightboxCategory" style="color: #e91e63; text-transform: uppercase;"></p>
            </div>
        </div>
    `;

    document.body.appendChild(lightbox);

    document.getElementById('closeLightbox').addEventListener('click', closeLightbox);
    document.getElementById('prevImage').addEventListener('click', showPrevImage);
    document.getElementById('nextImage').addEventListener('click', showNextImage);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });
};

portfolioImages.forEach((card, index) => {
    portfolioImagesArray.push({
        src: card.querySelector('img').src,
        title: card.querySelector('h3').textContent,
        category: card.querySelector('.portfolio-category').textContent
    });

    card.addEventListener('click', () => {
        currentImageIndex = index;
        openLightbox();
    });
});

const openLightbox = () => {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) createLightbox();

    const currentImage = portfolioImagesArray[currentImageIndex];
    document.getElementById('lightboxImage').src = currentImage.src;
    document.getElementById('lightboxTitle').textContent = currentImage.title;
    document.getElementById('lightboxCategory').textContent = currentImage.category;

    document.getElementById('lightbox').style.display = 'flex';
    document.body.style.overflow = 'hidden';
};

const closeLightbox = () => {
    document.getElementById('lightbox').style.display = 'none';
    document.body.style.overflow = 'auto';
};

const showPrevImage = () => {
    currentImageIndex = (currentImageIndex - 1 + portfolioImagesArray.length) % portfolioImagesArray.length;
    const currentImage = portfolioImagesArray[currentImageIndex];
    document.getElementById('lightboxImage').src = currentImage.src;
    document.getElementById('lightboxTitle').textContent = currentImage.title;
    document.getElementById('lightboxCategory').textContent = currentImage.category;
};

const showNextImage = () => {
    currentImageIndex = (currentImageIndex + 1) % portfolioImagesArray.length;
    const currentImage = portfolioImagesArray[currentImageIndex];
    document.getElementById('lightboxImage').src = currentImage.src;
    document.getElementById('lightboxTitle').textContent = currentImage.title;
    document.getElementById('lightboxCategory').textContent = currentImage.category;
};

// Keyboard navigation for lightbox
document.addEventListener('keydown', (e) => {
    const lightbox = document.getElementById('lightbox');
    if (lightbox && lightbox.style.display === 'flex') {
        if (e.key === 'ArrowLeft') showPrevImage();
        if (e.key === 'ArrowRight') showNextImage();
        if (e.key === 'Escape') closeLightbox();
    }
});

// ==================== SEARCH FUNCTIONALITY ====================
const createSearchBar = () => {
    const nav = document.querySelector('nav');
    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container';
    searchContainer.style.cssText = `
        position: relative;
        display: none;
    `;

    searchContainer.innerHTML = `
        <input type="text" id="searchInput" placeholder="Search portfolio..." style="
            padding: 10px 40px 10px 15px;
            border: 2px solid #f0f0f0;
            border-radius: 25px;
            font-size: 14px;
            width: 250px;
            transition: all 0.3s;
        ">
        <i class="fas fa-search" style="
            position: absolute;
            right: 15px;
            top: 50%;
            transform: translateY(-50%);
            color: #666;
        "></i>
    `;

    nav.querySelector('.nav-buttons').insertAdjacentElement('beforebegin', searchContainer);

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        portfolioCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const category = card.querySelector('.portfolio-category').textContent.toLowerCase();

            if (title.includes(searchTerm) || category.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
};

// ==================== SKILL PROGRESS BARS ====================
const createSkillBars = () => {
    const skillsData = [
        { name: 'HTML/CSS', percentage: 95 },
        { name: 'JavaScript', percentage: 90 },
        { name: 'PHP', percentage: 85 },
        { name: 'React/Vue', percentage: 88 },
        { name: 'UI/UX Design', percentage: 82 },
        { name: 'Database', percentage: 87 }
    ];

    const skillsSection = document.createElement('div');
    skillsSection.className = 'skills-section';
    skillsSection.style.cssText = `
        margin-top: 40px;
        padding: 40px;
        background: #fff;
        border-radius: 15px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.08);
    `;

    let skillsHTML = '<h3 style="margin-bottom: 30px; font-size: 24px;">Technical Skills</h3>';

    skillsData.forEach(skill => {
        skillsHTML += `
            <div style="margin-bottom: 25px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                    <span style="font-weight: 500;">${skill.name}</span>
                    <span style="color: #e91e63; font-weight: 600;">${skill.percentage}%</span>
                </div>
                <div style="width: 100%; height: 10px; background: #f0f0f0; border-radius: 5px; overflow: hidden;">
                    <div class="skill-bar" data-percentage="${skill.percentage}" style="
                        width: 0%;
                        height: 100%;
                        background: linear-gradient(90deg, #e91e63, #9c27b0);
                        border-radius: 5px;
                        transition: width 1.5s ease;
                    "></div>
                </div>
            </div>
        `;
    });

    skillsSection.innerHTML = skillsHTML;

    const servicesSection = document.querySelector('.services');
    if (servicesSection) {
        servicesSection.appendChild(skillsSection);

        const skillBars = skillsSection.querySelectorAll('.skill-bar');
        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    skillBars.forEach((bar, index) => {
                        setTimeout(() => {
                            bar.style.width = bar.getAttribute('data-percentage') + '%';
                        }, index * 200);
                    });
                    skillObserver.disconnect();
                }
            });
        }, { threshold: 0.5 });

        skillObserver.observe(skillsSection);
    }
};

// ==================== TESTIMONIAL SLIDER ====================
let currentTestimonial = 0;
const testimonialCards = document.querySelectorAll('.testimonial-card');

const createTestimonialSlider = () => {
    if (testimonialCards.length === 0) return;

    const testimonialGrid = document.querySelector('.testimonial-grid');
    testimonialGrid.style.position = 'relative';

    const controls = document.createElement('div');
    controls.className = 'testimonial-controls';
    controls.style.cssText = `
        display: flex;
        justify-content: center;
        gap: 10px;
        margin-top: 30px;
    `;

    testimonialCards.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.className = `testimonial-dot ${index === 0 ? 'active' : ''}`;
        dot.style.cssText = `
            width: 12px;
            height: 12px;
            border-radius: 50%;
            border: 2px solid #e91e63;
            background: ${index === 0 ? '#e91e63' : 'transparent'};
            cursor: pointer;
            transition: all 0.3s;
        `;
        dot.addEventListener('click', () => goToTestimonial(index));
        controls.appendChild(dot);
    });

    testimonialGrid.parentElement.appendChild(controls);
};

const goToTestimonial = (index) => {
    currentTestimonial = index;
    const dots = document.querySelectorAll('.testimonial-dot');
    dots.forEach((dot, i) => {
        dot.style.background = i === index ? '#e91e63' : 'transparent';
    });
};

setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
    goToTestimonial(currentTestimonial);
}, 5000);

// ==================== DARK MODE TOGGLE ====================
const createDarkModeToggle = () => {
    const toggle = document.createElement('button');
    toggle.id = 'darkModeToggle';
    toggle.innerHTML = '<i class="fas fa-moon"></i>';
    toggle.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: #333;
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 20px;
        cursor: pointer;
        z-index: 998;
        transition: all 0.3s;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    `;

    document.body.appendChild(toggle);

    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        toggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        toggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
};

// ==================== SCROLL PROGRESS BAR ====================
const createScrollProgress = () => {
    const progressBar = document.createElement('div');
    progressBar.id = 'scrollProgress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 4px;
        background: linear-gradient(90deg, #e91e63, #9c27b0);
        z-index: 9999;
        transition: width 0.1s;
    `;

    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
};

// ==================== TOOLTIP SYSTEM ====================
const createTooltips = () => {
    const tooltip = document.createElement('div');
    tooltip.id = 'customTooltip';
    tooltip.style.cssText = `
        position: absolute;
        background: #333;
        color: white;
        padding: 8px 12px;
        border-radius: 5px;
        font-size: 12px;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.3s;
        z-index: 10000;
        white-space: nowrap;
    `;
    document.body.appendChild(tooltip);

    const elementsWithTooltips = document.querySelectorAll('[data-tooltip]');
    elementsWithTooltips.forEach(element => {
        element.addEventListener('mouseenter', (e) => {
            tooltip.textContent = element.getAttribute('data-tooltip');
            tooltip.style.opacity = '1';
        });

        element.addEventListener('mousemove', (e) => {
            tooltip.style.left = e.pageX + 10 + 'px';
            tooltip.style.top = e.pageY + 10 + 'px';
        });

        element.addEventListener('mouseleave', () => {
            tooltip.style.opacity = '0';
        });
    });
};

// ==================== NOTIFICATION SYSTEM ====================
const showNotification = (message, type = 'info') => {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4caf50' : type === 'error' ? '#f44336' : '#2196f3'};
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
    `;
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
};

const animStyle = document.createElement('style');
animStyle.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(400px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(400px); opacity: 0; }
    }
    
    /* Dark Mode Styles */
    .dark-mode {
        background: #1a1a1a !important;
        color: #e0e0e0 !important;
    }
    
    /* Navigation */
    .dark-mode nav {
        background: #2a2a2a !important;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3) !important;
    }
    .dark-mode nav a {
        color: #e0e0e0 !important;
    }
    .dark-mode nav a:hover {
        color: #e91e63 !important;
    }
    .dark-mode .mobile-toggle span {
        background: #e0e0e0 !important;
    }
    
    /* Hero Section */
    .dark-mode .hero {
        background: #1a1a1a !important;
    }
    .dark-mode .hero-content {
        color: #e0e0e0 !important;
    }
    .dark-mode .hero h1,
    .dark-mode .hero h2 {
        color: #e0e0e0 !important;
    }
    .dark-mode .hero h1 .name {
        color: #e91e63 !important;
    }
    .dark-mode .hero h2 {
        color: #e91e63 !important;
    }
    .dark-mode .hero p,
    .dark-mode .hero-subtitle {
        color: #b0b0b0 !important;
    }
    .dark-mode .stat-box {
        background: #2a2a2a !important;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3) !important;
    }
    .dark-mode .stat-box h3 {
        color: #e0e0e0 !important;
    }
    .dark-mode .stat-box p {
        color: #b0b0b0 !important;
    }
    
    /* Services Section */
    .dark-mode .services {
        background: #1a1a1a !important;
    }
    .dark-mode .service-card {
        background: #2a2a2a !important;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3) !important;
    }
    .dark-mode .service-card h3 {
        color: #e0e0e0 !important;
    }
    .dark-mode .service-card p {
        color: #b0b0b0 !important;
    }
    .dark-mode .service-icon {
        background: rgba(233, 30, 99, 0.1) !important;
        color: #e91e63 !important;
    }
    
    /* Section Titles */
    .dark-mode .section-title h2 {
        color: #e0e0e0 !important;
    }
    .dark-mode .section-subtitle {
        color: #e91e63 !important;
    }
    
    /* Portfolio Section */
    .dark-mode .portfolio {
        background: #1f1f1f !important;
    }
    .dark-mode .portfolio-card {
        background: #2a2a2a !important;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3) !important;
    }
    .dark-mode .portfolio-card h3 {
        color: #e0e0e0 !important;
    }
    .dark-mode .portfolio-category {
        color: #e91e63 !important;
    }
    .dark-mode .filter-btn {
        background: #2a2a2a !important;
        color: #e0e0e0 !important;
        border-color: #3a3a3a !important;
    }
    .dark-mode .filter-btn:hover,
    .dark-mode .filter-btn.active {
        background: #e91e63 !important;
        color: #fff !important;
        border-color: #e91e63 !important;
    }
    
    /* Resume Section */
    .dark-mode .resume {
        background: #1a1a1a !important;
    }
    .dark-mode .resume-card {
        background: #2a2a2a !important;
    }
    .dark-mode .resume-card h3 {
        color: #e0e0e0 !important;
    }
    .dark-mode .resume-card p {
        color: #b0b0b0 !important;
    }
    .dark-mode .resume-card .date {
        color: #e91e63 !important;
    }
    .dark-mode .resume-year {
        color: #e91e63 !important;
    }
    .dark-mode .tab {
        background: #2a2a2a !important;
        color: #e0e0e0 !important;
    }
    .dark-mode .tab:hover,
    .dark-mode .tab.active {
        background: #e91e63 !important;
        color: #fff !important;
    }
    
    /* Testimonials Section */
    .dark-mode .testimonials {
        background: #1f1f1f !important;
    }
    .dark-mode .testimonial-card {
        background: #2a2a2a !important;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3) !important;
    }
    .dark-mode .testimonial-card h4 {
        color: #e0e0e0 !important;
    }
    .dark-mode .testimonial-card p,
    .dark-mode .testimonial-card .role {
        color: #b0b0b0 !important;
    }
    
    /* Contact Section */
    .dark-mode .contact {
        background: #1a1a1a !important;
    }
    .dark-mode .form-group label {
        color: #e0e0e0 !important;
    }
    .dark-mode .form-group input,
    .dark-mode .form-group textarea {
        background: #2a2a2a !important;
        color: #e0e0e0 !important;
        border-color: #3a3a3a !important;
    }
    .dark-mode .form-group input::placeholder,
    .dark-mode .form-group textarea::placeholder {
        color: #666 !important;
    }
    .dark-mode .form-group input:focus,
    .dark-mode .form-group textarea:focus {
        border-color: #e91e63 !important;
    }
    
    /* Footer */
    .dark-mode footer {
        background: #0a0a0a !important;
        color: #e0e0e0 !important;
    }
    
    /* Skills Section */
    .dark-mode .skills-section {
        background: #2a2a2a !important;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3) !important;
    }
    .dark-mode .skills-section h3 {
        color: #e0e0e0 !important;
    }
    .dark-mode .skills-section span {
        color: #e0e0e0 !important;
    }
    
    /* Modal */
    .dark-mode .modal-content {
        background: #2a2a2a !important;
    }
    .dark-mode .modal-content h3 {
        color: #e0e0e0 !important;
    }
    .dark-mode .modal-content p {
        color: #b0b0b0 !important;
    }
    .dark-mode .modal-btn-cancel {
        background: #3a3a3a !important;
        color: #e0e0e0 !important;
    }
    .dark-mode .modal-btn-cancel:hover {
        background: #4a4a4a !important;
    }
    
    /* Back to Top Button */
    .dark-mode .back-to-top {
        background: #e91e63 !important;
    }
    
    /* Dark Mode Toggle Button */
    .dark-mode #darkModeToggle {
        background: #e91e63 !important;
    }
    
    /* Smooth transitions for theme change */
    body,
    nav,
    .hero,
    .services,
    .portfolio,
    .resume,
    .testimonials,
    .contact,
    footer,
    .service-card,
    .portfolio-card,
    .resume-card,
    .testimonial-card,
    .stat-box,
    .tab,
    .filter-btn,
    .form-group input,
    .form-group textarea,
    .modal-content,
    .skills-section {
        transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease !important;
    }
`;
document.head.appendChild(animStyle);

// ==================== INITIALIZE ALL FEATURES ====================
const initializeAllFeatures = () => {
    createSkillBars();
    createTestimonialSlider();
    createDarkModeToggle();
    createScrollProgress();
    createTooltips();

    setTimeout(() => {
        showNotification('Welcome to my portfolio! ', 'success');
    }, 1000);
};

window.addEventListener('load', initializeAllFeatures);

console.log('All dynamic functions initialized!');