let title = document.getElementById("title");
title.style.color = "red";
let btn = document.querySelector("button");
btn.addEventListener("click", () => {
  btn.nextElementSibling.textContent++;
});
