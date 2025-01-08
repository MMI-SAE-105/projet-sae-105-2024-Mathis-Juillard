// On cible les éléments à modifier
const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector(".menu");
const page = document.body;

// Vérifier si les éléments existent avant d'ajouter l'événement
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true"; // Vérifie si le menu est ouvert
    toggle.setAttribute("aria-expanded", !isOpen); // Met à jour l'attribut ARIA
    nav.setAttribute("aria-hidden", isOpen); // Bascule l'état d'accessibilité
    page.classList.toggle("noscroll", !isOpen); // Ajoute/enlève la classe pour bloquer le défilement
  });
}

const closeBtn = document.querySelector(".close-btn");

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    toggle.setAttribute("aria-expanded", "false");
    nav.setAttribute("aria-hidden", "true");
    page.classList.remove("noscroll");
  });
}

// *** CAROUSEL ***
// TODO
document.addEventListener("DOMContentLoaded", function() {
  const carousels = document.querySelectorAll(".carousel__container");

  carousels.forEach(carousel => {
    const prevButton = carousel.closest('.carousel').querySelector(".carousel__button--prev");
    const nextButton = carousel.closest('.carousel').querySelector(".carousel__button--next");
    const premierItem = carousel.querySelector(".carousel__item");
    const scrollAmount = premierItem.clientWidth;

    // Scroll au clic sur le bouton précédent
    prevButton.addEventListener("click", () => {
      carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    // Scroll au clic sur le bouton suivant
    nextButton.addEventListener("click", () => {
      carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });
});



