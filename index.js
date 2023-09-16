const header = document.querySelector('.header')

window.onscroll = function() {
    const top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbar-dark');
    }
    else {
        header.classList.remove('navbar-dark');
    }
}


document.addEventListener("DOMContentLoaded", function() {
    function scrollToSection(targetId) {
        const targetSection = document.querySelector(targetId);
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: "smooth"
        });
    }

    const navLinks = document.querySelectorAll("navbar a");
    navLinks.forEach(function(link) {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = link.getAttribute("href");
            scrollToSection(targetId);
        });
    });
});

