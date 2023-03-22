
const kamote = document.querySelectorAll(".item .item__top")
kamote.forEach((kamoteq) => {
    kamoteq.addEventListener("click", () => {
        kamoteq.nextElementSibling.classList.toggle("open");
        kamoteq.querySelector("i").classList.toggle("open");
        kamote.style
    })
})

const toggleMenuDev = document.querySelector(".toggle__menu");
const headerDev = document.querySelector(".header__nav");
toggleMenuDev.addEventListener("click", () => {
  toggleMenuDev.classList.toggle("open");
  headerDev.classList.toggle("open");
});

const toggleDotsDev = document.querySelector(".toggle__dots");
const headerDots = document.querySelector(".header__dots");
toggleDotsDev.addEventListener("click", () => {
  toggleDotsDev.classList.toggle("open");
  headerDots.classList.toggle("open");
});



