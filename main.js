const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");
const menu = document.querySelector(".nav_menu");

// open nav menu

menuBtn.addEventListener("click", () => {
  menu.style.display = "block";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
});

// CLOSE NAV
const closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
};
closeBtn.addEventListener("click", closeNav);

//CLOSE NAV MENU WHEN ITEMS ARE CLICKED

if (window.innerWidth < 1024) {
  document.querySelectorAll(".nav_menu li a").forEach((navItem) => {
    navItem.addEventListener("click", closeNav);
  });
}

// INTER
const nav = document.querySelector("nav");
let isScrolled = false;

window.addEventListener("scroll", () => {
  if (window.scrollY > 0 && !isScrolled) {
    nav.classList.add("window-scroll");
    isScrolled = true;
  } else if (window.scrollY === 0 && isScrolled) {
    nav.classList.remove("window-scroll");
    isScrolled = false;
  }
});
