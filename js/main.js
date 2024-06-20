/* eslint-disable no-undef */
/**
 * @file Chef d'orchestre : appelle les autres scripts
 */
import { newsletter } from './newsletter.js';
import { theme } from './theme.js';

// on attend que le DOM soit chargé pour exécuter le handler (`function () {}`)
window.addEventListener('DOMContentLoaded', function () {
  // une fois qu'on est prêt,
  // on lance le script pour gérer la newsletter
  newsletter.init();

  // Switch theme
  document.getElementById('theme-switch').addEventListener('click', theme.toggleDark);

  // Fetch posts and add new post
  getPosts();
  document.getElementById('post-form').addEventListener('submit', addPost);
});

const getPosts = async () => {
  try {
    const response = await axios.get('http://localhost:3000/posts');
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
};

const addPost = async (event) => {
  event.preventDefault();
  const title = document.getElementById('post-title').value;

  try {
    const response = await axios.post('http://localhost:3000/posts', { title });
    console.log('Post added:', response.data);
    document.getElementById('post-title').value = ''; // Clear the input field
  } catch (error) {
    console.error('Error adding post:', error);
  }
};
