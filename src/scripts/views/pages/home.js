import RestaurantSource from '../../data/restaurant-source';
import { createEmptyList, createLoading, createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <main-hero></main-hero>
    <taste-section></taste-section>
    <location-section></location-section>
    <section id="restaurants">
      <h2 class="section__title">Tempat Makan Populer</h2>
      <div id="restaurantsWrapper" class="restaurant__wrapper">
        <div class="loading__wrapper"></div>
      </div>
    </section>
        `;
  },

  async afterRender() {
    const restaurantsWrapper = document.querySelector('#restaurantsWrapper');
    const loading = document.querySelector('.loading__wrapper');
    loading.innerHTML = createLoading();
    try {
      const restaurants = await RestaurantSource.restaurants();
      restaurantsWrapper.removeChild(loading);
      restaurants.forEach((restaurant) => {
        restaurantsWrapper.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } catch (e) {
      console.log('>>> error ', e);
      restaurantsWrapper.innerHTML = createEmptyList();
    }
  },
};

export default Home;
