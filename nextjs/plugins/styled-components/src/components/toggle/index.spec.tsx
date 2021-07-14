<%_ if (testing === 'testing-library') { _%>   
import { fireEvent, render } from "@test";
<%_ } else if (testing === 'enzyme') { _%>
import mount from "@test/mount";
<%_ } _%>

import { Toggle } from "./index";

<%_ if (testing === 'testing-library') { _%>   
describe("Toggle component testing with testing-library", () => {

    it("renders without crashing", () => {
        const component = render(<Toggle />);

        expect(component).toBeTruthy();
    });

    it("button is clickable", () => {
        const mockFn = jest.fn();
        const { getByTestId } = render(<Toggle onClick={mockFn} />);

        const toggleBtn = getByTestId("toggle");
        fireEvent.click(toggleBtn);
    });

    it("renders toggle button contain 2 images", () => {
        const { getByTestId } = render(<Toggle />);

        const toggleBtn = getByTestId("toggle");
        expect(toggleBtn.children).toHaveLength(2);
    });
});
<%_ } else if (testing === 'enzyme') { _%>
describe("Toggle component testing with enzyme", () => {
    const mockFn = jest.fn();

    const component = mount(<Toggle onClick={mockFn}/>);

    it("renders without crashing", () => {
        expect(component).toBeTruthy();
    });

    it("toggle button is clickable", () => {
        const toggleBtn = component.find("button");

        toggleBtn.simulate("click");
    });
});
<%_ } _%>