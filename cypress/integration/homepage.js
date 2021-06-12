describe("renders initial page", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("should render correctly", () => {
    cy.get("#root").should("exist");
  });
  it("should check for comments field", () => {
    cy.get(".row > :nth-child(2) > .form-outline > .form-control").should(
      "exist"
    );
  });
});
describe("adds and deletes taks", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("should add a task", () => {
    cy.get(":nth-child(3) > .card > .card-body > .card-text")
      .contains("testing-cypress")
      .should("not.exist");
    cy.get(".row > :nth-child(2) > .form-outline > .form-control").type(
      "testing-cypress"
    );
    cy.get(":nth-child(3) > .card > .card-body > .card-text").should("exist");

    cy.get(":nth-child(4) > .ripple").click();
    cy.get(":nth-child(3) > .card > .card-body > .card-text").contains(
      "testing-cypress"
    );
  });
  it("should delete a task", () => {
    cy.get(":nth-child(3) > .card > .card-body > :nth-child(3)").click();
    cy.get(
      ":nth-child(3) > .card > .card-body > .modal > .modal-dialog > .modal-content > .modal-footer > .btn-danger"
    ).click();
    cy.get(":nth-child(3) > .card > .card-body > .card-text")
      .contains("testing-cypress")
      .should("not.exist");
  });
});
