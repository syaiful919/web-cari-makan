import RestaurantSource from '../../data/restaurant-source';
import { createEmptyList, createLoading, createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <main-hero></main-hero>
    <section id="taste">
      <article class="taste__content">
        <h2 class="section__title">Cita Rasa Nusantara</h2>
        <p class="taste__tagline">
          Nikmati beragam makanan dan minuman khas dari seluruh Nusantara.
          Jelajahi sekarang juga
        </p>
        <button onclick="">Lihat Menu</button>
      </article>
      <img
        class="taste__image"
        src="images/food.png"
        alt="Makanan nusantara"
      />
    </section>
    <section id="location">
      <img
        class="location__image"
        src="images/city.png"
        alt="Lokasi"
      />
      <article class="location__content">
        <h2 class="section__title">Tersebar di Seluruh Indonesia</h2>
        <p class="location__tagline">
          Kami hadir di lebih dari 1000 kota di seluruh Indonesia. Jika anda
          mencari kami, kami ada dimana-mana
        </p>
        <button onclick="">Lihat Kota</button>
      </article>
    </section>
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
