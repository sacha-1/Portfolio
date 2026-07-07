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

- [ ] Remplacer `ton.email@example.com` par ta vraie adresse (section Contact).
- [ ] Remplacer les liens LinkedIn / GitHub (`ton-profil`) par les tiens.
- [ ] Compléter le paragraphe « À propos » (formation, établissement, objectifs).
- [ ] Renseigner les dates et le nom de ta formation dans « Parcours ».
- [ ] Remplacer les liens `#` des cartes projets par tes vrais dépôts / démos / captures d'écran.
- [ ] Vérifier/adapter le titre `<title>` et la balise `<meta name="description">` dans `index.html` si besoin.
- [ ] (Optionnel) Remplacer le pictogramme de silhouette dans la section Contact par une vraie photo : dépose l'image dans un dossier `assets/`, remplace le `<svg>` du bloc `.contact-photo` par une balise `<img src="assets/photo.jpg" alt="Sacha Meunier">`.

## Personnalisation rapide

- **Couleurs** : toutes les couleurs sont définies en haut de `css/style.css`, dans le bloc `:root { ... }` (variables `--paper`, `--ink`, `--river`, `--silt`, `--contact-bg`, etc.). Modifier une variable met à jour tout le site.
- **Polices** : `Space Grotesk` (titres et boutons, en majuscules) et `IBM Plex Mono` (petits labels/dates) sont chargées depuis Google Fonts en haut de `index.html`.
- **Le motif du hero** (les lignes courbes à droite du nom) est un ensemble de `<polyline>` SVG généré par script, dans le style d'un profil bathymétrique/topographique. Pour le régénérer avec une autre forme, il suffit de remplacer le bloc `<svg>` dans `.hero-visual`.
- **Ajouter une section ou un projet** : dupliquer le bloc `<article class="project-card">...</article>` dans `index.html` pour ajouter un projet.

## Note de style

Cette version s'inspire de la mise en page du portfolio d'Antoine Soumet (grands titres noirs en majuscules, boutons plats, section contact en aplat sombre, compétences en icônes cerclées) tout en gardant une identité propre : palette bleu-vert « rivière », motif de lignes bathymétriques signature, et contenu spécifique au parcours de Sacha Meunier.

## Formulaire de contact (optionnel)

Le site est statique et n'a pas de serveur : le bouton de contact utilise un simple lien `mailto:`. Si tu veux un vrai formulaire, un service gratuit comme [Formspree](https://formspree.io/) permet d'ajouter un `<form>` qui envoie les messages par email sans backend à gérer.
