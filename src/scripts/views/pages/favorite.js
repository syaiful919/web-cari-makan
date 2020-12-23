import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createLoading, createEmptyFavTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <fav-hero></fav-hero>
    <section id="restaurants">
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
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    if (restaurants.length === 0) {
      restaurantsWrapper.innerHTML = createEmptyFavTemplate();
    } else {
      restaurantsWrapper.removeChild(loading);
      restaurants.forEach((restaurant) => {
        const restaurantItemElement = document.createElement('restaurant-item');
        restaurantItemElement.restaurant = restaurant;
        restaurantsWrapper.appendChild(restaurantItemElement);
      });
    }
  },
};

export default Favorite;
