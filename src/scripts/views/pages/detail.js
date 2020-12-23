/* eslint-disable no-alert */
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

      const reviewForm = document.querySelector('#reviewInput');
      if (reviewForm != null) {
        const reviewButton = document.querySelector('#reviewButton');
        const reviewerName = document.querySelector('#reviewerName');
        const reviewContent = document.querySelector('#reviewContent');

        reviewButton.addEventListener('click', async () => {
          if (reviewerName.value && reviewContent.value) {
            try {
              const review = {
                id: restaurant.id,
                name: reviewerName.value,
                review: reviewContent.value,
              };
              const response = await RestaurantSource.giveReview(review);
              restaurant.customerReviews = response.customerReviews;
              reviewerName.value = '';
              reviewContent.value = '';
              restaurantDetail.innerHTML = createRestaurantDetailTemplate(restaurant);
            } catch (e) {
              console.log('>>> error ', e);
              alert('terjadi kesalahan, coba beberapa saat lagi');
            }
          } else {
            alert('harap mengisi nama dan review');
          }
        });
      }
    } catch (e) {
      console.log('>>> error ', e);
      restaurantDetail.innerHTML = createEmptyDetail();
    }
  },
};

export default Detail;
