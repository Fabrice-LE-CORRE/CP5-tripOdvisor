# Configurer son site

## ESLint

- installation globale d'ESLint (si ce n'est pas déjà fait)  
    → `npm install --global eslint`

- configuration par projet
    → on crée le fichier `./.eslintrc` avec notre configuration perso

    ```json
    {
      "env": {
        "browser": true,
        "es6": true
      },
      "extends": "eslint:recommended",
      "rules": {
        "indent": ["error", 2],
        "quotes": ["error", "single"],
        "semi": ["error", "always"]
      }
    }
    ```

- listing des erreurs/alertes
    → `eslint ./js/main.js`

- auto-correction (quand possible)
    → `eslint ./js/main.js --fix`

## JSDoc

- installation globale de JSDoc (si ce n'est pas déjà fait)  
    → `npm install --global jsdoc`

- code avec une syntaxe particulière
    → [@use JSDoc](https://jsdoc.app/)

- génération de la documentation
    → `jsdoc ./js/main.js`
