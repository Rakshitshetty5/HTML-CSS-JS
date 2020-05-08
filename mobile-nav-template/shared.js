var toggleBtn = document.querySelector(".toggle-button")
var mobileNav = document.querySelector(".mobile-navbar")
var backdrop = document.querySelector(".backdrop");

toggleBtn.addEventListener("click", () => {
    backdrop.style.display = "block";
    mobileNav.classList.add("open");

});

backdrop.addEventListener("click", () => {
    backdrop.style.display = "none";
    mobileNav.classList.remove("open")
})