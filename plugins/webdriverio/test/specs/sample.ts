describe("My First Test", () => {
    it("Visits the next-cli GitHub Page", () => {
        browser.url("https://github.com/pankod/next-cli")
        expect(browser).toHaveTitle("GitHub - pankod/next-cli");
    })
});