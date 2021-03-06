import { render, screen } from "@testing-library/vue";
import NotFound from "../../src/views/NotFound.vue";
import "@testing-library/jest-dom";

describe("Given a NotFound component", () => {
  describe("When its rendered ", () => {
    test("Then it should render heading tag", async () => {
      render(NotFound);
      const notFoundTitle = await screen.getByRole("heading", {
        name: "404 Page Not found, please go to a correct route",
      });

      expect(notFoundTitle).toBeInTheDocument();
    });
  });
});
