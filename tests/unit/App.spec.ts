import { mount } from "@vue/test-utils";
import { createStore } from "vuex";
import router from "../../src/router";
import state from "../stateMock";
import App from "../../src/App.vue";
import "@testing-library/jest-dom";

describe("Given the App", () => {
  describe("When its rendered", () => {
    test("Then it should render a div with all the app", async () => {
      const store = createStore({
        state() {
          return state;
        },
      });

      const wrapper = mount(App, {
        global: {
          plugins: [router, store],
        },
        stubs: ["router-view"],
      });

      expect(wrapper.html()).toContain('<div class="all-app">');
    });
  });
});
