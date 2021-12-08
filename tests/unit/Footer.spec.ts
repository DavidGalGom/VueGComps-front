import { mount } from "@vue/test-utils";
import { createStore } from "vuex";
import router from "../../src/router";
import state from "../stateMock";
import Footer from "../../src/components/Footer.vue";
import "@testing-library/jest-dom";

describe("Given a Footer component", () => {
  describe("When its rendered ", () => {
    test("Then it should render the copyright h3 tag", async () => {
      const store = createStore({
        state() {
          return state;
        },
      });

      const wrapper = mount(Footer, {
        global: {
          plugins: [router, store],
        },
        stubs: ["router-view"],
      });

      expect(wrapper.html()).toContain('<h3 class="footer-copyright">');
    });
  });
});
