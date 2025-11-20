## Pour toi mon petit Jérôme

J'ai utilisé Vite pour ce projet afin de gagner du temps de dev et mise en place, faut pas déconner.
Pour lancer le projet en local (prérequis : avoir Node installé sur ton Mac) :

```sh
npm install
npm run dev
```

Tu auras un lien vers ton localhost avec le port associé qui s'affichera dans le terminal. Tu peux aussi build le projet avec `npm run build`, il sera compilé dans un sous-dossier dist.

J'ai codé le CSS en PostCSS pour avoir le nesting (indispensable...), tu devras donc installer l'extension "PostCSS Language Support" et associer cette dernière aux fichiers CSS dans VSCode :

```json
"files.associations": {
  "*.css": "postcss"
}
```