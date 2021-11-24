const navbar = document.getElementById('navbar')
const list = document.getElementsByTagName('a')
const logo = document.getElementById('logo')

window.addEventListener('scroll', ()=> {

    if (window.scrollY > 50 ) {
       for(let i=0; i<list.length;i++) {
            list[i].classList.remove('white_color')
            list[i].classList.add('gold_color')
        };
        navbar.classList.add("nav-colored")
        logo.src = './images/logo-color.png'
        navbar.classList.remove("nav-transparent")
    } 
    else {
        navbar.classList.add("nav-transparent")
        navbar.classList.remove("nav-colored")
        logo.src = './images/logo-white.png'
        for(let i=0; i<list.length;i++) {
            list[i].classList.remove('gold_color')
            list[i].classList.add('white_color')
        };
    }
})