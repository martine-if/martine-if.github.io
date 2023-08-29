var r = document.querySelector(":root");
const t = document.querySelectorAll(".title");

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
  r.style.setProperty("--primary-color", "#fdf9f3");
}

function light() {
  r.style.setProperty("--bg-color", "#fdf9f3");
  r.style.setProperty("--primary-color", "#2c292d");
}
