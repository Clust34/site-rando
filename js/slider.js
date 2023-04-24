 // on declare les variables
 let slideIndex = 0;
 let slides =document.getElementsByClassName("mySlides");
 // on debug pour controler
 console.log("tableau des slides",slides);

 // on creer une fonction
 function showSlides() {
     // on fait disparaitre tous les slides
     for (i=0; i<slides.length; i++) {
         slides[i].style.display = "none";
     }
     // on affiche le slide courant
     slides[slideIndex].style.display = "block";
     // on debug pour connaitre l'index
     console.log("valeur de l'index",slideIndex);
     // on incremente l'index courant
     slideIndex++;
     // si slideIndex est suppérieur ou egal à la longueur du tableau
     // on le remet a zeros
     if(slideIndex >= slides.length){
         slideIndex = 0;
     }
     // On utilise la fonction avec un conte a rebourg(timeout)
     setTimeout(showSlides,4000);
 }
 // on appel la fonction
showSlides(); 