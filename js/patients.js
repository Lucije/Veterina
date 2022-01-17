/*Changing panel FAQ*/
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

/*SUB MENU**************************************************************************/

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

let filter = document.querySelector(".header-notebook");
let filter2 = document.querySelector(".header-text-container");
let menus = document.querySelector(".header-menu-links-container");
let logos = document.querySelector(".changeLogo");

let opens = false;

function menu() {
    if(!opens) {
        filter.style.filter = "blur(1rem)";
        filter2.style.filter = "blur(1rem)";
        menus.style.display = "block";
        logos.src = "../img/xxx2.svg";
        opens = true;
    } else {
        filter.style.filter = null;
        filter2.style.filter = null;
        menus.style.display = null;
        logos.src = "../img/bars.svg";
        opens = false;
    }
}

