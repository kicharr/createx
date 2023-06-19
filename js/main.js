// MAIN SLIDER

$(document).ready(function () {
    $('.bg-slider').slick({
        arrow: true,
    });
});

// FIXED HEADER
window.addEventListener('scroll', () => {
    Math.round(pageYOffset) >= 1000 ? document.getElementById('header').classList.add('header-fixed') : document.getElementById('header').classList.remove('header-fixed');
    console.log(windowHeight);
});
