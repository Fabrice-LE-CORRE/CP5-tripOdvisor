/**
 * @file Chef d'orchestre : appelle les autres scripts
 */
// on attend que le DOM soit chargé pour exécuter le handler (`function () {}`)
window.addEventListener('DOMContentLoaded', function () {
  // une fois qu'on est prêt,
  // on lance le script pour gérer la newsletter
  newsletter.init();  
});
