import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import { createRestaurantDetailTemplate, createEmptyDetail, createLoading } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
    <div id="restaurantDetail">
    <div class="restaurant_detail__loading__wrapper"></div>
    </div>
    <div id="likeButtonContainer"></div>
          `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantDetail = document.querySelector('#restaurantDetail');
    const loading = document.querySelector('.restaurant_detail__loading__wrapper');
    loading.innerHTML = createLoading();
    try {
      const restaurant = await RestaurantSource.detailRestaurant(url.id);
      restaurantDetail.innerHTML = createRestaurantDetailTemplate(restaurant);
      document.documentElement.scrollTop = 0;

      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        restaurant,
      });
    } catch (e) {
      console.log('>>> error ', e);
      restaurantDetail.innerHTML = createEmptyDetail();
    }
  },
};

export default Detail;
