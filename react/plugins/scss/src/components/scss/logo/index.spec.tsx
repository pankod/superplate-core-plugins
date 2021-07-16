<%_ if (testing === 'testing-library') { _%>   
import { render } from "test";
<%_ } else if (testing === 'enzyme') { _%>
import mount from "test/mount";
<%_ } _%>

import { Logo } from "./index";

<%_ if (testing === 'testing-library') { _%>   
describe("Logo component testing with testing-library", () => {

    const component = render(<Logo />);

    it("renders without crashing", () => {
        expect(component).toBeTruthy();
    });
});
<%_ } else if (testing === 'enzyme') { _%>
describe("Logo component testing with enzyme", () => {
    const component = mount(<Logo />);

    it("renders without crashing", () => {
        expect(component).toBeTruthy();
    });
});
<%_ } _%>
