import CONFIG from '../../globals/config';

class RestaurantItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }

        .restaurant__item {
          width: 100%;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          border-radius: 5px;
          display: block;
          position: relative;
          overflow: hidden;
        }

        .restaurant-item__thumbnail {
          width: 100%;
          position: relative;
        }

        .restaurant-item__thumbnail img {
          width: 100%;
          height: 200px;
          display: block;
          position: relative;
          object-fit: cover;
        }

        .restaurant-item__main {
          position: absolute;
          z-index: 2;
          left: 0;
          bottom: 0;
          width: 100%;
          display: block;
          color: white;
          text-align: start;
          padding: 16px;
        }

        .restaurant-item__title {
          font-size: 18px;
          color: white;
          font-weight: 500;
          text-shadow: 0 0 5px rgb(0, 0, 0), 0 0 10px rgb(0, 0, 0);
          text-decoration: none;
        }

        .restaurant-item__subtitle {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          text-shadow: 0 0 5px rgb(0, 0, 0), 0 0 10px rgb(0, 0, 0);
        }

        .restaurant-item__city {
          font-size: 14px;
          font-weight: 500;
        }

        .restaurant-item__rating {
          font-size: 14px;
          font-weight: 600;
          color: #edd434;
          text-shadow: 0 0 5px rgb(0, 0, 0), 0 0 10px rgb(0, 0, 0);
        }

        .restaurant-item__description {
          display: block;
          text-align: start;
          margin: 16px;

          overflow: hidden;
          max-height: 9em;
          line-height: 1.8em;
        }
      
      </style>

      <article class="restaurant__item">
        <div class="restaurant-item__thumbnail">
          <img
            src="${`${CONFIG.BASE_IMAGE_URL}/medium/${this._restaurant.pictureId}`}"
            alt="${this._restaurant.name}"
            crossorigin="anonymous"
          />
          <div class="restaurant-item__main">
            <a href="${`/#/detail/${this._restaurant.id}`}" class="restaurant-item__title">${this._restaurant.name}</a>
            <div class="restaurant-item__subtitle">
              <h3 class="restaurant-item__city">${this._restaurant.city}</h3>
              <div class="restaurant-item__rating">⭐ ${this._restaurant.rating}</div>
            </div>
          </div>
        </div>
        <p class="restaurant-item__description">${this._restaurant.description}</p>
      </article>

      `;
  }
}

customElements.define('restaurant-item', RestaurantItem);
