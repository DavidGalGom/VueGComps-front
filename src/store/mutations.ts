import { Product, State } from "@/types/interfaces";

const mutations = {
  getProducts(state: State, payload: Array<Product>): void {
    state.products = [...payload];
  },
  getProductById(state: State, payload: Product): void {
    state.productById = payload;
  },
  loginUser(state: State): void {
    state.isAuthenticated = true;
  },
};

export default mutations;
