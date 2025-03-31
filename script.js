// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Reveal animation for project cards
const projectCards = document.querySelectorAll('.project-card');

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

projectCards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(card);
});

document.addEventListener("DOMContentLoaded", function () {
    const aboutBtn = document.getElementById("about-btn");
    const aboutPanel = document.getElementById("about-panel");
    const closeAbout = document.getElementById("close-about");

    aboutBtn.addEventListener("click", function () {
        aboutPanel.classList.add("active");
    });

    closeAbout.addEventListener("click", function () {
        aboutPanel.classList.remove("active");
    });

    // Close when clicking outside the panel
    window.addEventListener("click", function (e) {
        if (e.target !== aboutBtn && !aboutPanel.contains(e.target)) {
            aboutPanel.classList.remove("active");
        }
    });
});
