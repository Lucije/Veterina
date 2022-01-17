/* NAVIGATION - MOBILE*/

let filo = document.querySelector(".header-notebook");
let filo2 = document.querySelector(".doctors-text-container");
let menuo = document.querySelector(".header-menu-links-container");
let logoo = document.querySelector(".changeLogo");

let openo = false;

function menu() {
    if(!openo) {
        filo.style.filter = "blur(1rem)";
        filo2.style.filter = "blur(1rem)";
        menuo.style.display = "block";
        logoo.src = "../img/xxx2.svg";
        openo = true;
    } else {
        filo.style.filter = null;
        filo2.style.filter = null;
        menuo.style.display = null;
        logoo.src = "../img/bars.svg";
        openo = false;
    }
}