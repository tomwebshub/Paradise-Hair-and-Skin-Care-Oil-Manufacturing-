// Magic Navigation Bar functionality
const navbar = document.querySelector('.navbar');
const mobileToggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');
const mainPage = document.querySelector('.main-page');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileToggle.querySelector('i').classList.toggle('fa-bars');
    mobileToggle.querySelector('i').classList.toggle('fa-times');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileToggle.querySelector('i').classList.add('fa-bars');
        mobileToggle.querySelector('i').classList.remove('fa-times');
    });
});

// Products navigation (stay on same page, scroll smoothly)
document.querySelectorAll('a[href="#products"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector('#products');
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Home navigation
document.querySelector('.logo').addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update nav active state
    document.querySelectorAll('.nav-links a').forEach(navLink => {
        navLink.classList.remove('active');
    });
    document.querySelector('.nav-links a[href="#"]').classList.add('active');
});

// About & Contact navigation
document.querySelectorAll('.nav-links a[href^="#"]').forEach(link => {
    if (link.getAttribute('href') !== '#products') {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    }
});

// Initialize navbar state
window.dispatchEvent(new Event('scroll'));