/* eslint-disable camelcase */
import IngredientProductOrder from '@/domain/IngredientProductOrder';
import Product from '@/domain/Product';

export default class ProductOrder {
  constructor({ id, product, ingredients, quantity, total_price_cents, order_id }) {
    this.id = id;
    this.orderId = order_id;
    this.product = new Product(product);
    this.quantity = quantity;
    this.ingredients = ingredients;
    this.totalPriceCents = total_price_cents;
  }

  get productOrderIngredients() {
    return new IngredientProductOrder({ ingredients: this.ingredients });
  }

  set productOrderIngredients(v) {
    this.ingredients = v;
  }

  equalTo(productOrder) {
    return productOrder.product.id === this.product.id &&
            this.productOrderIngredients.equalTo(productOrder.ingredients);
  }
}
