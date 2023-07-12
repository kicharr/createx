let currentUrl = window.location.href.split('/');
let aboutPageId = document.getElementById('aboutPageId');
currentUrl[3] === 'Services.html' ? aboutPageId.classList.add('header-nav__active') : aboutPageId
    .classList.add('header-nav__active');

// const teamWrapper = document.getElementById('teamWrapper');
// console.log(teamWrapper);

// employees
let employeesUrl = '../userData/employees.json';
let responce = fetch(employeesUrl).then(data => data.json()).then(res => setResponce(res));

const employeesArray = [];

function setResponce(res) {
    employeesArray.push(res.employees);

    let teamWrapper = document.getElementById('teamWrapper')
    let employeeCard = document.getElementById('employeeCard');

    let employeeName = document.querySelector('.worker-name');
    let employeePhoto = document.querySelector('.worker-image');
    let employeePosition = document.querySelector('.worker-position');



    employeesArray.forEach(element => {
        for (let i = 0; i < element.length; i++) {
            let employeeCardClone = employeeCard.cloneNode(true);
            teamWrapper.append(employeeCardClone);

            employeePhoto.setAttribute('src', element[i].photo);
            employeeName.innerHTML = element[i].name;
            employeePosition.innerHTML = element[i].position;
        }
    });
}

document.getElementById('loaderWrapper').addEventListener('click', () => {
    document.getElementById('loaderCircle').classList.add('loader_active')

    setTimeout(() => {
        if (teamWrapper.className.split(' ')[1] === 'employees-hideen__wrapper') {
            teamWrapper.classList.remove('employees-hideen__wrapper');

            // console.log('yes');
        } else {
            // console.log('no');
        }
    }, 1000)


})






