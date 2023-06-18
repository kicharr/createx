let currentUrl = window.location.href.split('/');
let aboutPageId = document.getElementById('aboutPageId');
currentUrl[3] === 'Services.html' ? aboutPageId.classList.add('header-nav__active') : aboutPageId
    .classList.add('header-nav__active');


// history slider

let slideItem = document.getElementsByClassName('history-way__link');
let slide1 = document.getElementById('slideContent1');
let slide2 = document.getElementById('slideContent2');

function setSlide() {
    
}

if (slideItem[0].className == 'history-way__link history-link__active') {
    slide1.style.cssText = 'display: block;'
} else {
    null
}

if (slideItem[1].className == 'history-way__link history-link__active') {
    slide2.style.cssText = 'display: block;'
} else {
    null
}