/// <reference types="cypress" />

describe("build test", () => {
    it("should build", () => {
        cy.visit("http://localhost:3000");

        cy.contains("refine", { timeout: 10000 }).should("exist");
    });
});
