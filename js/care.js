/*Changing panel*/
var acc = document.getElementsByClassName("faq-button");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

/* Navigation submenu*/

var element2 = document.getElementById("change2");
var element = document.getElementById("change");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2")


function myFunction() {
  var element = document.getElementById("change");
  button1.classList.add("active");
  element.style.display = "block";
  
  if (element.style.display === "block") {
    element2.style.display = "none";
    button2.classList.remove ("active")}
    else {
      element2.style.display = "block";
      button1.classList.add("active")
    }
}

function myFunction2() {
  var element2 = document.getElementById("change2");
  button2.classList.add("active");
  element2.style.display = "block";
  
  if (element2.style.display === "block") {
    element.style.display = "none";
    button1.classList.remove ("active")}
    else {
      element2.style.display = "block";
      button2.classList.add("active");
    }
}

/* NAVIGATION - MOBILE*/

let fil1 = document.querySelector(".header-notebook");
let fil2 = document.querySelector(".care-text-container");
let menu2 = document.querySelector(".header-menu-links-container");
let logo2 = document.querySelector(".changeLogo");

let open2 = false;

function menu() {
    if(!open2) {
        fil1.style.filter = "blur(1rem)";
        fil2.style.filter = "blur(1rem)";
        menu2.style.display = "block";
        logo2.src = "../img/xxx2.svg";
        open2 = true;
    } else {
        fil1.style.filter = null;
        fil2.style.filter = null;
        menu2.style.display = null;
        logo2.src = "../img/bars.svg";
        open2 = false;
    }
}