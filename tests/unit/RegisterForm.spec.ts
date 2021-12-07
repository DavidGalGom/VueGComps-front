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
        '<form id="register-form" data-test="delete-from" class="register-form" autocomplete="off">'
      );
    });
  });
  describe("When it submit the form", () => {
    test("Then function onSubmit should be called", async () => {
      const $store = {
        state,
        dispatch: jest.fn(),
        commit: jest.fn(),
      };
      const methods = {
        toggleRegister: jest.fn(),
        checkForm: jest.fn(),
        onSubmit: jest.fn(),
      };
      const mockRouter = {
        push: jest.fn(),
      };

      const wrapper = mount(RegisterForm, {
        global: {
          mocks: {
            $router: mockRouter,
            $store,
            methods,
          },
          plugins: [router],
        },
      });
      const deleteForm = wrapper.get('[data-test="delete-from"]');
      await deleteForm.trigger("click");
      const onSubmit = jest.fn();
      onSubmit();
      expect(onSubmit).toHaveBeenCalled();
    });
  });
});
