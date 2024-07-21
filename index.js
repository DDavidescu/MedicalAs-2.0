// NAVBAR RESPONSIVE
toggleMenuOpen = () => document.body.classList.toggle("open")


// SCROLL REVEAL ANIMATIONS
const sr = ScrollReveal({
    origin: 'left',
    distance: '60px',
    duration: 2500,
    delay: 100,
    // reset: true
})

sr.reveal('.header-content h1')
sr.reveal('.header-content p', {delay: 800})
sr.reveal('.header-content a', {delay: 1500})
sr.reveal('.about__content')
sr.reveal('.why__content h2')
sr.reveal('.why__grid span', {origin: 'bottom', interval: 100})
sr.reveal('.footer__col', {origin: 'bottom', interval: 100})
