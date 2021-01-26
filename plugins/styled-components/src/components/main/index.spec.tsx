<%_ if (testing === 'testing-library') { _%>   
import { render } from "@test";
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

        getByText("next-cli");
        getByText("Lorem Ipsum is simply dummy text of the printing and typesetting industry.");
    });

    it("renders button successfuly", () => {
        const { getByText } = render(<Main />);

        getByText("Docs");
    });
});
<%_ } _%>

