<%_ if (testing === 'testing-library') { _%>   
import { render } from "test";
<%_ } else if (testing === 'enzyme') { _%>
import mount from "test/mount";

import { Logo } from "components/css";
<%_ } _%>

import { Header } from "./index";

<%_ if (testing === 'testing-library') { _%>   
describe("Header component testing with testing-library", () => {

    const { getByTestId } = render(<Header />);

    const container = getByTestId("container");

    it("renders without crashing", () => {
        expect(container.parentElement).toBeTruthy();
    });

    it("renders successfuly react logo", () => {
        expect(container.firstChild).toBeDefined();
    });
});
<%_ } else if (testing === 'enzyme') { _%>
describe("Header component testing with testing-library", () => {
    const component = mount(<Header />);

    it("renders without crashing", () => {
        expect(component).toBeTruthy();
    });

    it("renders successfuly react logo", () => {
        expect(component.find(Logo)).toBeDefined();
    });
});
<%_ } _%>
