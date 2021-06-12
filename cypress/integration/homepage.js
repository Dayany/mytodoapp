describe("renders initial page", () => {
  it("should render correctly", () => {
    cy.visit("/");
    cy.get("#root").should("exist");
  });
});
