window.addEventListener('scroll', () => {
    Math.round(pageYOffset) >= 200 ? document.getElementById('services-card__left1').classList.add(
        'show-services-cards__left') : null;
});

window.addEventListener('scroll', () => {
    Math.round(pageYOffset) >= 300 ? document.getElementById('services-card__left2').classList.add(
        'show-services-cards__right') : null;
});

window.addEventListener('scroll', () => {
    Math.round(pageYOffset) >= 500 ? document.getElementById('services-card__left3').classList.add(
        'show-services-cards__left') : null;

});
window.addEventListener('scroll', () => {
    Math.round(pageYOffset) >= 800 ? document.getElementById('services-card__left4').classList.add(
        'show-services-cards__right') : null;
});


let currentUrl = window.location.href.split('/');
let servicesPageId = document.getElementById('servicesPageId');
currentUrl[3] === 'Services.html' ? servicesPageId.classList.add('header-nav__active') : servicesPageId
    .classList.add('header-nav__active');
    