"use strict"
const button = [...document.getElementsByTagName("button")];
const body = [...document.getElementsByTagName("body")]
button[0].addEventListener("click", () => {
    let r = 0, g = 0, b = 0;
    r = Math.round(Math.random() * 255);
    g = Math.round(Math.random() * 255);
    b = Math.round(Math.random() * 255);

    body[0].setAttribute("style", `background-color: rgb(${r},${g},${b});`);
});

const newItem = document.createElement("li");
list.appendChild(newItem)