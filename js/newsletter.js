/**
 * @file Script dédié à la fonctionnalité Newsletter
 */
const newsletter = {
  element: document.querySelector('.newsletter'),
  emailElement: document.getElementById('subscriber-email'),

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
      .addEventListener(
        'click',
        newsletter.show,
        { once: true } // l'écouteur est actif seulement une fois
        // note : ici c'est juste pour un rappel
      );

    // clic sur le bouton de fermeture du bloc
    document.querySelector('.newsletter__close')
      .addEventListener('click', newsletter.hide);

    // scroll de la page
    window.addEventListener('scroll', newsletter.scroll);
  },

  show(event = null) {
    // if (event !== null) {
    if (event) {
      // empêche le comportement par défaut d'un lien
      // = ouverture d'une nouvelle page
      event.preventDefault();
    }

    // mon intention
    // console.log('ouvre la newsletter');
    // ouvre = enlever la classe `newsletter--hidden`
    newsletter.element.classList.remove('newsletter--hidden');

    // je donne le focus au champ de formulaire
    newsletter.emailElement.focus();
  },

  // je ne me sers d'`event`, je ne suis pas obligé de
  // le récupérer en paramètre
  hide() {
    // ferme = ajouter la classe `newsletter--hidden`
    newsletter.element.classList.add('newsletter--hidden');
  },

  scroll() {    
    if (window.scrollY > 300) {
      console.log(window.scrollY);
      newsletter.show();

      // on veut déclencher l'ouverture de la newsletter
      // qu'une seule fois,
      // → après le 1er déclenchement, on supprime l'évènement
      window.removeEventListener('scroll', newsletter.scroll);
    }
  },

};

