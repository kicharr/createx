let openAccardion1 = document.getElementById('openAccardion1');
let openAccardion2 = document.getElementById('openAccardion2');

openAccardion1.addEventListener('click', () => {
    let accardionContent1 = document.getElementById('accardionContent1');
    let accardionImage1 = document.getElementById('accardionImage1');

    if(!accardionContent1.style.cssText || accardionContent1.style.cssText === 'transform: translateY(-150%); height: 0px;') {
        accardionContent1.style.cssText = 'transform: translateY(0%); height: auto;'

        accardionImage1.style.cssText = 'background-image: url(../assets/images/services-page/Minus.svg);'
    } else {
        accardionContent1.style.cssText = 'transform: translateY(-150%); height: 0px;'
        accardionImage1.style.cssText = 'background-image: url(../assets/images/services-page/Plus.svg);'
    }
})

openAccardion2.addEventListener('click', () => {
    let accardionContent2 = document.getElementById('accardionContent2');
    let accardionImage2 = document.getElementById('accardionImage2');

    if(!accardionContent2.style.cssText || accardionContent2.style.cssText === 'transform: translateY(-150%); height: 0px;') {
        accardionContent2.style.cssText = 'transform: translateY(0%); height: auto;'

        accardionImage2.style.cssText = 'background-image: url(../assets/images/services-page/Minus.svg);'
    } else {
        accardionContent2.style.cssText = 'transform: translateY(-150%); height: 0px;'
        accardionImage2.style.cssText = 'background-image: url(../assets/images/services-page/Plus.svg);'
    }
})

