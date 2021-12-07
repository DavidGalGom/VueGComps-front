import { mount } from "@vue/test-utils";
import { createStore } from "vuex";
import router from "../../src/router";
import state from "../stateMock";
import Details from "../../src/views/Details.vue";
import "@testing-library/jest-dom";

describe("Given a Details component", () => {
  describe("When its rendered", () => {
    test("Then it should render a image", async () => {
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

  describe("When it click on add to cart", () => {
    test("Then function addToCart should have been called", async () => {
      const $store = {
        state,
        dispatch: jest.fn(),
        commit: jest.fn(),
      };
      const methods = {
        addToCart: jest.fn(),
        onSubmit: jest.fn(),
      };
      const mockRouter = {
        push: jest.fn(),
      };

      const wrapper = mount(Details, {
        global: {
          mocks: {
            $router: mockRouter,
            $store,
            methods,
          },
          plugins: [router],
        },
      });
      const clickButton = wrapper.get('[data-test="addToCart"]');
      await clickButton.trigger("click");
      const addToCart = jest.fn();
      addToCart();
      expect(addToCart).toHaveBeenCalled();
    });
  });

  describe("When it click on back button", () => {
    test("Then function onSubmit should have been called", async () => {
      const $store = {
        state,
        dispatch: jest.fn(),
        commit: jest.fn(),
      };
      const methods = {
        addToCart: jest.fn(),
        onSubmit: jest.fn(),
      };
      const mockRouter = {
        push: jest.fn(),
      };

      const wrapper = mount(Details, {
        global: {
          mocks: {
            $router: mockRouter,
            $store,
            methods,
          },
          plugins: [router],
        },
      });
      const clickBackButton = wrapper.get('[data-test="onSubmit"]');
      await clickBackButton.trigger("click");
      const onSubmit = jest.fn();
      onSubmit();
      expect(onSubmit).toHaveBeenCalled();
    });
  });
});
