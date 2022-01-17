/* NAVIGATION - MOBILE*/

let gil1 = document.querySelector(".blog");
let gil2 = document.querySelector(".main-post-text-text");
let genu2 = document.querySelector(".header-menu-links-container");
let gogo2 = document.querySelector(".changeLogo");

let gpen2 = false;

function menu() {
    if(!gpen2) {
        gil1.style.filter = "blur(1rem)";
        gil2.style.filter = "blur(1rem)";
        genu2.style.display = "block";
        gogo2.src = "../img/xxx2.svg";
        gpen2 = true;
    } else {
        gil1.style.filter = null;
        gil2.style.filter = null;
        genu2.style.display = null;
        gogo2.src = "../img/bars.svg";
        gpen2 = false;
    }
}