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
export interface User {
  name: string;
  userName: string;
  password: string;
  email: string;
  age: number;
  isAdmin?: boolean;
  components?: Array<Product>;
  image?: string;
}

export interface State {
  products: Array<Product>;
  productById: Product;
  user: User;
}
