const btn = document.querySelector(".btn");
const output = document.querySelector(".output");

window.addEventListener("DOMContentLoaded", () => {
  changeButton();
});

function changeButton() {
  btn.addEventListener("click", () => {
    let color = "#";
    color += Math.random().toString(16).slice(2, 8);
    output.textContent = color;
    document.body.style.backgroundColor = color;
  });
}
