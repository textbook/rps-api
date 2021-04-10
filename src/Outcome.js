const outcomes = {
  draw: "Draw!",
  left: "Left wins!",
  right: "Right wins!",
};

function Outcome({ result }) {
  return <div data-testid="outcome">{outcomes[result]}</div>;
}

export default Outcome;
