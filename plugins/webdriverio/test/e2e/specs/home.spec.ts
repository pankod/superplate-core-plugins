describe("Homepage", () => {
    beforeEach(() => {
        browser.url("/")
    })
    it("Brings header", async () => {
        browser.url("/");
        const heading = await $('[data-test="main-heading"]');
        expect(await heading.getText()).toBe("electio");
    });

    it("Should have true href", async () => {
        const button = await $('[data-test="docs-btn-anchor"]')
        const buttonHref = await button.getAttribute("href")
        expect(buttonHref).toBeTruthy()
        expect(buttonHref).toBe("https://pankod.github.io/electio/")
    });
});
