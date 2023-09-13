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
  r.style.setProperty("--bg-color", "#2c292d");
  r.style.setProperty("--primary-color", "#ffffff");
}

function light() {
  r.style.setProperty("--bg-color", "#ffffff");
  r.style.setProperty("--primary-color", "#2c292d");
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
