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
  r.style.setProperty("--bg-color", "#25242b");
  r.style.setProperty("--bg-color-trans", "#25242b80");
  r.style.setProperty("--primary-color-trans", "#f6f6f680");
  r.style.setProperty("--primary-color", "#f6f6f6");
}

function light() {
  r.style.setProperty("--bg-color", "#f6f6f6");
  r.style.setProperty("--bg-color-trans", "#f6f6f680");
  r.style.setProperty("--primary-color-trans", "#25242b80");
  r.style.setProperty("--primary-color", "#25242b");
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
