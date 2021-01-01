const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('liking and unliking one restaurant', async ({ I }) => {
  // Make sure there is no favorite restaurant
  I.seeElement('empty-fav');

  // Go to home, click one restaurant, and go to restaurant detail
  I.amOnPage('/');
  I.seeElement('.restaurant__item');
  const firstRestaurant = locate('.restaurant-item__title').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  // Click fav button
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // Go to favorite, make sure that there is the restaurant we liked before
  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant__item');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-item__title');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  // Go to detail and click fav button
  const likedRestaurant = locate('.restaurant-item__title').first();
  I.click(likedRestaurant);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // Go back to favorite and make sure the restaurant is removed
  I.amOnPage('/#/favorite');
  I.seeElement('empty-fav');
});
