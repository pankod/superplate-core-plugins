import { render } from "test";

import { Header } from "./index";

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
