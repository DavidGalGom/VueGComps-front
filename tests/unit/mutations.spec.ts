import mutations from "@/store/mutations";
import stateMock from "../stateMock";
import { Product } from "@/types/interfaces";

describe("Given a store mutations object", () => {
  describe("When getProducts receives a state and payload with components", () => {
    test("Then it should put the components in the state", () => {
      const state = stateMock;
      const payload: Array<Product> = [
        {
          name: "product name",
          type: "product type",
          price: 1,
          mainImage: "product main image",
          alterImage: "product alter image",
          brand: "product brand",
          description: "product description",
          isFavorite: false,
          id: "1",
        },
      ];

      mutations.getProducts(state, payload);

      expect(state.products).toEqual([...payload]);
    });
  });
});
