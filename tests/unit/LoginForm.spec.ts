import { mount } from "@vue/test-utils";
import { createStore } from "vuex";
import router from "../../src/router";
import state from "../stateMock";
import LoginForm from "../../src/components/LoginForm.vue";
import "@testing-library/jest-dom";

describe("Given a LoginForm component", () => {
  describe("When its rendered", () => {
    test("Then it should render a form", async () => {
      const store = createStore({
        state() {
          return state;
        },
      });

      const wrapper = mount(LoginForm, {
        global: {
          plugins: [router, store],
        },
        stubs: ["router-view"],
      });

      expect(wrapper.html()).toContain(
        '<form class="login-form" autocomplete="off">'
      );
    });
  });
});
