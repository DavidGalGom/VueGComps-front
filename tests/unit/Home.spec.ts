import { mount } from "@vue/test-utils";
import router from "../../src/router";
import Home from "../../src/views/Home.vue";

describe("Given a home view", () => {
  describe("When its rendered", () => {
    test("Then it should show a ProductList component", () => {
      const wrapper = mount(Home, {
        global: {
          plugins: [router],
        },
        stubs: ["router-link", "router-view"],
      });

      expect(wrapper.html()).toContain('<div class="home">');
    });
  });
});
