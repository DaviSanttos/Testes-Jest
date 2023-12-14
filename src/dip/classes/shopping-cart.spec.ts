import { Discount } from './discount';
import { CartItem } from './interfaces/cart-item';
import { ShoppingCart } from './shopping-cart';

const creatSut = () => {
  const discountMock = creatDiscountMock();
  const sut = new ShoppingCart(discountMock);
  return { sut, discountMock };
};

const creatDiscountMock = () => {
  class discountMock extends Discount {}
  return new discountMock();
};

const createCartItem = (name: string, price: number) => {
  class CartItemMock implements CartItem {
    constructor(
      public name: string,
      public price: number,
    ) {}
  }

  return new CartItemMock(name, price);
};

const creatSutWithProducts = () => {
  const { sut, discountMock } = creatSut();
  const cartItem1 = createCartItem('camisa', 40);
  const cartItem2 = createCartItem('calça', 70);
  sut.addItem(cartItem1);
  sut.addItem(cartItem2);
  return { sut, discountMock };
};

describe('Shopping-cart', () => {
  it('should be an empty cart when no product is added', () => {
    const { sut } = creatSut();
    expect(sut.isEmpty()).toBe(true);
  });

  it('should have 2 cart items', () => {
    const { sut } = creatSutWithProducts();
    expect(sut.items.length).toBe(2);
  });

  it('should test total and totalWithDiscount', () => {
    const { sut } = creatSutWithProducts();
    expect(sut.total()).toBe(110);
    expect(sut.totalWithDicount()).toBe(110);
  });
});
