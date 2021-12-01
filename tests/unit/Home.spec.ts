import { mount } from "@vue/test-utils";
import { createStore } from "vuex";
import router from "../../src/router";
import state from "../stateMock";
import Home from "../../src/views/Home.vue";
import "@testing-library/jest-dom";

describe("Given a Home component", () => {
  describe("When its rendered", () => {
    test("Then it should render a header", async () => {
      const store = createStore({
        state() {
          return state;
        },
      });

      const wrapper = mount(Home, {
        global: {
          plugins: [router, store],
        },
        stubs: ["router-view"],
      });

      expect(wrapper.html()).toContain('<h1 class="home-title">');
    });
  });
});
