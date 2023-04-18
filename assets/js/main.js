
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