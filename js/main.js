import { newsletter } from './newsletter.js';
import { theme } from './theme.js';

window.addEventListener('DOMContentLoaded', function () {
  newsletter.init();
  document.getElementById('theme-switch').addEventListener('click', theme.toggleDark);
  getPosts();
  document.getElementById('post-form').addEventListener('submit', addPost);
});

const getPosts = async () => {
  try {
    const response = await axios.get('http://localhost:3000/posts');
    console.log('Posts:', response.data);
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
    document.getElementById('post-title').value = '';
  } catch (error) {
    console.error('Error adding post:', error);
  }
};
