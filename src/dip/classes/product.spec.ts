import { Product } from './product';

const createSut = (name: string, price: number): Product => {
  return new Product(name, price);
};

describe('Product', () => {
  afterEach(() => jest.clearAllMocks());

  it('should have properties name and price', () => {
    // System under test
    const sut = createSut('Blusa', 50.14);
    expect(sut).toHaveProperty('name', 'Blusa');
    expect(sut).toHaveProperty('price', 50.14);
  });
});
