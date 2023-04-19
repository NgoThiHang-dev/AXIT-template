// active nav menu when click
document.querySelectorAll(".menu-link").forEach((ele) =>
    ele.addEventListener("click", function (event) {
        event.preventDefault();
        document
            .querySelectorAll(".menu-link")
            .forEach((ele) => ele.classList.remove("active"));
        this.classList.add("active")
    })
);

// scroll smooth
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const elHref = document.querySelector(this.getAttribute("href"));
        if (elHref && document.getElementById(this.getAttribute("href").substring(1))) {
            elHref.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

//responsive navbar
var openNarbar = document.querySelector(".navbar-open");
var closeNarbar = document.querySelector(".navbar-close");
var navbar = document.querySelector("#navnarMenu");

openNarbar.addEventListener("click", function () {
    navbar.style.visibility = "visible";
    navbar.style.opacity = "1";
    navbar.style.top = "60px";
    openNarbar.style.display = "none";
    closeNarbar.style.display = "block";
});

closeNarbar.addEventListener("click", function () {
    navbar.style.visibility = "hidden";
    navbar.style.opacity = "0";
    navbar.style.top = "70px";
    openNarbar.style.display = "block";
    closeNarbar.style.display = "none";
});

// animation
const fadeInElements = document.querySelectorAll('.fadeInLeft, .fadeInRight, .fadeInTop, .fadeInBottom');

const options = {
    rootMargin: '0px',
    threshold: 0.5
};

const fadeInObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fadeIn');
            observer.unobserve(entry.target);
        }
    });
}, options);

fadeInElements.forEach(element => {
    fadeInObserver.observe(element);
});