/// <reference types="cypress" />

describe("build test", () => {
    it("should build", () => {
        cy.visit("http://localhost:3000");

        cy.contains("refine Project", { timeout: 10000 }).should("exist");
    });
});
