<%_ if (testing === 'testing-library') { _%>   
import { render } from "@test";
<%_ } _%>

import { Header } from "./index";

<%_ if (testing === 'testing-library') { _%>   
describe("Header component testing with testing-library", () => {

    const { getByTestId } = render(<Header />);

    const container = getByTestId("container");

    it("renders without crashing", () => {
        expect(container.parentElement).toBeTruthy();
    });

    it("renders successfuly next.js logo", () => {
        expect(container.firstChild).toBeDefined();
    });

    it("renders successfuly theme switch", () => {
        expect(container.lastChild).toBeDefined();
    });
});
<%_ } _%>
