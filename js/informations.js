const slider = document.getElementById("slider");
const buttons = document.getElementById("buttons");
let last, now;

slider.oninput = function() {
    buttons.style.marginLeft =  -slider.value * 0.175 + 0.56 + "rem";
}

buttons.addEventListener('touchmove', function(event) {
    now = event.changedTouches[0].screenX;

    slider.value = parseInt(slider.value) + last - now;

    if(last > now) {
        if(last - now > 100 - slider.value) slider.value = 100;
    }
    if(now > last) {
        if(now - last > slider.value) slider.value = 0;
    }

    buttons.style.marginLeft = -slider.value * 0.175 + 0.56 + "rem";

    last = now;
});