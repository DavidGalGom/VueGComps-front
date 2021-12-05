import { mount } from "@vue/test-utils";
import { createStore } from "vuex";
import router from "../../src/router";
import state from "../stateMock";
import RegisterForm from "../../src/components/RegisterForm.vue";
import "@testing-library/jest-dom";

describe("Given a RegisterForm component", () => {
  describe("When its rendered", () => {
    test("Then it should render a form", async () => {
      const store = createStore({
        state() {
          return state;
        },
      });

      const wrapper = mount(RegisterForm, {
        global: {
          plugins: [router, store],
        },
        stubs: ["router-view"],
      });

      expect(wrapper.html()).toContain(
        '<form id="register-form" class="register-form" autocomplete="off">'
      );
    });
  });
});
