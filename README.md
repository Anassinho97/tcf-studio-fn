# TCF Studio — Application PWA (GitHub Pages)

**Application de préparation au TCF Tout Public**, issue de la version V3 de TCF Studio : **601 questions originales**, **36 cours détaillés**, niveaux **A1 à C2**, entraînement et examen blanc, résultats et progression sur le navigateur.

## Publier gratuitement avec GitHub Pages

1. Connectez-vous sur [GitHub](https://github.com) et créez un **nouveau dépôt public** nommé par exemple `tcf-studio`.
2. Ouvrez le dépôt → **Add file → Upload files**. Décompressez d'abord l'archive fournie puis importez **les fichiers et le dossier `assets/`**, pas le ZIP : `index.html`, `manifest.webmanifest`, `service-worker.js`, `README.md`, `.nojekyll` et le dossier `assets/`.
3. Cliquez sur **Commit changes**.
4. Ouvrez **Settings → Pages**.
5. Sous **Build and deployment**, choisissez **Deploy from a branch**, branche `main`, dossier `/(root)`, puis **Save**.
6. Une fois la publication terminée, l'application est accessible à `https://VOTRE-PSEUDO.github.io/tcf-studio/` (remplacez le pseudo et le nom du dépôt).

> Pour une application sur GitHub Pages, le dépôt doit être public avec la plupart des comptes personnels gratuits. Le contenu publié devient accessible à tous. Évitez d'y placer des informations privées.

## Utiliser comme application installée (PWA)

- **Chrome/Edge sur PC :** sur l'adresse en HTTPS, utilisez le bouton « Installer l’application » (s'il est proposé) ou l'icône d'installation du navigateur.
- **Android :** Chrome → menu ⋮ → « Installer l'application » / « Ajouter à l'écran d'accueil ».
- **iPhone :** Safari → Partager → « Sur l'écran d'accueil ».
- **Hors connexion :** ouvrez une première fois l'app **en ligne** pour remplir le cache. Ensuite, les cours et QCM peuvent être consultés sans internet sur cet appareil.

## Structure du projet

```text
index.html              Interface de l'application
assets/styles.css       Design d'origine et contrôles PWA
assets/data.js          Banque de questions + cours V3
assets/app.js           Navigation, quiz, suivi et cours
assets/pwa.js           Enregistrement du service worker / installation
assets/icon-192.png     Icône de l'application
assets/icon-512.png     Grande icône pour installation
manifest.webmanifest    Configuration de l'application installable
service-worker.js       Mise en cache pour usage hors ligne
.nojekyll               Publier directement les fichiers avec Pages
```

## Tester en local

Ouvrez directement `index.html` dans votre navigateur pour consulter l'application. Pour **tester l'installation PWA et le cache hors ligne**, il faut un serveur local (par exemple, depuis ce dossier : `python -m http.server 8000`, puis `http://localhost:8000/`) ou la version GitHub Pages en HTTPS.

## Données et confidentialité

- Aucun compte et aucun serveur : les résultats et chapitres révisés sont enregistrés dans le `localStorage` **du navigateur de l'appareil**.
- Les résultats **ne sont pas synchronisés entre appareils**, même avec la même adresse GitHub Pages.
- Effacer les données du site peut effacer l'historique et la progression.
- Le site n'est pas affilié à France Éducation international ou à TCFBlanc.com ; il ne fournit pas de score officiel.

## Modifier le contenu

Les cours et questions sont dans `assets/data.js`. Le design est dans `assets/styles.css` et la logique dans `assets/app.js`. Mettez les fichiers à jour dans votre dépôt GitHub ; les changements deviennent visibles après le redéploiement de Pages. Quand vous livrez une nouvelle version majeure, changez également `CACHE_NAME` dans `service-worker.js`.
