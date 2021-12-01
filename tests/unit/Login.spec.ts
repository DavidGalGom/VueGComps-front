import { mount } from "@vue/test-utils";
import { createStore } from "vuex";
import router from "../../src/router";
import state from "../stateMock";
import Login from "../../src/views/Login.vue";
import "@testing-library/jest-dom";

describe("Given a Login component", () => {
  describe("When its rendered", () => {
    test("Then it should render the register and login form", async () => {
      const store = createStore({
        state() {
          return state;
        },
      });

      const wrapper = mount(Login, {
        global: {
          plugins: [router, store],
        },
        stubs: ["router-view"],
      });

      expect(wrapper.html()).toContain(
        '<form class="register-form" autocomplete="off">'
      );
      expect(wrapper.html()).toContain(
        '<form class="login-form" autocomplete="off">'
      );
    });
  });
});
