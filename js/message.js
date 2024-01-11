/* eslint-disable no-unused-vars */
/**
 * @file Script dédié à la fonctionnalité Message
 */
const message = {
  /**
   * Ajouter un message dans un bloc parent
   * @param {string} content - Le contenu du message
   * @param {HTMLElement} parent - Où afficher le message ?
   */
  addTo(content, parent, type = 'default') {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', `message--${type}`);
    messageElement.innerHTML = content;

    parent.prepend(messageElement);

    // `setTimeout` exécute du code passé en handler
    // au bout de X ms
    setTimeout(message.remove, 2000);
  },

  success(content, parent) {
    message.addTo(content, parent, 'success');
  },
  error(content, parent) {
    message.addTo(content, parent, 'error');
  },
  // utilisation des fléchées
  warning: (content, parent) => {
    message.addTo(content, parent, 'warning');
  },

  remove() {
    const messages = document.querySelectorAll('.message');

    for (const oldMessage of messages) {
      oldMessage.remove();
    }
  },
};
