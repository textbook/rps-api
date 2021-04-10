import { render, screen } from "@testing-library/react";

import Opponent from "./Opponent";

describe("Opponent component", () => {
  it("displays the opponent details", () => {
    const thumbnail = "https://randomuser.me/api/portraits/thumb/women/77.jpg";
    const opponent = {
      name: {
        first: "Brittany",
        last: "Arnold",
      },
      picture: { thumbnail },
    };

    render(<Opponent opponent={opponent} />);

    expect(screen.getByTestId("opponent")).toBeInTheDocument();
    expect(screen.getByTestId("opponent-name")).toHaveTextContent("Brittany Arnold");
    expect(screen.getByTestId("opponent-avatar")).toHaveAttribute("src", thumbnail);
  });
});
