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
  id?: string;
  name?: string;
  userName: string;
  password: string;
  email?: string;
  age?: number;
  isAdmin?: boolean;
  components?: Array<Product>;
  image?: string;
}

interface IdComponent {
  id: string;
}
interface State {
  products: Array<Product>;
  productById: Product;
  user: User;
  isAuthenticated: boolean;
  productsInCart: Array<Product>;
  productsInCartId: Array<IdComponent>;
}

export { State, User, Product };
