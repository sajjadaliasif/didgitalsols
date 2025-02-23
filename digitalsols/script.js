document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", function () {
        if (navLinks.classList.contains("active")) {
            navLinks.style.height = "0px";
            setTimeout(() => navLinks.classList.remove("active"), 500);
        } else {
            navLinks.classList.add("active");
            navLinks.style.height = "200px"; // Same as in CSS
        }
    });
});
