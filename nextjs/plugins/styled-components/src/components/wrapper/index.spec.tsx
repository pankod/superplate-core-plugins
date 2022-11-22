import { render } from "@test";

import { Wrapper } from "./index";

describe("Wrapper component testing with testing-library", () => {
    const component = render(<Wrapper />);

    it("renders without crashing", () => {
        expect(component).toBeTruthy();
    });
});
