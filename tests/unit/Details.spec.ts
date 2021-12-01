import { mount } from "@vue/test-utils";
import { createStore } from "vuex";
import router from "../../src/router";
import state from "../stateMock";
import Details from "../../src/views/Details.vue";
import "@testing-library/jest-dom";

describe("Given a Home component", () => {
  describe("When its rendered", () => {
    test("Then it should render a header", async () => {
      const store = createStore({
        state() {
          return state;
        },
      });

      const wrapper = mount(Details, {
        global: {
          plugins: [router, store],
        },
        stubs: ["router-view"],
      });

      expect(wrapper.html()).toContain(
        '<img class="component-image" src="product main image" alt="Component" width="250">'
      );
    });
  });
});
