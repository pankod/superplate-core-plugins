/// <reference types="cypress" />

Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
});

const shouldSkip = () => {
    if (Cypress.env("DATA_PROVIDER") === "appwrite") {
        cy.log("Appwrite has a known issue with rate limits, skipping.");

        return true;
    }

    if (
        Cypress.env("FRAMEWORK") === "remix" &&
        Cypress.env("UI_FRAMEWORK") === "antd"
    ) {
        cy.log("Remix with Antd has known issues, skipping.");

        return true;
    }

    return false;
};

describe("build test", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
        cy.clearAllCookies();
        cy.clearAllLocalStorage();
        cy.clearAllSessionStorage();
    });

    it("should build", () => {
        if (shouldSkip()) return;

        if (
            ["keycloak", "google", "auth0"].includes(
                Cypress.env("AUTH_PROVIDER"),
            )
        ) {
            cy.contains("Powered by", { timeout: 10000 }).should("exist");

            cy.wait(1000);

            if (Cypress.env("AUTH_PROVIDER") !== "google") {
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

            cy.visit("http://localhost:3000/i-dont-exist", {
                failOnStatusCode: false,
            }).wait(1000);

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
            // ignore remix and nextjs
            if (
                Cypress.env("FRAMEWORK") !== "remix" &&
                Cypress.env("FRAMEWORK") !== "nextjs"
            ) {
                cy.title().should("eq", "Blog posts | refine");
            }

            if (Cypress.env("UI_FRAMEWORK") !== "no") {
                cy.contains("Categories").should("exist");

                cy.contains("Logout").should("exist");
            }
        }
    });
});
