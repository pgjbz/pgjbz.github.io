document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section:not(#home)');
    
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

    document.querySelector('#home').classList.add('visible');
});