document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section:not(#home)');
    const sectionHeadings = document.querySelectorAll('section:not(#home) h2');

    // Scroll animations: fade in and slide up on entering the viewport
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.classList.add('fade-section');
        observer.observe(section);
    });

    const homeSection = document.getElementById('home');
    if (homeSection) {
        homeSection.classList.add('visible');
    }

    // Dynamic navigation highlight
    const highlight = document.createElement('div');
    highlight.className = 'section-highlight';
    document.body.appendChild(highlight);

    const navLinks = document.querySelectorAll('.nav-links a');

    function updateHighlight() {
        let activeLink = navLinks[0];

        if (homeSection) {
            const homeRect = homeSection.getBoundingClientRect();
            if (homeRect.top < window.innerHeight / 2 && homeRect.bottom > 0) {
                activeLink = navLinks[0];
            } else {
                sectionHeadings.forEach((heading, index) => {
                    const rect = heading.getBoundingClientRect();
                    if (rect.top < window.innerHeight / 2) {
                        activeLink = navLinks[index + 1] || activeLink;
                    }
                });
            }
        }

        if (activeLink) {
            const rect = activeLink.getBoundingClientRect();
            highlight.style.left = `${rect.left}px`;
            highlight.style.width = `${rect.width}px`;
            highlight.style.display = 'block';
        }
    }

    updateHighlight();
    window.addEventListener('scroll', updateHighlight);
    window.addEventListener('resize', updateHighlight);
});
