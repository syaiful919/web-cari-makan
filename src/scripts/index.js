import 'regenerator-runtime'; /* for async await transpile */
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '../styles/main.css';
import '../styles/responsive.css';
import '../styles/detail.css';
import '../styles/restaurant_item.css';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  drawerItems: document.querySelectorAll('.nav__item a'),
  header: document.querySelector('header'),
  logo: document.querySelector('.logo'),
  content: document.querySelector('#mainContent'),
  skipLink: document.querySelector('#skipLink'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
