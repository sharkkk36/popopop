function moveRandomEl(elm) {
  elm.style.position = "absolute";
  elm.style.top = Math.random() * 90 + 5 + "%";
  elm.style.left = Math.random() * 90 + 5 + "%";
}

const moveRandomEl = document.querySelector("#move-random");

moveRandom.addEventListener("mouseenter", function (e) {
  moveRandomEl(e.target);
});
