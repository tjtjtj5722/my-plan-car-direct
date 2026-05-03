document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add short delay to staggering items
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, 100);
                observer.unobserve(entry.target); // Run once
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in, .slide-up, .glow-box');
    animatedElements.forEach((el, index) => {
        // slight transition delay for multiple elements
        el.style.transitionDelay = `${index * 0.05}s`;
        observer.observe(el);
    });

    // Form submission handler
    const form = document.getElementById('consultation-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('상담 신청이 완료되었습니다! 확인 후 빠르게 연락드리겠습니다.');
            form.reset();
        });
    }
});
