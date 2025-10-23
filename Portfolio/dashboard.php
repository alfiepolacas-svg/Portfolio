<?php
session_start();

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lynard - Portfolio</title>
    <link rel="icon" type="image/svg" href="icon.svg">
    <link rel="stylesheet" href="dashboard.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>

<body>
    <!-- Navigation -->
    <nav id="navbar">
        <div class="logo">
            <div><img src="image.jpg" alt="image" style="width:50px; height: 50px; border-radius:100px;"></div>
        </div>
        <div class="mobile-toggle" id="mobileToggle">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul id="navMenu">
            <li><a href="#home">HOME</a></li>
            <li><a href="#features">FEATURES</a></li>
            <li><a href="#portfolio">PORTFOLIO</a></li>
            <li><a href="#resume">RESUME</a></li>
            <li><a href="#testimonials">CLIENTS</a></li>
            <li><a href="#contact">CONTACT</a></li>
        </ul>
        <div class="nav-buttons">
            <a href="#contact" class="hire-btn">BUY NOW</a>
            <a href="#" class="logout-btn" onclick="openLogoutModal(event)">LOGOUT</a>
        </div>

    </nav>

    <!-- Hero Section -->
    <section class="hero" id="home">
        <div class="hero-content">
            <p class="hero-subtitle">WELCOME TO MY WORLD</p>
            <h1>Hi, I'm <span class="name">Alfie Lynard S. Polacas</span></h1>
            <h2>a Professional Coder.</h2>

            <p>
               I am Alfie Lynard S. Polacas, 3rd year IT student in Cor jesu College, My passion is to create,
                animation as a third dimension by which to simplify experiences
                and guide users through each and every interaction. I'm not adding motion
                just to spruce things up, but doing it in meaningful ways that improve
                usability and storytelling.
            </p>

            <p>
                My goal is to build digital experiences that are not only visually
                appealing but also functional, accessible, and user-friendly.
                Every project I create is designed with attention to detail and
                a focus on delivering real value to the end-user.
            </p>

            <p>
                Beyond coding, I constantly explore new tools, frameworks, and
                design principles to stay ahead in the fast-changing tech world.
                I believe in continuous learning and applying innovative ideas
                to solve complex problems effectively.
            </p>

            <p>
                Whether it’s developing modern web applications, crafting engaging
                user interfaces, or optimizing backend systems, I strive to deliver
                solutions that make an impact.
            </p>

            <div class="stats">
                <div class="stat-box">
                    <div class="stat-icon"><i class="fas fa-phone"></i></div>
                    <h3 class="count" data-target="40">0</h3>
                    <p>CLIENTS</p>
                </div>
                <div class="stat-box">
                    <div class="stat-icon"><i class="fas fa-project-diagram"></i></div>
                    <h3 class="count" data-target="800">0</h3>
                    <p>PROJECTS</p>
                </div>
            </div>
        </div>
        <div class="hero-image">
            <div
                style="width: 400px; height: 500px; border-radius: 20px; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px;">
                <img src="image.jpg" alt="Profile" style="border-radius: 20px;">
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section class="services" id="features">
        <div class="section-title">
            <p class="section-subtitle">FEATURES</p>
            <h2>What I Do</h2>
        </div>
        <div class="services-grid">
            <div class="service-card">
                <div class="service-icon"><i class="fas fa-folder-open"></i></div>
                <h3>Business Strategy</h3>
                <p>I throw myself down among the tall grass by the stream as I lie close to the earth.</p>
            </div>
            <div class="service-card">
                <div class="service-icon"><i class="fas fa-laptop-code"></i></div>
                <h3>App Development</h3>
                <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence.</p>
            </div>
            <div class="service-card">
                <div class="service-icon"><i class="fa fa-code"></i></div>
                <h3>Mobile App</h3>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority.</p>
            </div>
            <div class="service-card">
                <div class="service-icon"><i class="fa fa-bar-chart"></i></div>
                <h3>CEO Marketing</h3>
                <p>Always free from repetition, injected humour, or non-characteristic words etc.</p>
            </div>
            <div class="service-card">
                <div class="service-icon"><i class="fas fa-coins"></i></div>
                <h3>Personal Portfolio April</h3>
                <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence.</p>
            </div>
        </div>
    </section>

    <!-- Portfolio Section -->
    <section class="portfolio" id="portfolio">
        <div class="section-title">
            <p class="section-subtitle">VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</p>
            <h2>My Portfolio</h2>
        </div>
        <div class="portfolio-filters">
            <button class="filter-btn active" data-filter="all">All</button>
            <button class="filter-btn" data-filter="development">Development</button>
            <button class="filter-btn" data-filter="application">Application</button>
            <button class="filter-btn" data-filter="design">Design</button>
        </div>
        <div class="portfolio-grid">
            <div class="portfolio-card" data-category="development">
                <div class="portfolio-img">
                    <img src="./download/Development.jpg" alt="Project">
                </div>
                <div class="portfolio-info">
                    <p class="portfolio-category">DEVELOPMENT</p>
                    <h3>The services provide for design</h3>
                </div>
            </div>
            <div class="portfolio-card" data-category="application">
                <div class="portfolio-img">
                    <img src="./download/Apps.jpg" alt="Project">
                </div>
                <div class="portfolio-info">
                    <p class="portfolio-category">APPLICATION</p>
                    <h3>Mobile app landing design & Services</h3>
                </div>
            </div>
            <div class="portfolio-card" data-category="design">
                <div class="portfolio-img">
                    <img src="./download/LogoDesign.jpg" alt="Project">
                </div>
                <div class="portfolio-info">
                    <p class="portfolio-category">PHOTOSHOP</p>
                    <h3>Logo design creativity & Application</h3>
                </div>
            </div>
            <div class="portfolio-card" data-category="development">
                <div class="portfolio-img">
                    <img src="./download/Cloud.jpg" alt="Project">
                </div>
                <div class="portfolio-info">
                    <p class="portfolio-category">Cloud Computing</p>
                    <h3>The services provide for design</h3>
                </div>
            </div>
            <div class="portfolio-card" data-category="design">
                <div class="portfolio-img">
                    <img src="./download/Figma.jpg" alt="Project">
                </div>
                <div class="portfolio-info">
                    <p class="portfolio-category">FIGMA</p>
                    <h3>Mobile app landing design & Services</h3>
                </div>
            </div>
            <div class="portfolio-card" data-category="design">
                <div class="portfolio-img">
                    <img src="./download/Webdesign.jpg" alt="Project">
                </div>
                <div class="portfolio-info">
                    <p class="portfolio-category">WEB DESIGN</p>
                    <h3>Design for tecnology & services</h3>
                </div>
            </div>
            <div class="portfolio-card" data-category="application">
                <div class="portfolio-img">
                    <img src="./download/AndroidApp.jpg" alt="Project">
                </div>
                <div class="portfolio-info">
                    <p class="portfolio-category">ANDROID APP</p>
                    <h3>App for tecnology & services</h3>
                </div>
            </div>
        </div>
    </section>

    <!-- Resume Section -->
    <section class="resume" id="resume">
        <div class="section-title">
            <p class="section-subtitle">7+ YEARS OF EXPERIENCE</p>
            <h2>My Resume</h2>
        </div>
        <div class="resume-tabs">
            <button class="tab active" data-tab="education">Education</button>
            <button class="tab" data-tab="skills">Professional Skills</button>
            <button class="tab" data-tab="experience">Experience</button>
            <button class="tab" data-tab="interview">Interview</button>
        </div>
        <div class="resume-content" id="resumeContent">
            <div class="resume-card">
                <span class="resume-year">2008</span>
                <h3>Education Quality</h3>
                <p class="date">Personal Portfolio April Fools - (2008 - 2010)</p>
                <p>The education should be very interactual. It should be very interesting. If education could be like
                    entertainment then it would be great.</p>
            </div>
            <div class="resume-card">
                <span class="resume-year">2015</span>
                <h3>Job Experience</h3>
                <p class="date">Diploma in Web Development - (Aug 2012 - Dec 2014)</p>
                <p>Company's vision to make useful, If it could make learning a viable alternative to students who want
                    to learn more about web development and make it part of their lifestyle.</p>
            </div>
            <div class="resume-card">
                <span class="resume-year">2018</span>
                <h3>Examples of Personal Portfolio</h3>
                <p class="date">BSc In CSE - (2006 - 2010)</p>
                <p>The education should be very interactual. It should be very interesting. If education could be like
                    entertainment then it would be great.</p>
            </div>
            <div class="resume-card">
                <span class="resume-year">2021</span>
                <h3>The Personal Portfolio Mystery</h3>
                <p class="date">Job Experience - August 2008</p>
                <p>The education should be very interactual. It should be very interesting. If education could be like
                    entertainment then it would be great.</p>
            </div>
        </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials" id="testimonials">
        <div class="section-title">
            <p class="section-subtitle">WHAT CLIENTS SAY</p>
            <h2>Testimonial</h2>
        </div>
        <div class="testimonial-grid">
            <div class="testimonial-card">
                <div class="stars">★★★★★</div>
                <p>Jone really saved my business by creating an amazing website. The professionalism and quality of work
                    exceeded my expectations. Highly recommend!</p>
                <div class="testimonial-header">
                    <div class="testimonial-img"></div>
                    <div>
                        <h4>Nevine Acotanza</h4>
                        <p class="role">Chief Operating Officer</p>
                    </div>
                </div>
            </div>
            <div class="testimonial-card">
                <div class="stars">★★★★★</div>
                <p>Outstanding developer! The attention to detail and creative solutions provided were exactly what we
                    needed. Communication was excellent throughout.</p>
                <div class="testimonial-header">
                    <div class="testimonial-img"></div>
                    <div>
                        <h4>Jone Anderson</h4>
                        <p class="role">Creative Director</p>
                    </div>
                </div>
            </div>
            <div class="testimonial-card">
                <div class="stars">★★★★★</div>
                <p>Working with Jone was a pleasure. Professional, timely, and delivered beyond our expectations. Will
                    definitely work together again!</p>
                <div class="testimonial-header">
                    <div class="testimonial-img"></div>
                    <div>
                        <h4>Megan Fox</h4>
                        <p class="role">App Developer</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section class="contact" id="contact">
        <div class="section-title">
            <p class="section-subtitle">CONTACT</p>
            <h2>Contact With Me</h2>
        </div>
        <form class="contact-form" id="contactForm">
            <div class="form-group">
                <label for="name">YOUR NAME</label>
                <input type="text" id="name" name="name" placeholder="Your Name" required>
            </div>
            <div class="form-group">
                <label for="email">EMAIL</label>
                <input type="email" id="email" name="email" placeholder="Your Email" required>
            </div>
            <div class="form-group">
                <label for="subject">SUBJECT</label>
                <input type="text" id="subject" name="subject" placeholder="Subject" required>
            </div>
            <div class="form-group">
                <label for="message">YOUR MESSAGE</label>
                <textarea id="message" name="message" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" class="submit-btn">SEND MESSAGE</button>
            <div class="form-message" id="formMessage"></div>
        </form>
    </section>

    <!-- Footer -->
    <footer>
        <p>&copy; 2025 Lynard_Portfolio. All Rights Reserved.</p>
    </footer>

    <div class="modal-overlay" id="logoutModal">
        <div class="modal-content">
            <div class="modal-icon"><i class="fas fa-sign-out-alt"></i></div>
            <h3>Logout Confirmation</h3>
            <p>Are you sure you want to logout? You'll need to sign in again to access your dashboard.</p>
            <div class="modal-buttons">
                <button class="modal-btn modal-btn-cancel" onclick="closeLogoutModal()">Cancel</button>
                <button class="modal-btn modal-btn-confirm" onclick="confirmLogout()">Logout</button>
            </div>
        </div>
    </div>

    <button class="back-to-top" id="backToTop">↑</button>

    <script src="dashboard.js"></script>
</body>

</html>