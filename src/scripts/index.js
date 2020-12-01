import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "../styles/responsive.css";

console.log("Hello Coders! :)");

const menu = document.querySelector("#menu");
const hero = document.querySelector(".hero");
const main = document.querySelector("main");
const drawer = document.querySelector("#drawer");
const header = document.querySelector("header");
const logo = document.querySelector(".logo");
const navItem = document.querySelectorAll(".nav__item a");

menu.addEventListener("click", function (event) {
  drawer.classList.toggle("open");
  navItem.forEach(function (x) {
    x.style.color = "black";
  });
  event.stopPropagation();
});

hero.addEventListener("click", function () {
  drawer.classList.remove("open");
});

main.addEventListener("click", function () {
  drawer.classList.remove("open");
});


window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    header.style.backgroundColor = "white";
    logo.style.color = "black";
    menu.style.color = "black";
    navItem.forEach(function (x) {
      x.style.color = "black";
    });
  } else {
    header.style.backgroundColor = "transparent";
    logo.style.color = "white";
    menu.style.color = "white";
    navItem.forEach(function (x) {
      x.style.color = "white";
    });
  }
}
