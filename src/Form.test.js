import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Form from "./Form";

describe("Form component", () => {
  it("emits the user's input", async () => {
    const onSubmit = jest.fn();
    const weapon = "paper";
    render(<Form onSubmit={onSubmit} />);

    userEvent.selectOptions(screen.getByLabelText("Left"), weapon);
    userEvent.click(screen.getByText("Throw"));

    expect(onSubmit).toHaveBeenCalledWith(weapon);
  });
});
