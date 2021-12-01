import { mount } from "@vue/test-utils";
import { createStore } from "vuex";
import router from "../../src/router";
import state from "../stateMock";
import ProductList from "../../src/components/ProductList.vue";
import "@testing-library/jest-dom";

describe("Given a ProductList component", () => {
  describe("When its rendered", () => {
    test("Then it should render a list of components", async () => {
      const store = createStore({
        state() {
          return state;
        },
      });

      const wrapper = mount(ProductList, {
        global: {
          plugins: [router, store],
        },
        stubs: ["router-view"],
      });

      expect(wrapper.html()).toContain('<ul class="product-list">');
    });
  });
});
