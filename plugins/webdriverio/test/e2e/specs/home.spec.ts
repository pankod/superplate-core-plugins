describe("Homepage", () => {
    it("Brings header", async () => {
        browser.url("/");
        const heading = await $('[data-test="main-heading"]');
        expect(await heading.getText()).toBe("electio");
    });
});
