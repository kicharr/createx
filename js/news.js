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
        name: 'How Construction Can Help Itself',
        preview: './assets/images/news-page/news-preview1.jpg',
        description: 'Porta habitant vitae quam interdum. Leo viverra non volutpat rhoncus placerat vitae scelerisque. Rhoncus augue faucibus maecenas lacus...',
        date: 'March 7, 2021',
        newsType: 'Innovation',
        comments: 'No comments',
    },
    {
        name: 'The Difference Between a Digger and an Excavator',
        preview: './assets/images/news-page/news-preview2.jpg',
        description: 'Cras est nisi purus velit facilisi vitae, dolor. Lorem scelerisque integer duis et nulla lobortis cursus. Viverra erat sollicitudin praesent viverra...',
        date: 'Junary 19, 2022',
        newsType: 'Expert Tips',
        comments: 'No comments',
    },
    {
        name: 'Building Construction Hand Tools',
        preview: './assets/images/news-page/news-preview3.jpg',
        description: 'Tellus quis aliquet volutpat nunc pulvinar donec sed sapien. Vitae elit id dolor, tristique massa. Fames lobortis orci rutrum bibendum integer...',
        date: 'April 12, 2020',
        newsType: 'Expert Tips',
        comments: '1 comment',
    },
    {
        name: 'Top 10 Construction Trends',
        preview: './assets/images/news-page/news-preview4.jpg',
        description: 'Dignissim sed enim, eleifend morbi condimentum. Congue id quis vulputate dignissim eget. Ac ullamcorper nunc habitasse enim interdum platea...',
        date: 'December 27, 2022',
        newsType: 'Industry News',
        comments: 'No comments',
    },
    {
        name: 'Types of Flooring Materials',
        preview: './assets/images/news-page/news-preview5.jpg',
        description: 'Maecenas donec lacinia nunc, quam sit magnis mauris. Neque bibendum et mauris, aenean. Vel arcu amet in sem parturient  integer duis et nulla...',
        date: 'May 5, 2018',
        newsType: 'Company News',
        comments: 'No comments',
    },
]


let newsCardWrapper = document.getElementById('newsCardWrapper');
let newsCard = document.getElementById('newsCard');

let newsCardName = document.getElementById('newsCardName');
let newsPreviewImage = document.querySelector('.big-news__preview')
let newsCardDescription = document.querySelector('.big-news-card__description');
let newsCardDate = document.querySelector('.news-date__text');
let newsCardType = document.querySelector('.news-type__text');
let newsCardComments = document.querySelector('.news-comment__text');

newsArray.forEach(el => {
    let cloneNewsCard = newsCard.cloneNode(true);
    newsCardWrapper.appendChild(cloneNewsCard);


    newsCardName.innerHTML = el.name;
    newsPreviewImage.setAttribute('src', el.preview);
    newsCardDescription.innerHTML = el.description;
    newsCardDate.innerHTML = el.date;
    newsCardType.innerHTML = el.newsType;
    newsCardComments.innerHTML = el.comments;
});

// if (newsCardWrapper.childElementCount >= 6) {
    
// }


let filterButtons = document.querySelectorAll('.news-filter-nav__button');
let companyNews = document.getElementById('companyNews');
let innovationNews = document.getElementById('innovationNews');
let industryNews = document.getElementById('industryNews');
let expertNews = document.getElementById('expertNews');
let MarketingNews = document.getElementById('MarketingNews');



// filterButtons.forEach(element => {
//     console.log(element.classList);

//     newsArray.sort(newsArray.newsType === element.innerHTML) {
//         console.log(123);
//     }

// });



