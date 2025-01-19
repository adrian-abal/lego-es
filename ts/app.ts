'use strict'

const headerSup = document.querySelector('.sup') as HTMLDivElement;
const supBtnClose = document.querySelector('.sup__btn-close') as HTMLButtonElement;

const promotions = document.querySelector('.sup__promotions') as HTMLUListElement
const promotionList = document.querySelectorAll('.sup__promotion') as NodeListOf<HTMLLIElement>

let step = 0
let reverse = false
let intervalId: number;

const showPromotions = () => {
    intervalId = setInterval(autoplay, 4000)
}

const autoplay = () => {
    if (!reverse) {
        if (step < promotionList.length -1) {
            step++
            movement()
        } else {
            reverse = true
        }
    } else {
        if (step > 0) {
            step--
            movement()
        } else {
            reverse = false
        } 
    }
}

const movement = () => {
    let move = 100 / promotionList.length * -1 * step
    promotions.style.transform = `translateX(${move}%)`
}

window.addEventListener('load', showPromotions )

supBtnClose.addEventListener('click', ()=>{
    headerSup.style.display = 'none'
    clearInterval(intervalId)
    window.removeEventListener('load', showPromotions)
})

const companyToggleCollection= document.querySelectorAll('.company__toggle')
const companySvgCollection= document.querySelectorAll('.company__svg')
const companyUlCollection= document.querySelectorAll('.company__ul')

companyToggleCollection.forEach((toggle, i) => {
    toggle.addEventListener('click', () => {
        companyUlCollection[i].classList.toggle('company__ul--expanded')
        
        if (companyUlCollection[i].classList.contains('company__ul--expanded')) {
            companySvgCollection[i].classList.add('company__svg--rotated')
            toggle.ariaExpanded = 'true';
        } else {
            toggle.ariaExpanded = 'false';
            companySvgCollection[i].classList.remove('company__svg--rotated')

        }
    })
});
