describe("Homepage", () => {
    beforeEach(() => {
        browser.url("/")
    })
    
    it("Brings header", async () => {
        const heading = await $('[data-test="main-heading"]');
        expect(await heading.getText()).toBe( <% if(!(ui==="none")) { %> "electio" <% } else { %> "next cli prototype app" <% } %> );
    });

    <%_ if(!(ui==="none")) { _%>
    it("Should have true href", async () => {
        const button = await $('[data-test="docs-btn-anchor"]')
        expect(await button.getTagName()).toBe("a")
        const buttonHref = await button.getAttribute("href")
        expect(buttonHref).toBeTruthy()
        expect(buttonHref).toBe("https://pankod.github.io/electio/")
    });
    
    it("Should have icons", async () => {
        const icons = await $$('[data-test="icon"]')
        expect(icons).toHaveLength(6)
    });
    <%_ } _%>
});
