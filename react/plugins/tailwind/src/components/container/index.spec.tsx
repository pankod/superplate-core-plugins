import { render } from "test";

import { Container } from "./index";

describe("Wrapper component testing with testing-library", () => {
    const component = render(<Container />);

    it("renders without crashing", () => {
        expect(component).toBeTruthy();
    });
});
