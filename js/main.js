console.log('coucou');

// ce code est exécuté tout de suite
// → `#newsletter-btn` n'existe pas encore
console.log(5, document.getElementById('newsletter-btn')); // output: null

// on attend que le DOM soit chargé pour exécuter le handler (`function () {}`)
window.addEventListener('DOMContentLoaded', function () {
  console.log(8, document.getElementById('newsletter-btn'));
});

/*
  D'autres stratégies de chargement d'un script existent :
  - async
  - defer

  → voir `__cours/JS_strategie_chargement.png` et la doc !!!
*/
