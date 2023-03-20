const nav = document.querySelector('#nav-js')
const header = document.querySelector('#header')
const navH = document.querySelector('#nav-js').clientHeight
const headerH = document.querySelector('#header').clientHeight

document.onscroll = function() {
    let scroll = window.scrollY;

    if(scroll > headerH + navH) {
        nav.classList.add('fixed')
        document.body.style.paddingTop = navH + 'px'
    } else {
        nav.classList.remove('fixed')
        document.body.removeAttribute('style')
    }
}



function slidesPlugin(activeSlides = 0) {
    const slides = document.querySelectorAll('.slide-img')

    slides[activeSlides].classList.add('active')

    for(const slide of slides) {
        slide.addEventListener('click', () => {
        clearActiveClasses()

        slide.classList.add('active')
    })
    }

    function clearActiveClasses() {
        slides.forEach((slide) => {
            slide.classList.remove('active')
        })
    }
}
slidesPlugin(0)