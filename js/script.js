const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
};

const sr = ScrollReveal({
    distance: '45px',
    duration: 2700,
    reset: true
});

sr.reveal('.home-text', { delay: 350, origin: 'left' });
sr.reveal('.home-img', { delay: 350, origin: 'right' });

sr.reveal('.sub-service, .about, .portfolio, .service, .cta, .contact', { delay: 200, origin: 'bottom' });

document.addEventListener('DOMContentLoaded', function() {
    // Skill: HTML
    var htmlProgress = new ProgressBar.Circle('#html-progress', {
        color: '#3498db',
        strokeWidth: 6,
        trailWidth: 3,
        duration: 2000,
        text: {
            value: 'HTML 80%'
        }
    });

    htmlProgress.animate(0.8); // 80%

    // Skill: CSS
    var cssProgress = new ProgressBar.Circle('#css-progress', {
        color: '#2ecc71',
        strokeWidth: 6,
        trailWidth: 3,
        duration: 2000,
        text: {
            value: 'CSS 75%'
        }
    });

    cssProgress.animate(0.75); // 75%

    // Skill: JavaScript
    var jsProgress = new ProgressBar.Circle('#js-progress', {
        color: '#f39c12',
        strokeWidth: 6,
        trailWidth: 3,
        duration: 2000,
        text: {
            value: 'JavaScript 85%'
        }
    });

    jsProgress.animate(0.85); // 85%

    // Add more skills as needed
});
