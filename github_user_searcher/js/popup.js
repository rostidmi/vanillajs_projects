document.querySelector('.popup').onclick = function () {
    document.querySelector('.popup__menu').classList.add('activee')
    document.querySelector('.form').classList.add('none')
    document.querySelector('.form__main-wrapper').classList.add('none')
    
  
}
document.querySelector('.close').onclick = function () {
    document.querySelector('.popup__menu').classList.remove('activee')
    document.querySelector('.form').classList.remove('none')
    document.querySelector('.form__main-wrapper').classList.remove('none')
    
  
}