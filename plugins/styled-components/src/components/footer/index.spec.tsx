<%_ if (testing === 'testing-library') { _%>   
import { render } from "@test";
<%_ } _%>

import { Footer } from "./index";

<%_ if (testing === 'testing-library') { _%>   
describe("Footer component testing with testing-library", () => {

    it("renders without crashing", () => {
        const component = render(<Footer />);

        expect(component).toBeTruthy();
    });
    it("renders pankod logo and directed to the correct url", () => {
        const { getByTestId } = render(<Footer />);

        expect(getByTestId("pankod-logo").getAttribute("href")).toStrictEqual(
            "http://pankod.com"
        );
    });
    
    it("should render 4 icons successfully", () => {
        const { getByTestId } = render(<Footer />);

        const icons = getByTestId("icons-container");
        expect(icons.children).toHaveLength(4);

    });
});
<%_ } _%>
