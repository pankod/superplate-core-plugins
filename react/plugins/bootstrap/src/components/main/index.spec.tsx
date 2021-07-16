<%_ if (testing === 'testing-library') { _%>   
import { render } from "test";

<%_ } else if (testing === 'enzyme') { _%>
import mount from "test/mount";

import { Button } from "components";
<%_ } _%>
import { Main } from "./index";

<%_ if (testing === 'testing-library') { _%>   
describe("Main component testing with testing-library", () => {

    it("renders without crashing", () => {
        const component = render(<Main />);

        expect(component).toBeTruthy();
    });
    
    it("renders texts successfuly", () => {
        const { getByText } = render(<Main />);

        getByText("superplate");
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
        expect(component.html()).toContain("Lorem Ipsum is simply dummy text of the printing and typesetting industry.");
    });

    it("renders button successfuly", () => {
        expect(component.find(Button)).toBeDefined();
    });
});
<%_ } _%>

