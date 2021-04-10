export function rps(left, right) {
  if (left === right) {
    return "draw";
  }
  return (
    (left === "rock" && right === "scissors")
    || (left === "scissors" && right === "paper")
    || (left === "paper" && right === "rock")
  )
    ? "left"
    : "right";
}

export const randomWeapon = () => ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
