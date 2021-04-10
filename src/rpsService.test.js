import { randomWeapon, rps } from "./rpsService";

describe("rock, paper, scissors", () => {
  it("should say left wins for rock vs. scissors", () => {
    const left = "rock";
    const right = "scissors";

    const outcome = rps(left, right);

    expect(outcome).toBe("left");
  });

  it("should say right wins for scissors vs. rock", () => {
    const left = "scissors";
    const right = "rock";

    const outcome = rps(left, right);

    expect(outcome).toBe("right");
  });

  it("should say left wins for scissors vs. paper", () => {
    const left = "scissors";
    const right = "paper";
  
    const result = rps(left, right);
  
    expect(result).toBe("left");
  });

  it("should say right wins for paper vs. scissors", () => {
    const left = "paper";
    const right = "scissors";
  
    const result = rps(left, right);
  
    expect(result).toBe("right");
  });

  it("should say left wins for paper vs. rock", () => {
    const left = "paper";
    const right = "rock";
  
    const result = rps(left, right);
  
    expect(result).toBe("left");
  });

  it("should say right wins for rock vs. paper", () => {
    const left = "rock";
    const right = "paper";
  
    const result = rps(left, right);
  
    expect(result).toBe("right");
  });

  ["rock", "paper", "scissors"].forEach((both) => {
    it(`should say draw for ${both} vs. ${both}`, () => {
      expect(rps(both, both)).toBe("draw");
    });
  });
});

describe("randomWeapon", () => {
  const expectedOutcomes = ["rock", "paper", "scissors"];
  
  it("always gives one of the expected outcomes", () => {
    const outcomes = Array(100).fill(null).map(() => randomWeapon());
    
    expect(outcomes.every((outcome) => expectedOutcomes.includes(outcome))).toBe(true);
  });
  
  it("doesn't always give the same outcome", () => {
    const outcomes = Array(100).fill(null).map(() => randomWeapon());

    expect(expectedOutcomes.every((outcome) => outcomes.includes(outcome))).toBe(true);
  });
});
