import { createIcons, icons } from 'lucide';

import { Fancybox } from "@fancyapps/ui/dist/fancybox/";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import { Carousel } from '@fancyapps/ui/dist/carousel/';
import "@fancyapps/ui/dist/carousel/carousel.css";

import { Arrows } from '@fancyapps/ui/dist/carousel/carousel.arrows.js';
import '@fancyapps/ui/dist/carousel/carousel.arrows.css';

import { Dots } from '@fancyapps/ui/dist/carousel/carousel.dots.js';
import '@fancyapps/ui/dist/carousel/carousel.dots.css';

import './style.css';

// Génère tous les <i data-lucide="..."> en SVG
createIcons({ icons });

//Lancement FancyBox
Fancybox.bind("[data-fancybox]", {});

//Lancement Carousel FancyBox
document.querySelectorAll('[data-fancybox-carousel]').forEach((node) => {
  const opts = JSON.parse(node.dataset.fancyboxCarouselOptions);
  Carousel(node, opts, {
    Arrows,
    Dots
  }).init();
});

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
  //todo : handle input validation to close itself
  const searchBtn = document.querySelector('header .search-btn');
  searchBtn.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle("active");
    menu.classList.toggle("searchActive");
  });
});