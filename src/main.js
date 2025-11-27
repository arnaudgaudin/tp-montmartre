import { createIcons, icons } from 'lucide';
import './style.css';

// Génère tous les <i data-lucide="..."> en SVG
createIcons({ icons });


//gestion des liens actifs dans les menus
document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname;
  // Sélectionne tous les liens de navigation correspondant au chemin actuel
  const links = Array.from(document.querySelectorAll("nav a")).filter(link => link.getAttribute("href") === currentPath);
  links.forEach(link => link.classList.add("active"));
});