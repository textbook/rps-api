import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

describe("App", () => {
  it("displays the opponent", async () => {
    render(<App />);

    await screen.findByTestId("opponent");

    expect(screen.getByTestId("opponent-name")).toHaveTextContent("Randy Wheeler");
    expect(screen.getByTestId("opponent-avatar"))
      .toHaveAttribute("src", "https://randomuser.me/api/portraits/thumb/men/12.jpg");
  });

  it("lets you play the random opponent", async () => {
    const playerWeapon = "scissors";
    const OUTCOMES = {
      "rock": "Right wins!",
      "paper": "Left wins!",
      "scissors": "Draw",
    };
    render(<App />);

    userEvent.selectOptions(screen.getByLabelText("Left"), playerWeapon);
    userEvent.click(screen.getByText("Throw"));
    await screen.findByTestId("opponent-weapon");

    const opponentWeapon = screen.getByTestId("opponent-weapon").textContent
    expect(screen.getByTestId("outcome")).toHaveTextContent(OUTCOMES[opponentWeapon]);
  });
});
