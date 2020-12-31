import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

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
    const loadingElement = document.createElement('loading-circle');
    loading.appendChild(loadingElement);
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    restaurantsWrapper.removeChild(loading);
    if (restaurants.length === 0) {
      const emptyElement = document.createElement('empty-fav');
      restaurantsWrapper.appendChild(emptyElement);
    } else {
      restaurants.forEach((restaurant) => {
        const restaurantItemElement = document.createElement('restaurant-item');
        restaurantItemElement.restaurant = restaurant;
        restaurantsWrapper.appendChild(restaurantItemElement);
      });
    }
  },
};

export default Favorite;
