import { mount } from "@vue/test-utils";
import router from "../../src/router";
import Home from "../../src/views/Home.vue";
import state from '../mocked-state';

describe("Given a home view", () => {
  describe("When its rendered", () => {
    test("Then it should show a ProductList component", () => {
      const wrapper = mount(Home, {
        global: {
          plugins: [router],
          mocks: {
        $store: {
          state,
        },
        stubs: ["router-link", "router-view"],
      });

      expect(wrapper.html()).toContain('<div class="home">');
    });
  });
});
