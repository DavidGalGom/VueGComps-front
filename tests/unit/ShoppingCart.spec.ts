import { mount } from "@vue/test-utils";
import { createStore } from "vuex";
import router from "../../src/router";
import state from "../stateMock";
import ShoppingCart from "../../src/views/ShoppingCart.vue";
import "@testing-library/jest-dom";

describe("Given a Shopping Cart component", () => {
  describe("When its rendered", () => {
    test("Then it should render a header", async () => {
      const store = createStore({
        state() {
          return state;
        },
      });

      const wrapper = mount(ShoppingCart, {
        global: {
          plugins: [router, store],
        },
      });

      expect(wrapper.html()).toContain('<h1 class="shopping-cart-title">');
    });
  });
});
