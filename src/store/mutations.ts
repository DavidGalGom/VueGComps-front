import { Product, State, User } from "@/types/interfaces";

const mutations = {
  getProducts(state: State, payload: Array<Product>): void {
    state.products = [...payload];
  },
  getProductById(state: State, payload: Product): void {
    state.productById = payload;
  },
  loginUser(state: State, payload: User): void {
    state.isAuthenticated = true;
    state.user = payload;
  },
  logoutUser(state: State, payload: User): void {
    state.isAuthenticated = false;
    state.user = payload;
  },
  loggedUser(state: State, payload: User): void {
    state.isAuthenticated = true;
    state.user = payload;
  },
  getUserCompsById(state: State, payload: Array<Product>): void {
    const newUserComponents: Array<string> = [];
    payload.forEach((product) => newUserComponents.push(product.id));
    state.user.components = newUserComponents;
    state.productsInCart = [...payload];
  },
  updateProductToCart(state: State, payload: Array<Product>): void {
    const newUserComponents: Array<string> = [];
    payload.forEach((product) => newUserComponents.push(product.id));
    state.user.components = newUserComponents;
    state.productsInCart = payload;
  },
  buyAllComponents(state: State, payload: Array<Product>): void {
    state.user.components = [];
    state.productsInCart = payload;
  },
};

export default mutations;
