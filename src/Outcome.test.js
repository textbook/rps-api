import { render } from "@testing-library/react";

import Outcome from "./Outcome";

describe("App component", () => {
  it("displays 'Right wins!' when right wins", () => {
    const { getByTestId } = render(<Outcome result="right" />);
    expect(getByTestId("outcome")).toHaveTextContent("Right wins!");
  });

  it("displays 'Left wins!' when left wins", () => {
    const { getByTestId } = render(<Outcome result="left" />);
    expect(getByTestId("outcome")).toHaveTextContent("Left wins!");
  });

  it("displays 'Draw!' when there's a draw", () => {
    const { getByTestId } = render(<Outcome result="draw" />);
    expect(getByTestId("outcome")).toHaveTextContent("Draw!");
  });
});
