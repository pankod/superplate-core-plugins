<%_ if (testing === 'testing-library') { _%>   
import { render } from "@test";
<%_ } _%>

import data from "@public/meta.json";
import { Cards } from "./index";

<%_ if (testing === 'testing-library') { _%>
describe("Cards component testing with testing-library", () => {
    
    it("renders without crashing", () => {
        const component = render(<Cards />);

        expect(component).toBeTruthy();
    });
      it("cards length must be equal to the length of the meta data ", () => {
        const { getAllByTestId } = render(<Cards />);

        const cardContainer = getAllByTestId("container");
        expect(cardContainer).toHaveLength(data.plugins.length);
      });
});
<%_ } _%>
