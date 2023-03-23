
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
  headerDev.style=("transition:.5s ease");
});

const toggleDotsDev = document.querySelector(".toggle__dots");
const headerDots = document.querySelector(".header__dots");
toggleDotsDev.addEventListener("click", () => {
  toggleDotsDev.classList.toggle("open");
  headerDots.classList.toggle("open");
  headerDots.style=("transition:.5s ease");
});

const hoverNav=document.querySelectorAll(".item");
const hoverContent=document.querySelectorAll(".item__top");
hoverNav.forEach((hover) => {
    hover.addEventListener("click", () => {
        removeActivehover();
        hover.classList.add("active");
        // const activeContent= document.querySelector(`#${hover.id}-content`);
        // removeActiveContent();
        // activeContent.classList.add("active");
    })
})

function removeActiveStar(){
  hoverNav.forEach((hover) =>{
      hover.classList.remove("active");
  })
}
// function removeActiveContent(){
//   hoverContent.forEach((hover) =>{
//       hover.classList.remove("active");
//   })
// }

