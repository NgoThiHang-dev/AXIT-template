// tabs
var tabLinks = document.querySelectorAll(".tablinks");
var tabContent = document.querySelectorAll(".tab-content");

tabLinks.forEach(function (el) {
    el.addEventListener("click", openTabs);
});

function openTabs(el) {
    var btnTarget = el.currentTarget;
    var country = btnTarget.dataset.country;

    tabContent.forEach(function (el) {
        el.classList.remove("active");
    });

    tabLinks.forEach(function (el) {
        el.classList.remove("active");
    });

    var idTabCountry = document.querySelector("#" + country);
    idTabCountry.classList.add("active");
    btnTarget.classList.add("active");
}