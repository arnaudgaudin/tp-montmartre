import { createIcons, icons } from 'lucide';
import './style.css';

// Génère tous les <i data-lucide="..."> en SVG
createIcons({ icons });

//au chargement du DOM
document.addEventListener("DOMContentLoaded", () => {

  //gestion des liens actifs dans les menus
  const currentPath = window.location.pathname;
  // Sélectionne tous les liens de navigation correspondant au chemin actuel
  const links = Array.from(document.querySelectorAll("nav a")).filter(link => link.getAttribute("href") === currentPath);
  links.forEach(link => link.classList.add("active"));

  //gestion du menu responsive
  const menuToggle = document.querySelector(".menu-toggle .menu-toggle-btn");
  const menu = document.querySelector("header nav ul");

  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("open");
  });

  // Optionnel : fermer le menu si on clique sur un lien
  menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 960) {
        menu.classList.remove("open");
      }
    });
  });

  //gestion du champ de recherche dans la navbar
  const searchBtn = document.querySelector('header .search-btn');
  searchBtn.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle("active");
  });
});