const image = document.querySelector('slideshow-image');

let current = 0,
    slides = document.getElementsByTagName("img");

setInterval(() => {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = 0;
    }
    current = (current != slides.length - 1) ? current + 1 : 0;
    slides[current].style.opacity = 1;
}, 3000);


///////////// navbar //////////////


const navbarToggler = document.querySelector(".navbar-toggler");
const navbarMenu = document.querySelector(".navbar ul");
const navbarLinks = document.querySelectorAll(".navbar a");

navbarToggler.addEventListener("click", navbarTogglerClick);


function navbarTogglerClick() {
    navbarToggler.classList.toggle("open-navbar-toggler");
    navbarMenu.classList.toggle("open");
}

//navbarLinks.forEach(elem => elem.addEventListener("click", navbarLinkClick));

for (let i = 0; i < navbarLinks.length; i++) {
    navbarLinks[i].addEventListener("click", navbarLinkClick);
}

function navbarLinkClick(event) {

    smoothScroll(event); // Call the "smoothScroll" function

    if (navbarMenu.classList.contains("open")) { // Close navbarMenu in smaller screens
        navbarToggler.click();
    }

}

// APPROACH #3 - window.requestAnimationFrame()
function smoothScroll(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href") === "#" ? "header" : event.currentTarget.getAttribute("href");
    const targetPosition = document.querySelector(targetId).offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000;
    let start = null;

    window.requestAnimationFrame(step);

    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;

        window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
        if (progress < duration) window.requestAnimationFrame(step);
    }
}

// Easing Functions

function linear(t, b, c, d) {
    return c * t / d + b;
};

function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
};

function easeInOutCubic(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
};
