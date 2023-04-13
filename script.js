"use strict";


/* -----------Show hidden divs------------ */
const aboutDiv = document.getElementById("about");
const btn1 = document.getElementById("about-me");
btn1.onclick = function () {
    aboutDiv.style.display = "block";
    contactDiv.style.display = "none";
    workDiv.style.display = "none";
};


const workDiv = document.getElementById("work");
const btn3 = document.getElementById("my-work");
btn3.onclick = function () {
    workDiv.style.display = "block";
    aboutDiv.style.display = "none";
    contactDiv.style.display = "none";
};

const contactDiv = document.getElementById("contact");
const btn2 = document.getElementById("contact-me");
btn2.onclick = function () {
    contactDiv.style.display = "block";
    aboutDiv.style.display = "none";
    workDiv.style.display = "none";
};


/* -----------Toggle dark-mode------------ */

const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");
const abooutMe = document.getElementById("about-me");
const myWork = document.getElementById("my-work");
const contactMe = document.getElementById("contact-me");
const darkModeText = document.getElementById("dark-mode-text");

toggle.addEventListener("click", function () {
    this.classList.toggle("bi-lightbulb");
    if (this.classList.toggle("bi-lightbulb-fill")) {
        body.style.background = "#f5f5f7";
        body.style.color = "#1d1d1f";
        abooutMe.style.color = "#1d1d1f";
        myWork.style.color = "#1d1d1f";
        contactMe.style.color = "#1d1d1f";
        darkModeText.textContent = "Dark";
        body.style.transition = "1.5s";
    } else {
        body.style.background = "#1d1d1f";
        body.style.color = "#f5f5f7";
        abooutMe.style.color = "#f5f5f7";
        myWork.style.color = "#f5f5f7";
        contactMe.style.color = "#f5f5f7";
        darkModeText.textContent = "Light";
        body.style.transition = "1.5s";
    }
});