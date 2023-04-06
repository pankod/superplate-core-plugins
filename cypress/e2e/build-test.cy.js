/// <reference types="cypress" />

Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
});

describe("build test", () => {
    beforeEach(() => {
        cy.clearAllCookies();
        cy.clearAllLocalStorage();
    });

    it("should build", () => {
        cy.visit("http://localhost:3000");

        if (
            ["keycloak", "google", "auth0"].includes(process.env.AUTH_PROVIDER)
        ) {
            cy.contains("refine Project", { timeout: 10000 }).should("exist");

            cy.contains("Sign in").click();

            cy.url().should("not.contain", "http://localhost:3000");
        } else {
            cy.contains("Sign in to your account", { timeout: 10000 }).should(
                "exist",
            );

            cy.contains("Forgot password?").click();

            cy.url().should("contain", "/forgot-password");

            cy.contains("Sign in").click();

            cy.url().should("contain", "/login");

            cy.contains("Sign up").click();

            cy.url().should("contain", "/register");

            cy.contains("Sign up for your account").should("exist");

            cy.contains("Sign in").click();

            cy.visit("http://localhost:3000/i-dont-exist");

            cy.url().should(
                "eq",
                "http://localhost:3000/login?to=%2Fi-dont-exist",
            );

            cy.contains("Sign in to your account").should("exist");

            cy.get("form").submit();

            cy.url().should("eq", "http://localhost:3000/i-dont-exist", {
                timeout: 3000,
            });

            cy.contains("Sorry, the page you visited does not exist.").should(
                "exist",
            );

            cy.contains("Back Home").click();

            cy.contains("Blog Posts").should("exist");

            cy.contains("Categories").should("exist");

            cy.contains("Logout").should("exist");

            cy.contains("English").should("exist");

            cy.contains("🔆").click();
        }
    });
});
