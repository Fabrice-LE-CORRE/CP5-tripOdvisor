/* eslint-disable no-undef */
/**
 * @file Script dédié à la fonctionnalité Newsletter
 */
export const newsletter = {
  element: document.querySelector('.newsletter'),
  formElement: document.querySelector('.newsletter form'),
  emailElement: document.getElementById('subscriber-email'),

  forbiddenDomains: [
    '@yopmail.com',
    '@yopmail.fr',
    '@yopmail.net',
    '@cool.fr.nf',
    '@jetable.fr.nf',
    '@courriel.fr.nf',
    '@moncourrier.fr.nf',
    '@monemail.fr.nf',
    '@monmail.fr.nf',
    '@hide.biz.st',
    '@mymail.infos.st',
  ],

  init: function () {
    newsletter.addEvents();
  },

  addEvents() {
    document.getElementById('newsletter-btn')
      .addEventListener(
        'click',
        newsletter.show,
        { once: true }
      );

    document.querySelector('.newsletter__close')
      .addEventListener('click', newsletter.hide);

    window.addEventListener('scroll', newsletter.scroll);

    newsletter.formElement
      .addEventListener('submit', newsletter.submit);
  },

  show(event = null) {
    if (event) {
      event.preventDefault();
    }
    newsletter.element.classList.remove('newsletter--hidden');
    newsletter.emailElement.focus();
  },

  hide() {
    newsletter.element.classList.add('newsletter--hidden');
  },

  scroll() {    
    if (window.scrollY > 300) {
      newsletter.show();
      window.removeEventListener('scroll', newsletter.scroll);
    }
  },

  submit(event) {
    const email = newsletter.emailElement.value;
    let badEmail = false;

    if (!this.validateEmail(email)) {
      badEmail = true;
    } else {
      for (const domain of newsletter.forbiddenDomains) {
        if (email.includes(domain)) {
          badEmail = true;
          break;
        }
      }
    }

    if (badEmail) {
      event.preventDefault();
      message.error('Les emails jetables sont interdits ou email non valide', newsletter.formElement);
    } else {
      newsletter.hide();
      message.success('<strong>Bienvenue !</strong> Merci de votre intérêt ♥', document.body);
    }
  },

  validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
};
