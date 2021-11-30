export interface Product {
  name: string;
  type: string;
  price: number;
  mainImage: string;
  alterImage: string;
  brand: string;
  description: string;
  isFavorite: boolean;
  id: string;
}

export interface State {
  products: Array<Product>;
  productById: Product;
}
