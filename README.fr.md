# IMC

## Utilisation

Cette extension Firefox permet de calculer l'IMC (Indice de Masse Corporelle) instantanément en fonciton de deux variables : la taille (en centimètres) et le poids (en kilogrammes).

## Développement

Le code Javascript est écrit avec [Vue.js](https://vuejs.org) et un bundle est généré grâce à [Vite](https://vitejs.dev).
NodeJS (version >= 14) est nécessaire pour le développement.

Les fichiers source Javascript et CSS sont dans le dossier `src`. Les fichiers générés sont dans le dossier `addon`. Il contient les fichiers destinés à l'extension de Firefox. Ce dossier n'est pas présent sur le dépôt Git, son contenu est généré par la commande `npm run build`.

Les fichiers générés sont :
* le dossier `img` contient les images (logos)
* `assets/app-[CODE_GENERE].js`
* `assets/style-[CODE_GENERE].css` 
* `index.html`
* `manifest.json`

Installer d'abord les dépendances:

`npm install`

Pour construire les fichiers Javascript et CSS et générer les images et le manifeste :

`npm run build`

Pour démarrer le serveur de développement :

`npm run dev`

Le package pour l'addon est fait à partir du dosser `addon`, il contient les fichiers statiques, le manifest et l'HTML.

## Langues

La documentation en anglais est [ici](README.md).
