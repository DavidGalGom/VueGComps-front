import { render, screen } from "@testing-library/vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";
import "@testing-library/jest-dom";

describe("Given a NotFound component", () => {
  describe("When its rendered ", () => {
    test("Then it should render heading tag", async () => {
      render(LoadingSpinner);
      const spinnerTitle = await screen.getByRole("heading", {
        name: "Loading",
      });

      expect(spinnerTitle).toBeInTheDocument();
    });
  });
});
