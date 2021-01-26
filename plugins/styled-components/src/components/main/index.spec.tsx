<%_ if (testing === 'testing-library') { _%>   
import { render } from "@test";

import { Main } from "./index";
<%_ } else if (testing === 'enzyme') { _%>
import mount from "@test/mount";

import { Button } from "@components";
import { Main } from "./index";
<%_ } _%>

<%_ if (testing === 'testing-library') { _%>   
describe("Main component testing with testing-library", () => {

    it("renders without crashing", () => {
        const component = render(<Main />);

        expect(component).toBeTruthy();
    });
    
    it("renders texts successfuly", () => {
        const { getByText } = render(<Main />);

        getByText("next-cli");
        getByText("Lorem Ipsum is simply dummy text of the printing and typesetting industry.");
    });

    it("renders button successfuly", () => {
        const { getByText } = render(<Main />);

        getByText("Docs");
    });
});
<%_ } else if (testing === 'enzyme') { _%>
describe("Main component testing with enzyme", () => {
    const component = mount(<Main />);

    it("renders without crashing", () => {
        expect(component).toBeTruthy();
    });

    it("renders texts successfuly", () => {
        expect(component.html()).toContain("next-cli")

        expect(component.html()).toContain("Lorem Ipsum is simply dummy text of the printing and typesetting industry.");
    });

    it("renders button successfuly", () => {
        expect(component.find(Button)).toBeDefined();
    });
});
<%_ } _%>

