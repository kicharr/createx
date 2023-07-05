const vacancies = [
    {
        vacancyName: 'Financial Compliance Analyst',
        vacancyWorkingTime: 'Full Time',
        vacancyCity: 'San Francisco'
    },
    {
        vacancyName: 'Project Manager - Buildings',
        vacancyWorkingTime: 'Full Time',
        vacancyCity: 'New Jersey'
    },
    {
        vacancyName: 'Environment Specialist',
        vacancyWorkingTime: 'Part Time',
        vacancyCity: 'New York'
    },
    {
        vacancyName: 'Accountant',
        vacancyWorkingTime: 'Full Time',
        vacancyCity: 'New York'
    },
]

let vacancyCard = document.getElementById('vacancyCard');
let vacanciesWrapper = document.getElementById('vacanciesWrapper');


let workingCity = document.querySelector('.item-data__city');
let workingTime = document.querySelector('.item-data__time');
let workingName = document.querySelector('.item-data-title');

vacancies.forEach(vacancy => {
    let cloneVacancyCard = vacancyCard.cloneNode(true);
    vacanciesWrapper.appendChild(cloneVacancyCard);

    workingName.innerHTML = vacancy.vacancyName;
    workingCity.innerHTML = vacancy.vacancyCity;
    workingTime.innerHTML = vacancy.vacancyWorkingTime;


    console.log(workingTime.innerHTML);
});

// modal forms

let subscribeModalBtn = document.getElementById('subscribeModalBtn');
let subscribeModal = document.getElementById('subscribeModal');
let closeSubscribeModal = document.getElementById('closeSubscribeModal');

subscribeModalBtn.addEventListener('click', () => {

    !subscribeModal.style.cssText || subscribeModal.style.cssText === 'display: none;' ? subscribeModal.style.cssText = 'display: block;' : subscribeModal.style.cssText = 'display: none;'

    closeSubscribeModal.addEventListener('click', () => {
        !subscribeModal.style.cssText || subscribeModal.style.cssText === 'display: block;' ? subscribeModal.style.cssText = 'display: none;' : null
    })

})


// second form

let subscribeModalCV = document.getElementById('subscribeModalCV');
let sendCVModal = document.getElementById('sendCVModal');
let closeSubscribeModalCV = document.getElementById('closeSubscribeModalCV');

subscribeModalCV.addEventListener('click', () => {
    console.log(2321);

    !sendCVModal.style.cssText || sendCVModal.style.cssText === 'display: none;' ? sendCVModal.style.cssText = 'display: block;' : sendCVModal.style.cssText = 'display: none;'

    closeSubscribeModalCV.addEventListener('click', () => {
        !sendCVModal.style.cssText || sendCVModal.style.cssText === 'display: block;' ? sendCVModal.style.cssText = 'display: none;' : null
    })

})




// select
 // select

 let selectLocation = document.getElementById('selectLocation');
 let chooseLocationItem = document.getElementById('chooseLocationItem');
 const selectArrowLocation = document.getElementById('selectArrowLocation');
 selectLocation.addEventListener('click', () => {
     if (!chooseLocationItem.style.cssText || chooseLocationItem.style.cssText === 'display: none;') {
         chooseLocationItem.style.cssText = 'display: block'
         selectArrowLocation.style.cssText = 'transform: rotate(180deg);'
     } else {
         chooseLocationItem.style.cssText = 'display: none;'
         selectArrowLocation.style.cssText = 'transform: rotate(0);'
     }
 })






 