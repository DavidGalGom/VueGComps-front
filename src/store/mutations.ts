import { Product, State } from "@/types/interfaces";

const mutations = {
  getProducts(state: State, payload: Array<Product>): void {
    state.products = [...payload];
  },
};

export default mutations;
