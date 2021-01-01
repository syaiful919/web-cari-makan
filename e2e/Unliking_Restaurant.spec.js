Feature('Liking Restaurant');

Before(async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.restaurant__item');

  const firstRestaurant = locate('.restaurant-item__title').first();
  await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.amOnPage('/#/favorite');

  I.seeElement('.restaurant__item');

  const firstRestaurant = locate('.restaurant-item__title').first();
  await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('empty-fav');
});
