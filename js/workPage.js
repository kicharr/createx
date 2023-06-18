// let loaderWrapper = document.getElementById('loaderCircle').addEventListener('click', () => {
//     let loaderCircle = document.getElementById('loaderCircle');
//     loaderCircle.classList.add('loader_active') ? loaderCircle.classList.add('loader_active') : null
// })

document.getElementById('loaderWrapper').addEventListener('click', () => {
    document.getElementById('loaderCircle').classList.add('loader_active')
})

console.log();