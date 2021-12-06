import mutations from "@/store/mutations";
import stateMock from "../stateMock";
import { Product, User } from "@/types/interfaces";

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

  describe("When getProductById receives a state and payload with the component", () => {
    test("Then it should put the component in the state", () => {
      const state = stateMock;
      const payload: Product = {
        name: "product name",
        type: "product type",
        price: 1,
        mainImage: "product main image",
        alterImage: "product alter image",
        brand: "product brand",
        description: "product description",
        isFavorite: false,
        id: "1",
      };

      mutations.getProductById(state, payload);

      expect(state.productById).toBe(payload);
    });
  });

  describe("When loginUser receives a state and payload with a user", () => {
    test("Then it should put isAuthenticated = true", () => {
      const state = stateMock;
      const payload: User = {
        name: "user",
        userName: "user name",
        password: "password",
        email: "email",
        age: 10,
        isAdmin: false,
        components: [],
        image: "image",
      };

      mutations.loginUser(state, payload);

      expect(state.isAuthenticated).toBe(true);
    });
  });

  describe("When loginUser receives a state and payload with a user", () => {
    test("Then it should put user data in the stage", () => {
      const state = stateMock;
      const payload: User = {
        name: "user",
        userName: "user name",
        password: "password",
        email: "email",
        age: 10,
        isAdmin: false,
        components: [],
        image: "image",
      };

      mutations.loginUser(state, payload);

      expect(state.user).toBe(payload);
    });
  });

  describe("When logoutUser receives a state and payload with a user", () => {
    test("Then it should put isAuthenticated = false", () => {
      const state = stateMock;
      const payload: User = {
        name: "",
        userName: "",
        password: "",
        email: "",
        age: +"",
        isAdmin: false,
        components: [],
        image: "",
      };

      mutations.logoutUser(state, payload);

      expect(state.isAuthenticated).toBe(false);
    });
  });

  describe("When logoutUser receives a state and payload with a user", () => {
    test("Then it should put user data in the stage", () => {
      const state = stateMock;
      const payload: User = {
        name: "",
        userName: "",
        password: "",
        email: "e",
        age: +"",
        isAdmin: false,
        components: [],
        image: "",
      };

      mutations.logoutUser(state, payload);

      expect(state.user).toBe(payload);
    });
  });

  describe("When loggedUser receives a state and payload with a user", () => {
    test("Then it should put isAuthenticated = true", () => {
      const state = stateMock;
      const payload: User = {
        name: "user",
        userName: "user name",
        password: "password",
        email: "email",
        age: 10,
        isAdmin: false,
        components: [],
        image: "image",
      };

      mutations.loggedUser(state, payload);

      expect(state.isAuthenticated).toBe(true);
    });
  });

  describe("When loggedUser receives a state and payload with a user", () => {
    test("Then it should put user data in the stage", () => {
      const state = stateMock;
      const payload: User = {
        name: "user",
        userName: "user name",
        password: "password",
        email: "email",
        age: 10,
        isAdmin: false,
        components: [],
        image: "image",
      };

      mutations.loggedUser(state, payload);

      expect(state.user).toBe(payload);
    });
  });

  describe("When getUserCompsById receives a state and payload with a user", () => {
    test("Then it should put all his components in the stage", () => {
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
      const newUserComponents: Array<string> = [];
      payload.forEach((product) => newUserComponents.push(product.id));
      mutations.getUserCompsById(state, payload);

      expect(state.user.components).toEqual(newUserComponents);
    });
  });

  describe("When getUserCompsById receives a state and payload with a user", () => {
    test("Then it should put all his cart in the stage", () => {
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

      mutations.getUserCompsById(state, payload);

      expect(state.productsInCart).toEqual([...payload]);
    });
  });
});
