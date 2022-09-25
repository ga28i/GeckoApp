describe("test pagination on app", () => {
  beforeEach(() => {
    cy.visit("localhost:3000");
  });
  const navigateSecondPage = () => {
    cy.get("[data-testid=next-page-button]").click();
    cy.get(".pagination").should("include.text", "2");
  };
  it("test if pagination is shown", () => {
    cy.get(".pagination").should("be.visible");
  });
  it("testing next button functionality", () => {
    navigateSecondPage();
  });
  it("testing previous button functionality", () => {
    navigateSecondPage();
    cy.get("[data-testid=previouse-page-button]").click();
    cy.get(".pagination").should("include.text", "1");
  });
  it("testing changes pagination content", () => {
    cy.get("tbody tr:first-of-type td:nth-child(2)");
  });
  it("testing pagination changes the table content", () => {
    const textContainerSelector = "tbody tr:first-of-type td:nth-child(2)";
    cy.get(textContainerSelector)
      .invoke("text")
      .then((name) => {
        navigateSecondPage();
        cy.wait(2000);
        cy.get(textContainerSelector)
          .invoke("text")
          .should((name2) => {
            expect(name).not.to.equal(name2);
          });
      });
  });
});
