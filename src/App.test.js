import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  it("displays the opponent", async () => {
    render(<App />);

    await screen.findByTestId("opponent");

    expect(screen.getByTestId("opponent-name")).toHaveTextContent("Randy Wheeler");
    expect(screen.getByTestId("opponent-avatar"))
      .toHaveAttribute("src", "https://randomuser.me/api/portraits/thumb/men/12.jpg");
  });
});
