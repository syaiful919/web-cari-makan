import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "../styles/responsive.css";

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
    x.style.color = "#2c3e50";
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
    logo.style.color = "#2c3e50";
    menu.style.color = "#2c3e50";
    navItem.forEach(function (x) {
      x.style.color = "#2c3e50";
    });
  } else {
    header.style.backgroundColor = "transparent";
    logo.style.color = "white";
    menu.style.color = "white";
    navItem.forEach(function (x) {
      if (drawer.classList.contains("open") && window.screen.width < 600) {
        x.style.color = "#2c3e50";
      } else {
        x.style.color = "white";
      }
    });
  }
}
