# Portfolio — Sacha Meunier

Site statique (HTML / CSS / JS, aucune dépendance à installer) prêt à être publié sur GitHub Pages.

## Structure

```
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── README.md
```

## Mettre le site en ligne avec GitHub Pages

**Option A — nouveau dépôt dédié**

1. Crée un dépôt sur GitHub (public), par exemple `portfolio`.
2. Depuis ce dossier, en local :
   ```bash
   git init
   git add .
   git commit -m "Premier commit du portfolio"
   git branch -M main
   git remote add origin https://github.com/<ton-pseudo>/portfolio.git
   git push -u origin main
   ```
3. Sur GitHub : **Settings → Pages** → Source : `Deploy from a branch` → Branch : `main` / dossier `/ (root)` → **Save**.
4. Le site sera disponible après 1–2 minutes à :
   `https://<ton-pseudo>.github.io/portfolio/`

**Option B — site personnel principal**

Si tu veux l'adresse `https://<ton-pseudo>.github.io` directement (sans `/portfolio/` à la fin), nomme le dépôt **exactement** `<ton-pseudo>.github.io`. Dans ce cas, Pages se configure automatiquement, sans réglage supplémentaire dans Settings.

## Checklist — à personnaliser avant publication

- [ ] **Ajouter tes cartes dans la Cartothèque** : dépose tes images sous `assets/cartotheque/carte-01.jpg`, `carte-02.jpg`, etc. (6 emplacements prévus, catégorisés Cartes thématiques / Analyses SIG / Infographies). Tant qu'un fichier n'existe pas, la carte affiche "Carte à venir" — rien ne casse. Remplace aussi les titres `[Titre de la carte X]` par les vrais titres.
- [ ] Adapter les descriptions de la section **Prestations** à ce que tu proposes réellement (et ajouter tarifs/modalités si tu veux).
- [ ] Remplacer `ton.email@example.com` par ta vraie adresse (section Contact).
- [ ] Remplacer les liens LinkedIn / GitHub (`ton-profil`) par les tiens.
- [ ] Compléter le paragraphe « À propos » (formation, établissement, objectifs).
- [ ] Renseigner les dates et le nom de ta formation dans « Parcours ».
- [ ] Remplacer les liens `#` des cartes projets par tes vrais dépôts / démos / captures d'écran.
- [ ] Vérifier/adapter le titre `<title>` et la balise `<meta name="description">` dans `index.html` si besoin.
- [ ] **Ajouter la photo du hero** : dépose une image sous `assets/hero.jpg` (photo de terrain, de l'Isère, ou de toi en mission). Tant que ce fichier n'existe pas, un simple aplat gris s'affiche à la place — rien ne casse. Résolution conseillée : au moins 1200 px sur le plus petit côté ; l'image se recadre automatiquement (`object-fit: cover`), toute orientation convient.
- [ ] (Optionnel) Remplacer le pictogramme de silhouette dans la section Contact par une vraie photo : dépose l'image dans `assets/`, remplace le `<svg>` du bloc `.contact-photo` par une balise `<img src="assets/photo.jpg" alt="Sacha Meunier">`.

## Personnalisation rapide

- **Couleurs** : toutes les couleurs sont définies en haut de `css/style.css`, dans le bloc `:root { ... }` (variables `--paper`, `--ink`, `--river`, `--silt`, `--contact-bg`, etc.). Modifier une variable met à jour tout le site.
- **Polices** : `Space Grotesk` (titres et boutons, en majuscules) et `IBM Plex Mono` (petits labels/dates) sont chargées depuis Google Fonts en haut de `index.html`.
- **La photo du hero** (le panneau diagonal à droite du nom) se change simplement en remplaçant le fichier `assets/hero.jpg` par une autre image — pas besoin de toucher au code.
- **Ajouter une section ou un projet** : dupliquer le bloc `<article class="project-card">...</article>` dans `index.html` pour ajouter un projet.

## Guide de modification rapide

**Éditer** : n'importe quel éditeur de texte (VS Code recommandé). **Prévisualiser** : double-clique sur `index.html`, il s'ouvre dans le navigateur — rafraîchis (F5) après chaque modification, pas besoin de pousser sur GitHub pour voir le résultat.

- **Modifier une phrase** : Ctrl+F dans `index.html`, cherche le texte, remplace, enregistre.
- **Ajouter une carte de projet** : copie un bloc `<article class="project-card">...</article>` entier, colle-le juste après (dans `.projects-grid`), modifie titre/texte/tags/lien.
- **Ajouter une photo** : dépose l'image dans un dossier `assets/`, insère `<img src="assets/mon-image.jpg" alt="Description">` où tu veux — elle s'adapte automatiquement à sa colonne.
- **Ajouter une carte à la Cartothèque** : dépose l'image dans `assets/cartotheque/`, puis dans `index.html`, copie un bloc entier `<button class="map-card" data-category="...">...</button>` (dans `<div id="mapGrid">`), colle-le à la suite, et modifie :
  - le `src` de l'image
  - le texte `[Titre de la carte X]` (à deux endroits : `alt=` et `.map-card-caption`)
  - `data-category` : `thematique`, `sig` ou `infographie` (détermine dans quel onglet de filtre la carte apparaît)
  
  Aucune autre modification nécessaire : la lightbox (agrandissement + navigation précédent/suivant) et les filtres fonctionnent automatiquement avec toute nouvelle carte ajoutée.
- **Ajouter une section entière** : colle ce squelette avant `<footer>` :
  ```html
  <section class="section" id="ma-section">
    <div class="wrap">
      <h2>Titre</h2>
      <p>Contenu.</p>
    </div>
  </section>
  ```
  puis ajoute `<a href="#ma-section">Titre</a>` dans le menu `<nav id="nav">`. Utilise `class="section alt"` pour alterner le fond gris clair.
- **Publier les changements** : `git add .` puis `git commit -m "message"` puis `git push` (dans Git Bash, depuis le dossier du projet).

## Note de style

Cette version s'inspire de la mise en page du portfolio d'Antoine Soumet (grands titres noirs en majuscules, boutons plats, section contact en aplat sombre, compétences en icônes cerclées) tout en gardant une identité propre : palette bleu-vert « rivière », motif de lignes bathymétriques signature, et contenu spécifique au parcours de Sacha Meunier.

## Formulaire de contact (optionnel)

Le site est statique et n'a pas de serveur : le bouton de contact utilise un simple lien `mailto:`. Si tu veux un vrai formulaire, un service gratuit comme [Formspree](https://formspree.io/) permet d'ajouter un `<form>` qui envoie les messages par email sans backend à gérer.
