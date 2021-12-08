import { mount } from "@vue/test-utils";
import { createStore } from "vuex";
import router from "../../src/router";
import state from "../stateMock";
import Product from "../../src/components/Product.vue";
import "@testing-library/jest-dom";

describe("Given a Product component", () => {
  describe("When its rendered", () => {
    test("Then it should render the div with the card", async () => {
      const store = createStore({
        state() {
          return state;
        },
      });

      const wrapper = mount(Product, {
        global: {
          plugins: [router, store],
        },
        stubs: ["router-view"],
      });

      expect(wrapper.html()).toContain(
        '<div class="card-container container-light">'
      );
    });
  });
});
