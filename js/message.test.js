// message.test.js
const message = require('./message');

describe('Message Module', () => {
  let parent;

  beforeEach(() => {
    // Set up our document body
    document.body.innerHTML = '<div id="parent"></div>';
    parent = document.getElementById('parent');
  });

  test('should add a default message', () => {
    message.addTo('Hello World', parent);
    const msg = parent.querySelector('.message');
    expect(msg).not.toBeNull();
    expect(msg.classList.contains('message--default')).toBe(true);
    expect(msg.innerHTML).toBe('Hello World');
  });

  test('should add a success message', () => {
    message.success('Operation Successful', parent);
    const msg = parent.querySelector('.message--success');
    expect(msg).not.toBeNull();
    expect(msg.innerHTML).toBe('Operation Successful');
  });

  test('should add an error message', () => {
    message.error('An error occurred', parent);
    const msg = parent.querySelector('.message--error');
    expect(msg).not.toBeNull();
    expect(msg.innerHTML).toBe('An error occurred');
  });

  test('should add a warning message', () => {
    message.warning('This is a warning', parent);
    const msg = parent.querySelector('.message--warning');
    expect(msg).not.toBeNull();
    expect(msg.innerHTML).toBe('This is a warning');
  });

  test('should remove messages after timeout', () => {
    jest.useFakeTimers();
    message.addTo('Temporary message', parent);
    jest.runAllTimers();
    const msg = parent.querySelector('.message');
    expect(msg).toBeNull();
    jest.useRealTimers();
  });

  test('should remove messages manually', () => {
    message.addTo('Hello World', parent);
    message.remove();
    const msg = parent.querySelector('.message');
    expect(msg).toBeNull();
  });
});
