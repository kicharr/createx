let currentUrl = window.location.href.split('/');
let newsPageId = document.getElementById('newsPageId');
currentUrl[3] === 'Services.html' ? newsPageId.classList.add('header-nav__active') : newsPageId
    .classList.add('header-nav__active');

// filter
// let parent = document.querySelector('.container');
let newsButtons = document.getElementById('news-filter__nav');
let buttonItem = newsButtons.querySelectorAll('.news-filter-nav__button');
newsButtons.addEventListener('click', (event) => {
    // Отлавливаем элемент в родители на который мы нажали
    let target = event.target;

    // Проверяем тот ли это элемент который нам нужен
    if (target.classList.contains('filter-btn__active')) {
        for (let i = 0; i < buttonItem.length; i++) {
            // Убираем у других
            buttonItem[i].classList.remove('filter-btn__active');
        }
        // Добавляем тому на который нажали
        target.classList.add('filter-btn__active');
    }

});

document.querySelectorAll(".news-filter-nav__button").forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.className !== ('filter-btn__active')) {
            btn.classList.add('filter-btn__active');

            // for (let i = 0; i <= newsButtons.length; i++) {
            //     newsButtons[i].classList.remove("filter-btn__activ");
            // };

        } else {
            btn.classList.remove('filter-btn__active');
        }

    })

})


//news 

const newsArray = [
    {
        name: '',
        preview: './assets/images/big-news-homePage.jpg' 
    },
    {
        name: 'How Construction Can Help Itself',
        preview: './assets/images/small-news01.jpg'
    },
    {
        name: 'The Difference Between a Digger and an Excavator',
        preview: './assets/images/small-news01.jpg'
    },
    {
        name: 'Building Construction Hand Tools',
        preview: './assets/images/small-news01.jpg'
    },
    {
        name: 'Top 10 Construction Trends',
        preview: './assets/images/small-news01.jpg'
    },
    {
        name: 'Types of Flooring Materials',
        preview: './assets/images/small-news01.jpg'
    }
]


let newsCardWrapper = document.getElementById('newsCardWrapper');
let newsCard = document.getElementById('newsCard');

let newsCardName = document.getElementById('newsCardName');

newsArray.forEach(el => {    
    let cloneNewsCard =  newsCard.cloneNode(true);
    newsCardWrapper.appendChild(cloneNewsCard);

    newsCardName.innerHTML = el.name;


    console.log(el.name);
});