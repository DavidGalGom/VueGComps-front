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
};

export default mutations;
