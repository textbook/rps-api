it("displays an opponent from the API", () => {
  cy.visit("/");

  cy.findByTestId("opponent-name")
    .invoke("text")
    .should("match", /[A-Z][a-z]+ [A-Z][a-z]+/);
  cy.findByTestId("opponent-avatar")
    .should("have.attr", "src")
    .and("match", /^https:\/\/randomuser\.me\/api\/portraits/);
});

it("displays an opponent from a fixture", () => {
  cy.intercept("GET", "https://api.randomuser.me", { fixture: "example.json" });

  cy.visit("/");

  cy.findByTestId("opponent-name").should("contain.text", "Randy Wheeler");
  cy.findByTestId("opponent-avatar")
    .should("have.attr", "src", "https://randomuser.me/api/portraits/thumb/men/12.jpg");
});

const OUTCOMES = {
  "rock": "Draw!",  // rock draws with rock
  "paper": "Right wins!",  // paper wraps rock
  "scissors": "Left wins!",  // scissors are blunted by rock
};

it("displays the appropriate winner", () => {
  cy.visit("/");

  cy.findByLabelText("Left").select("rock");  
  cy.findByText("Throw").click();

  cy.findByTestId("opponent-weapon").then(($weapon) => {
    cy.findByTestId("outcome").should("contain.text", OUTCOMES[$weapon.text()]);
  });
});
