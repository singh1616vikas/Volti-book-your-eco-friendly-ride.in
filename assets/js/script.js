

// preloading

const loadElement = document.querySelector("[data-preloader]");

window.addEventListener("load", function () {
    loadElement.classList.add("loaded");
});


// mobile navbar toggle

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector('[data-nav-toggler]');

const toggleNavbar = function () {
    navbar.classList.toggle("active");
    navToggler.classList.toggle("active");

}

navToggler.addEventListener("click", toggleNavbar);


// header

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-go-to-btn]");

window.addEventListener("scroll", () => {
    if (window.screenY >= 100) {
        header.classList.add("active");
        backTopBtn.classList.add("active");
    } else {
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
    }
});



// scroll reveal

const revealElements = document.querySelectorAll("[data-reveal]");

const scrollReveal = function () {
    for (let i = 0, x = revealElements.length; i < x; i++) {
        if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
            revealElements[i].classList.add("revealed");
        }
        else {
            revealElements[i].classList.remove("revealed");
        }
    }
}

window.addEventListener("scroll", scrollReveal);
window.addEventListener("load", scrollReveal);
