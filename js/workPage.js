// let loaderWrapper = document.getElementById('loaderCircle').addEventListener('click', () => {
//     let loaderCircle = document.getElementById('loaderCircle');
//     loaderCircle.classList.add('loader_active') ? loaderCircle.classList.add('loader_active') : null
// })

document.getElementById('loaderWrapper').addEventListener('click', () => {
    document.getElementById('loaderCircle').classList.add('loader_active')
})

let currentUrl = window.location.href.split('/');
let workPageId = document.getElementById('workPageId');
currentUrl[3] === 'Services.html' ? workPageId.classList.add('header-nav__active') : workPageId
    .classList.add('header-nav__active');