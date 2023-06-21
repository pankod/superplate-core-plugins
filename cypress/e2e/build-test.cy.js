/// <reference types="cypress" />

Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
});

const getIframeDocument = () => {
    return cy.get("iframe").its("0.contentDocument").should("exist");
};

const getIframeBody = () => {
    // get the document
    return getIframeDocument()
        .its("body")
        .should("not.be.undefined")
        .then(cy.wrap);
};

describe("build test", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
        cy.clearAllCookies();
        cy.clearAllLocalStorage();
        cy.clearAllSessionStorage();
    });

    it("should build", () => {
        if (Cypress.env("DATA_PROVIDER") === "appwrite") return;

        if (
            ["keycloak", "google", "auth0"].includes(
                Cypress.env("AUTH_PROVIDER"),
            )
        ) {
            cy.contains("Powered by", { timeout: 10000 }).should("exist");

            cy.wait(1000);

            if (
                Cypress.env("AUTH_PROVIDER") === "google" &&
                Cypress.env("FRAMEWORK") === "react"
            ) {
                getIframeBody().contains("Google");
            } else {
                cy.contains("Sign in").click();

                cy.url().should("not.contain", "http://localhost:3000");
            }
        } else {
            cy.contains("Sign in to your account", { timeout: 10000 }).should(
                "exist",
            );

            cy.contains("Forgot password?").click();

            cy.wait(1000);

            cy.url().should("contain", "/forgot-password");

            cy.contains("Sign in").click();

            cy.wait(1000);

            cy.url().should("contain", "/login");

            cy.contains("Sign up").click();

            cy.wait(1000);

            cy.url().should("contain", "/register");

            cy.contains("Sign up for your account").should("exist");

            cy.contains("Sign in").click();

            cy.wait(1000);

            cy.visit("http://localhost:3000/i-dont-exist").wait(1000);

            cy.url().should("be.oneOf", [
                "http://localhost:3000/login?to=%2Fi-dont-exist",
                "http://localhost:3000/login?to=/i-dont-exist",
            ]);

            cy.contains("Sign in to your account").should("exist");

            if (Cypress.env("UI_FRAMEWORK") === "no") {
                if (Cypress.env("DATA_PROVIDER") === "supabase") {
                    cy.get("input[name='email']").type("info@refine.dev");
                    cy.get("input[name='password']").type("refine-supabase");
                } else {
                    cy.get("input[name='email']").type("demo@refine.dev");
                    cy.get("input[name='password']").type("demodemo");
                }
            }

            cy.wait(1000).get("form").submit();

            cy.wait(1000);

            cy.url().should("eq", "http://localhost:3000/i-dont-exist", {
                timeout: 3000,
            });

            cy.contains("Sorry, the page you visited does not exist.").should(
                "exist",
            );

            cy.contains("Back Home").click();

            cy.wait(1000);

            cy.contains("Blog Posts", { matchCase: false }).should("exist");

            // document title check
            // ignore remix
            if (Cypress.env("FRAMEWORK") !== "remix") {
                cy.title().should("eq", "Blog Posts | refine");
            }

            if (Cypress.env("UI_FRAMEWORK") !== "no") {
                cy.contains("Categories").should("exist");

                cy.contains("Logout").should("exist");
            }

            // hide language name and name on mui custom-json-rest
            if (Cypress.env("UI_FRAMEWORK") === "mui") {
                if (Cypress.env("FRAMEWORK") !== "remix") {
                    cy.get(".MuiPaper-elevation4 > .MuiToolbar-root").contains(
                        "English",
                    );

                    cy.viewport(375, 667)
                        .get(".MuiPaper-elevation4 > .MuiToolbar-root")
                        .contains("English")
                        .should("have.css", "display", "none");
                }

                if (Cypress.env("DATA_PROVIDER") === "custom-json-rest") {
                    cy.get(".MuiPaper-elevation4 > .MuiToolbar-root").contains(
                        "John Doe",
                    );
                    cy.viewport(375, 667)
                        .get(".MuiPaper-elevation4 > .MuiToolbar-root")
                        .contains("John Doe")
                        .should("have.css", "display", "none");
                }
            }
        }
    });
});
