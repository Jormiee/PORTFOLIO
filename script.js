const body = document.body;
const btnTheme = document.querySelector('.fa-moon');
const btnHamburger = document.querySelector('.fa-bars');
const aboutRole = document.querySelector('.about__role');


const addThemeClass = (bodyClass, btnClass) => {
    body.classList.add(bodyClass);
    btnTheme.classList.add(btnClass);
}


const getBodyTheme = localStorage.getItem('portfolio-theme');
const getBtnTheme = localStorage.getItem('portfolio-btn-theme');


addThemeClass(getBodyTheme, getBtnTheme);


const isDark = () => body.classList.contains('dark');


const setTheme = (bodyClass, btnClass) => {
    body.classList.remove(localStorage.getItem('portfolio-theme'));
    btnTheme.classList.remove(localStorage.getItem('portfolio-btn-theme'));
    addThemeClass(bodyClass, btnClass);
    localStorage.setItem('portfolio-theme', bodyClass);
    localStorage.setItem('portfolio-btn-theme', btnClass);
   
    updateTextColor(isDark());
}


const toggleTheme = () => {
    isDark() ? setTheme('light', 'fa-moon') : setTheme('dark', 'fa-sun');
}


btnTheme.addEventListener('click', toggleTheme);


const displayList = () => {
    const navUl = document.querySelector('.nav__list');
    if (btnHamburger.classList.contains('fa-bars')) {
        btnHamburger.classList.remove('fa-bars');
        btnHamburger.classList.add('fa-times');
        navUl.classList.add('display-nav-list');
    } else {
        btnHamburger.classList.remove('fa-times');
        btnHamburger.classList.add('fa-bars');
        navUl.classList.remove('display-nav-list');
    }
}


btnHamburger.addEventListener('click', displayList);


const scrollUp = () => {
    const btnScrollTop = document.querySelector('.scroll-top');
    if (body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        btnScrollTop.style.display = 'block';
    } else {
        btnScrollTop.style.display = 'none';
    }
}


document.addEventListener('scroll', scrollUp);


const updateTextColor = (darkMode) => {
    if (darkMode) {
        aboutRole.classList.add('dark-text');
    } else {
        aboutRole.classList.remove('dark-text');
    }
}


updateTextColor(isDark());


document.addEventListener("DOMContentLoaded", function() {
    var typed = new Typed(".about__role", {
        strings: [
            "<span class='role-text'>A Junior Front End <span class='developer-text'>Developer</span></span>",
            "<span class='role-text'>A Graphic <span class='designer-text'>Designer</span></span>"
        ],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true,
        startDelay: 1000, 
        showCursor: false,
        contentType: 'html' 
    });
});
