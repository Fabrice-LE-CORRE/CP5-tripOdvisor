const newsletter = {
  element: document.querySelector('.newsletter'),
  formElement: document.querySelector('.newsletter form'),
  emailElement: document.getElementById('subscriber-email'),

  forbiddenDomains: [
    '@yopmail.com', '@yopmail.fr', '@yopmail.net', '@cool.fr.nf', '@jetable.fr.nf',
    '@courriel.fr.nf', '@moncourrier.fr.nf', '@monemail.fr.nf', '@monmail.fr.nf',
    '@hide.biz.st', '@mymail.infos.st'
  ],

  init: function () {
    newsletter.addEvents();
    newsletter.getEmails(); // Fetch existing emails on init
  },

  addEvents() {
    document.getElementById('newsletter-btn').addEventListener('click', newsletter.show, { once: true });
    document.querySelector('.newsletter__close').addEventListener('click', newsletter.hide);
    window.addEventListener('scroll', newsletter.scroll);
    newsletter.formElement.addEventListener('submit', newsletter.submit);
  },

  show(event = null) {
    if (event) event.preventDefault();
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

  submit: async function (event) {
    event.preventDefault();
    const email = newsletter.emailElement.value;
    let badEmail = false;

    if (!newsletter.validateEmail(email)) {
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
      message.error('Les emails jetables sont interdits ou email non valide', newsletter.formElement);
    } else {
      try {
        const response = await axios.post('http://localhost:3000/newsletters', { email });
        console.log('Email added:', response.data);
        newsletter.hide();
        message.success('<strong>Bienvenue !</strong> Merci de votre intérêt ♥', document.body);
        await newsletter.getEmails();
      } catch (error) {
        console.error('Error adding email:', error);
        message.error('Une erreur est survenue lors de l\'inscription', newsletter.formElement);
      }
    }
  },

  validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  },

  getEmails: async function () {
    try {
      const response = await axios.get('http://localhost:3000/newsletters');
      console.log('Enregistrements des e-mails actuels:', response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des e-mails:', error);
    }
  }
};

export { newsletter };
