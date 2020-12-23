import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
<section class="restaurant-detail-main">
  <img
  src="${`${CONFIG.BASE_IMAGE_URL}/large/${restaurant.pictureId}`}"
  alt="${restaurant.name}"
  crossorigin="anonymous"
  class="restaurant-detail__image"
/>
<div class="restaurant-detail-main__mask-up"></div>
<div class="restaurant-detail-main__mask"></div>
<div class="restaurant-detail-main__description">
  <h1 class="restaurant-detail-main__title">${restaurant.name}</h1>
  <p class="restaurant-detail-main__subtitle">${restaurant.address}, ${
  restaurant.city
}</p>
  <p class="restaurant-detail-main__subtitle">${restaurant.categories
    .map(
      (category) => `
    <span>${category.name}</span>
  `,
    )
    .join(' - ')}</p>
  <div class="restaurant-detail__rating">
  ${Array.from(Array(Math.floor(restaurant.rating)).keys())
    .map(
      () => `
  <span class="fa fa-star rating__checked"></span>
  `,
    )
    .join('')}
   
  </div>
</div>
</section>
<section class="restaurant-detail__wrapper">
  <article>
    <h2 class="restaurant-detail__section-title">Tentang</h2>
    <p class="restaurant-detail__about">${restaurant.description}</p>
  </article>
  <article class="restaurant-detail__menus">
    <h2 class="restaurant-detail__section-title">Menu</h2>
    <div class="restaurant-detail__menu">
      <h3 class="restaurant-detail__menu-title">Makanan</h3>
      ${restaurant.menus.foods
    .map(
      (food) => `<li class="restaurant-detail__menu-list">${food.name}</li>`,
    )
    .join('')}
    </div>
    <div class="restaurant-detail__menu">
      <h3 class="restaurant-detail__menu-title">Minuman</h3>
      ${restaurant.menus.drinks
    .map(
      (drink) => `<li class="restaurant-detail__menu-list">${drink.name}</li>`,
    )
    .join('')}
    </div>
  </article>
  <article class="restaurant-detail__reviews">
    <h2 class="restaurant-detail__section-title">Reviews</h2>
    <div>
    ${restaurant.customerReviews.map(
    (review) => `<div class="restaurant-detail__review-list">
    <div class="restaurant-detail__review-list__avatar">${review.name.toUpperCase().match(/\b([A-Z])/g).join('')}</div>
    <div class="restaurant-detail__review-list__content">
      <p class="restaurant-detail__review-list__name">${review.name}</p>
      <p class="restaurant-detail__review-list__date">${review.date}</p>
      <p class="restaurant-detail__review-list__review">${review.review}</p>
    </div>
  </div>`,
  ).join('')}
    </div>
    <div id="reviewInput" class="restaurant_detail__review-input">
      <input id="reviewerName" aria-label="Nama"  placeholder="Nama" type="text">
      <textarea id="reviewContent" aria-label="Review"  placeholder="Tulis reviewmu disini"></textarea>
      <button id="reviewButton">Kirim Review</button>
    </div>
  </article>
</section>
`;

const createRestaurantItemTemplate = (restaurant) => `
<article class="restaurant__item">
  <div class="restaurant-item__thumbnail">
    <img
      src="${`${CONFIG.BASE_IMAGE_URL}/medium/${restaurant.pictureId}`}"
      alt="${restaurant.name}"
      crossorigin="anonymous"
    />
    <div class="restaurant-item__main">
      <a href="${`/#/detail/${restaurant.id}`}" class="restaurant-item__title">${
  restaurant.name
}</a>
      <div class="restaurant-item__subtitle">
        <h3 class="restaurant-item__city">${restaurant.city}</h3>
        <div class="restaurant-item__rating">⭐ ${restaurant.rating}</div>
      </div>
    </div>
  </div>
  <p class="restaurant-item__description">${restaurant.description}</p>
</article>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="tambah ke favorit" id="likeButton" class="like">
    <img width="24" height="24" src="svg/heart_border.svg" alt="tambah ke favorit"/>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="hapus dari favorit" id="likeButton" class="like">
    <img width="24" height="24" src="svg/heart.svg" alt="hapus dari favorit"/>
  </button>
`;

const createEmptyFavTemplate = () => `
<div class="empty-fav">
  <img 
      class="empty-plate" 
      src="images/plate.png"
      alt="piring kosong"
    />
  <p class="empty-fav__message">Belum ada favorit</p>
</div>
  
`;

const createEmptyDetail = () => `
<div class="empty-detail">
  <img 
      class="empty-detail__image" 
      src="images/attention.png"
      alt="perhatian"
    />
  <p class="empty-detail__message">Terjadi kesalahan, coba beberapa saat lagi</p>
</div>
<div class="behind-appbar"></div>
`;

const createLoading = () => `
<div class="loadingio-spinner-rolling-io">
  <div class="loading-io">
    <div></div>
  </div>
</div>
`;

const createEmptyList = () => `
<div class="empty-list">
  <img 
      class="empty-list__image" 
      src="images/attention.png"
      alt="perhatian"
    />
  <p class="empty-list__message">Terjadi kesalahan, coba beberapa saat lagi</p>
</div>
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createEmptyFavTemplate,
  createEmptyDetail,
  createLoading,
  createEmptyList,
};
