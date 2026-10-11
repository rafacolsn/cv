# raphaelcolson.be

Site personnel de Raphaël Colson, développeur web full stack.

Construit avec [Astro](https://astro.build) (site statique, sans framework JS côté client).
La version précédente (Gatsby, 2019) reste disponible dans l'historique Git.

## Développer

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # génère dist/
npm run preview  # sert dist/ en local
```

## Structure

- `src/pages/index.astro` : la page et son contenu (frise, aptitudes, langues…)
- `src/styles/global.css` : couleurs, mise en page, animations des formes
- `src/components/Shape.astro` + `icons.js` : les petites formes flottantes
- `src/layouts/Base.astro` : `<head>`, SEO et le script de parallaxe (respecte « réduire les animations »)
- `public/` : favicons, `CNAME`, fichier de vérification Google

## Déploiement

Chaque push sur `master` déclenche `.github/workflows/deploy.yml`, qui construit le site
et le publie sur GitHub Pages. Dans *Settings → Pages*, la source doit être **GitHub Actions**.
