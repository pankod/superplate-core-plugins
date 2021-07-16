<%_ if (testing === 'testing-library') { _%>   
import { render } from "test";
<%_ } else if (testing === 'enzyme') { _%>
import mount from "test/mount";
<%_ } _%>

import { Wrapper } from "./index";

<%_ if (testing === 'testing-library') { _%>   
describe("Wrapper component testing with testing-library", () => {

    const component = render(<Wrapper />);

    it("renders without crashing", () => {
        expect(component).toBeTruthy();
    });
});
<%_ } else if (testing === 'enzyme') { _%>
describe("Wrapper component testing with enzyme", () => {
    const component = mount(<Wrapper />);

    it("renders without crashing", () => {
        expect(component).toBeTruthy();
    });
});
<%_ } _%>