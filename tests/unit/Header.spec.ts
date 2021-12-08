import { mount } from "@vue/test-utils";
import { createStore } from "vuex";
import router from "../../src/router";
import state from "../stateMock";
import Header from "../../src/components/Header.vue";
import "@testing-library/jest-dom";

describe("Given a header component", () => {
  describe("When its rendered", () => {
    test("Then it should show a image", async () => {
      const store = createStore({
        state() {
          return state;
        },
      });

      const wrapper = mount(Header, {
        global: {
          plugins: [router, store],
        },
        stubs: ["router-view"],
      });

      expect(wrapper.html()).toContain(
        '<img class="night-logo" alt="Night" height="50">'
      );
    });
  });

  describe("When it click on the burger", () => {
    test("Then function toggleNavBar should be called", async () => {
      const $store = {
        state,
        dispatch: jest.fn(),
        commit: jest.fn(),
      };
      const methods = {
        toggleNavBar: jest.fn(),
      };
      const mockRouter = {
        push: jest.fn(),
      };

      const wrapper = mount(Header, {
        global: {
          mocks: {
            $router: mockRouter,
            $store,
            methods,
          },
          plugins: [router],
        },
      });
      const burgerClick = wrapper.get('[data-test="toggle-burger"]');
      await burgerClick.trigger("click");
      const toggleNavBar = jest.fn();
      toggleNavBar();
      expect(toggleNavBar).toHaveBeenCalled();
    });
  });
});
