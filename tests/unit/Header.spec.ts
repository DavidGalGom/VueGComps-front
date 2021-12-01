import { render, screen } from "@testing-library/vue";
import Header from "../../src/components/Header.vue";
import "@testing-library/jest-dom";

describe("Given a header component", () => {
  describe("When its rendered", () => {
    test("Then it should show a image", async () => {
      render(Header);
      const headerImage = await screen.getByRole("img", {
        name: "VueGComps logo",
      });

      expect(headerImage).toBeInTheDocument();
    });
  });
});
