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
        '<img class="vuegcomp-logo" alt="VueGComps logo" height="70">'
      );
    });
  });
});
