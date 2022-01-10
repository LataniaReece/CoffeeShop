
// Nav Scrolling
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const windowPosition = window.scrollY > 0;

    header.classList.toggle('scrolling-active', windowPosition);
})
// Menu Toggle
const burgerEl = document.querySelector('.burger');
const exitEl = document.querySelector('.exit')
const navListEl = document.querySelector(".nav-list")
const allNavLinks = document.querySelectorAll(".nav-list li")
const topContentEl = document.querySelector('.top-content')
const scrollDownEl = document.querySelector('.scroll-down')

const navSlide = () => {

    burgerEl.addEventListener("click", () => {
        // hide burger 
        burgerEl.classList.add('hide')

        // show nav
        navListEl.style.transform = "translateX(0%)"

        // Animate Links 
        allNavLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.3}s`;
            }
        })

        // Blur on body and home-top-section 
        document.querySelector('main').classList.add('blur')
        if (document.querySelector('.home-top-section')) {
            document.querySelector('.home-top-section').classList.add('blur')
        }

    })


    exitEl.addEventListener('click', () => {
        // hide navlist
        navListEl.style.transform = "translateX(-100%)"

        // Show burger 
        burgerEl.classList.remove('hide')

        // Remove Blur on body and home-top-section 
        document.querySelector('main').classList.remove('blur')
        if (document.querySelector('.home-top-section')) {
            document.querySelector('.home-top-section').classList.remove('blur')
        }
    })
}

navSlide()