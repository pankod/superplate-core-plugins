describe("Homepage", () => {
    beforeEach(async () => {
        await browser.url("/")
    })
    
    it("Brings header", async () => {
        const heading = await $('[data-test="main-heading"]');
        expect(await heading.getText()).toBe("superplate");
    });

    it("Should have true href", async () => {
        const button = await $('[data-test="docs-btn-anchor"]')
        expect(await button.getTagName()).toBe("a")
        const buttonHref = await button.getAttribute("href")
        expect(buttonHref).toBeTruthy()
        expect(buttonHref).toBe("https://pankod.github.io/superplate/")
    });
    
    it("Should have icons", async () => {
        const icons = await $$('[data-test="icon"]')
        expect(icons).toHaveLength(6)
    });
});
