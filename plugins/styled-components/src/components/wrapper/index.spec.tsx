<%_ if (testing === 'testing-library') { _%>   
import { render } from "@test";
<%_ } _%>

import { Wrapper } from "./index";

<%_ if (testing === 'testing-library') { _%>   
describe("Wrapper component testing with testing-library", () => {

    const component = render(<Wrapper />);

    it("renders without crashing", () => {
        expect(component).toBeTruthy();
    });
});
<%_ } _%>