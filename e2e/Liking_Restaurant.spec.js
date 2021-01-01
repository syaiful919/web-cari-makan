const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorite restaurant', ({ I }) => {
  I.seeElement('empty-fav');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.seeElement('empty-fav');

  I.amOnPage('/');

  I.seeElement('.restaurant__item');

  const firstRestaurant = locate('.restaurant-item__title').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant__item');

  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-item__title');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});
