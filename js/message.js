const message = {
  addTo(content, parent, type = 'default') {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', `message--${type}`);
    messageElement.innerHTML = content;
    parent.prepend(messageElement);
    setTimeout(message.remove, 5000); // Temps de suppression du message après 5 secondes
  },
  success(content, parent) {
    message.addTo(content, parent, 'success');
  },
  error(content, parent) {
    message.addTo(content, parent, 'error');
  },
  warning(content, parent) {
    message.addTo(content, parent, 'warning');
  },
  remove() {
    const messages = document.querySelectorAll('.message');
    messages.forEach((oldMessage) => oldMessage.remove());
  },
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = message;
} else {
  window.message = message;
}
