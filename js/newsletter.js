/**
 * @file Script dédié à la fonctionnalité Newsletter
 */
const newsletter = {
  element: document.querySelector('.newsletter'),

  /*
    Dans un objet, on ajoute des PROPRIÉTÉS en utilisant un
    système de « clé/valeur »

    La clé peut être :
    - une chaîne de caractères
    - un nombre (plus rare)

    La valeur peut-être de tout type !
    - string, number, boolean, null, undefined…
    - array, object
    - function → objectName.functionName()
  */
  init: function () {
    // console.log('coucou de la part de newsletter');
    newsletter.addEvents();
  },

  /*
    Avec ES6 (ES2015), on a une autre syntaxe pour déclarer
    une MÉTHODE (fonction dans un objet) :
    on peut utiliser directement les FUNCTION EXPRESSION
    le nom de la fonction sans le mot-clé `function`
  */
  addEvents() {
    console.log('addEvents');
    console.log(document.getElementById('newsletter-btn'));

    // clic sur l'élément de menu
    document.getElementById('newsletter-btn')
      .addEventListener('click', newsletter.open);
  },

  open(event) {
    // empêche le comportement par défaut d'un lien
    // = ouverture d'une nouvelle page
    event.preventDefault();

    // mon intention
    // console.log('ouvre la newsletter');
    // ouvre = enlever la classe `newsletter--hidden`
    newsletter.element.classList.remove('newsletter--hidden');
  },
};

