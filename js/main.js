// FIXED HEADER
window.addEventListener('scroll', () => {
    Math.round(pageYOffset) >= 400 ? document.getElementById('header').classList.add('header-fixed') : document.getElementById('header').classList.remove('header-fixed');
    console.log(Math.round(pageYOffset));
});