/// <reference types="cypress" />

Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
});

describe("build test", () => {
    it("should build", () => {
        cy.visit("http://localhost:3000");

        if (
            ["keycloak", "google", "auth0"].includes(
                Cypress.env("AUTH_PROVIDER"),
            )
        ) {
            cy.contains("refine Project", { timeout: 10000 }).should("exist");

            cy.contains("Sign in").click();

            cy.url().should("not.contain", "http://localhost:3000");
        } else {
            cy.contains("refine Project", { timeout: 10000 }).should("exist");

            cy.get("form").submit();

            cy.contains("Blog Posts", { timeout: 10000 }).should("exist");

            cy.contains("Categories").should("exist");

            cy.contains("Logout").should("exist");
        }
    });
});
