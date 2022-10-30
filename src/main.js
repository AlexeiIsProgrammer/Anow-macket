const burgerIcon = document.querySelector('.menu__icon')

burgerIcon.addEventListener('click', function() {
    if(burgerIcon.classList.contains('_active')) {
        burgerIcon.classList.remove('_active')
    }
    else {
        burgerIcon.classList.add('_active')
    }
})