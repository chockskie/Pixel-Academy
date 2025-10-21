// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navUl = document.querySelector('nav ul');
    
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function() {
            navUl.classList.toggle('active');
        });
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            // For external links, don't prevent default
            if (this.getAttribute('href').startsWith('http') || 
                this.getAttribute('href').includes('.html') && 
                !this.getAttribute('href').startsWith('#')) {
                return;
            }
            
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
            
            // Close mobile menu after clicking
            if (navUl) {
                navUl.classList.remove('active');
            }
        });
    });
    
    // Add scroll effect to header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (header) {
            if(window.scrollY > 100) {
                header.style.background = 'rgba(26, 26, 46, 0.95)';
                header.style.backdropFilter = 'blur(10px)';
            } else {
                header.style.background = 'linear-gradient(135deg, var(--primary), var(--secondary))';
                header.style.backdropFilter = 'none';
            }
        }
    });
    
    // Portfolio category navigation
    const portfolioCategories = document.querySelectorAll('.portfolio-category');
    if (portfolioCategories.length > 0) {
        portfolioCategories.forEach(category => {
            category.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Remove active class from all categories
                portfolioCategories.forEach(c => c.classList.remove('active'));
                
                // Add active class to clicked category
                this.classList.add('active');
                
                // Scroll to corresponding section
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 120,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    // Course category navigation
    const courseCategories = document.querySelectorAll('.course-category');
    if (courseCategories.length > 0) {
        courseCategories.forEach(category => {
            category.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Remove active class from all categories
                courseCategories.forEach(c => c.classList.remove('active'));
                
                // Add active class to clicked category
                this.classList.add('active');
                
                // Scroll to corresponding section
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 120,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    // Facility category navigation
    const facilityCategories = document.querySelectorAll('.facility-category');
    if (facilityCategories.length > 0) {
        facilityCategories.forEach(category => {
            category.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Remove active class from all categories
                facilityCategories.forEach(c => c.classList.remove('active'));
                
                // Add active class to clicked category
                this.classList.add('active');
                
                // Scroll to corresponding section
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 120,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    // Google Form integration
    function setupGoogleForm() {
        const applyButtons = document.querySelectorAll('.apply-now, .btn[href*="apply"]');
        const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/your-form-id/viewform';
        
        applyButtons.forEach(button => {
            // Update href attributes
            if (button.getAttribute('href') === '#' || button.getAttribute('href').includes('apply')) {
                button.setAttribute('href', GOOGLE_FORM_URL);
                button.setAttribute('target', '_blank');
                button.setAttribute('rel', 'noopener noreferrer');
            }
            
            // Add click tracking
            button.addEventListener('click', function() {
                // You can add Google Analytics tracking here
                console.log('Application form opened from:', window.location.pathname);
            });
        });
    }
    
    // Initialize when page loads
    document.addEventListener('DOMContentLoaded', function() {
        setupGoogleForm();
    });
    
    // Highlight active section in navigation based on scroll position
    function highlightActiveSection() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('nav a[href^="#"]');
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', highlightActiveSection);
});