interface Product {
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
interface User {
  name?: string;
  userName: string;
  password: string;
  email?: string;
  age?: number;
  isAdmin?: boolean;
  components?: Array<Product>;
  image?: string;
}

interface State {
  products: Array<Product>;
  productById: Product;
  user: User;
  isAuthenticated: boolean;
}

export { State, User, Product };
