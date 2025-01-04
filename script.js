document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const options = {
        root: null,
        threshold: 0.1,
        rootMargin: '0px',
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach((section, index) => {
        if (index === 0) {
            // Для первого блока сразу добавляем класс visible
            section.classList.add('visible');
        } else {
            observer.observe(section);
        }
    });
});

/*BURGER*/
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger-menu');
    const menu = document.getElementById('nav-menu');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
    });
});
