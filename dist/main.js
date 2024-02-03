"use strict";
let display = document.getElementById("display");
let btns = document.querySelectorAll("button");
let a = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    btn.innerHTML == "High" ? a++ : a--;
    display.innerHTML = a;
  });
});
