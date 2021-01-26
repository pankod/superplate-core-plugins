<%_ if (testing === 'testing-library') { _%>   
import { render } from "@test";
<%_ } _%>

import { Logo } from "./index";

<%_ if (testing === 'testing-library') { _%>   
describe("Logo component testing with testing-library", () => {
    const component = render(<Logo />);

    it("renders without crashing", () => {
        expect(component).toBeTruthy();
    });
});
<%_ } _%>
