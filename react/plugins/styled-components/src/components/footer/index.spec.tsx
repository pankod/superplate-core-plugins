<%_ if (testing === 'testing-library') { _%>   
import { render } from "test";

import { Footer } from "./index";
<%_ } else if (testing === 'enzyme') { _%>
import mount from "test/mount";

import { Footer } from "./index";
import { ListItem } from "./styled";
<%_ } _%>

<%_ if (testing === 'testing-library') { _%>   
describe("Footer component testing with testing-library", () => {

    it("renders without crashing", () => {
        const component = render(<Footer />);

        expect(component).toBeTruthy();
    });

    it("renders pankod logo and directed to the correct url", () => {
        const { getByTestId } = render(<Footer />);

        expect(getByTestId("pankod-logo").getAttribute("href")).toStrictEqual(
            "https://github.com/pankod"
        );
    });
    
    it("should render 4 icons successfully", () => {
        const { getByTestId } = render(<Footer />);

        const icons = getByTestId("icons-container");
        expect(icons.children).toHaveLength(4);
    });
});
<%_ } else if (testing === 'enzyme') { _%>
describe("Footer component testing with enzyme", () => {
    const component = mount(<Footer />);

    it("renders without crashing", () => {
        expect(component).toBeTruthy();
    });

    it("renders pankod logo directed to the correct url", () => {
        expect(component.find("a").prop("href")).toContain("https://github.com/pankod");
    });

    it("should render 4 icons successfully", () => {
        expect(component.find(ListItem)).toHaveLength(4);
    });
});
<%_ } _%>
