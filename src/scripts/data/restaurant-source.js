import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async restaurants() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async giveReview(review) {
    const response = await fetch(API_ENDPOINT.REVIEW, {
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': 12345,
      },
      body: JSON.stringify(review),
      method: 'POST',
    });
    const responseJson = await response.json();
    return responseJson;
  }
}

export default RestaurantSource;
