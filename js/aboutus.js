var element2 = document.getElementById("change-aboutus2");
var element = document.getElementById("change-aboutus1");
var button1 = document.getElementById("button-aboutus1");
var button2 = document.getElementById("button-aboutus2")


function myFunction() {
  var element = document.getElementById("change-aboutus1");
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
  var element2 = document.getElementById("change-aboutus2");
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

let bil = document.querySelector(".header-notebook");
let bil2 = document.querySelector(".patients-header-text");
let mil2 = document.querySelector(".header-menu-links-container");
let lil2 = document.querySelector(".changeLogo");

let opil = false;

function menu() {
    if(!opil) {
        bil.style.filter = "blur(1rem)";
        bil2.style.filter = "blur(1rem)";
        mil2.style.display = "block";
        lil2.src = "../img/xxx2.svg";
        opil = true;
    } else {
        bil.style.filter = null;
        bil2.style.filter = null;
        mil2.style.display = null;
        lil2.src = "../img/bars.svg";
        opil = false;
    }
}