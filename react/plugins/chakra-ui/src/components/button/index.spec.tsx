<%_ if (testing === 'testing-library') { _%>
import { fireEvent, render } from "test";
<%_ } else if (testing === 'enzyme') {_%>
import mount from "test/mount";
import { Button as BaseButton } from "@chakra-ui/react";
<%_ } _%>

import { Button } from "./index";

<%_ if (testing === 'testing-library') { _%>
describe("Button component testing with testing-library", () => {

    it("renders without crashing", () => {
        const component = render(
            <Button onClick={() => undefined} />
        );

        expect(component).toBeTruthy();
    });

    it("button is clickable", () => {
        const mockFn = jest.fn();
        const { getByTestId } = render(<Button onClick={mockFn} />);

        const btn = getByTestId("btn");
        fireEvent.click(btn);

        expect(mockFn).toHaveBeenCalledTimes(1);
    });
});
<%_ } else if (testing === 'enzyme') { _%>
describe("Button component testing with enzyme", () => {

    it("renders without crashing", () => {
        const component = mount(
            <Button onClick={() => undefined} />
        );
  
        expect(component).toBeTruthy();
    });
  
    it("button is clickable", () => {
        const mockFn = jest.fn();
    
        const component = mount(<Button onClick={mockFn} />);
        const btn = component.find(BaseButton);
    
        btn.simulate("click");
    
        expect(mockFn).toHaveBeenCalledTimes(1);
    });
});
<%_ } _%>