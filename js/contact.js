
/* NAVIGATION - MOBILE*/

let hil = document.querySelector(".contact-container");
let hil2 = document.querySelector(".contact-desctop");
let nil2 = document.querySelector(".header-menu-links-container");
let kil2 = document.querySelector(".changeLogo");

let apil = false;

function menu() {
    if(!apil) {
        hil.style.filter = "blur(1rem)";
        hil2.style.filter = "blur(1rem)";
        nil2.style.display = "block";
        kil2.src = "../img/xxx2.svg";
        apil = true;
    } else {
        hil.style.filter = null;
        hil2.style.filter = null;
        nil2.style.display = null;
        kil2.src = "../img/bars.svg";
        apil = false;
    }
}