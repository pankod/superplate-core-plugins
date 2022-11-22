import { render } from "@test";

import data from "@public/meta.json";

import { Cards } from "./index";

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
