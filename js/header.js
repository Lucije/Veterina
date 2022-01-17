let blur = document.querySelector(".header-notebook");
let blur2 = document.querySelector(".header-contact-container");
let links = document.querySelector(".header-menu-links-container");
let logo = document.querySelector(".changeLogo");

let open = false;

function menu() {
    if(!open) {
        blur.style.filter = "blur(1rem)";
        blur2.style.filter = "blur(1rem)";
        links.style.display = "block";
        logo.src = "../img/xxx2.svg";
        open = true;
    } else {
        blur.style.filter = null;
        blur2.style.filter = null;
        links.style.display = null;
        logo.src = "../img/bars.svg";
        open = false;
    }
}