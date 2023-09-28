var r = document.querySelector(":root");
const t = document.querySelectorAll(".title");
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

function toggle() {
  t.forEach((i) => {
    i.classList.add("no-transition");
  });
  this.state = !this.state;

  if (this.state) {
    dark();
  } else {
    light();
  }
  t.forEach((i) => {
    i.offsetHeight;
  });
  t.forEach((i) => {
    i.classList.remove("no-transition");
  });
}

function dark() {
  r.style.setProperty("--bg-color", "#262627");
  r.style.setProperty("--bg-color-trans", "#26262782");
  r.style.setProperty("--primary-color-trans", "#eaeaea80");
  r.style.setProperty("--primary-color", "#eaeaea");
}

function light() {
  r.style.setProperty("--bg-color", "#eaeaea");
  r.style.setProperty("--bg-color-trans", "#eaeaea80");
  r.style.setProperty("--primary-color-trans", "#26262782");
  r.style.setProperty("--primary-color", "#262627");
}

burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

$(document).ready(function () {
  $(document).on("mousemove", function (e) {
    $("#cursor").css({
      left: e.pageX,
      top: e.pageY,
    });
  });
});
