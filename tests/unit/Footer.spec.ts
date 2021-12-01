import { render, screen } from "@testing-library/vue";
import Footer from "../../src/components/Footer.vue";
import "@testing-library/jest-dom";

describe("Given a Footer component", () => {
  describe("When its rendered ", () => {
    test("Then it should render the copyright h3 tag", async () => {
      render(Footer);
      const footerTitle = await screen.getByRole("heading", {
        name: "2021 All rights reserved - VueGComps",
      });

      expect(footerTitle).toBeInTheDocument();
    });
  });
});
