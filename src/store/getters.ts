import { State, Product } from "@/types/interfaces";

const getters = {
  getProductByIdGetter:
    (state: State) =>
    (id: string): Product | undefined =>
      state.products.find((product: Product) => product.id === id),
};

export default getters;
