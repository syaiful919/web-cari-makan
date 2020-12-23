import RestaurantSource from '../../data/restaurant-source';
import { createLoading } from '../templates/template-creator';

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
        const restaurantItemElement = document.createElement('restaurant-item');
        restaurantItemElement.restaurant = restaurant;
        restaurantsWrapper.appendChild(restaurantItemElement);
      });
    } catch (e) {
      console.log('>>> error ', e);
      restaurantsWrapper.removeChild(loading);
      const emptyListElement = document.createElement('empty-list');
      restaurantsWrapper.appendChild(emptyListElement);
    }
  },
};

export default Home;
