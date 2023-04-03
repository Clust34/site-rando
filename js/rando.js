// On récupère l'élément HTML balise a pour pouvoir ajouter la classe open au click
let burgerBtn = document.querySelector('.link-burger');

// on récupère l'élément HTML balise ul avec le menu pour ajouter la classe
// open au click sur l'élément burgerBtn
let navbarLinks = document.querySelector('.navbar-links ul');

if(burgerBtn && navbarLinks) {
    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('open');
        navbarLinks.classList.toggle('open');
    });
}
