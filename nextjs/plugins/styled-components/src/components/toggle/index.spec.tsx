import { fireEvent, render } from "@test";

import { Toggle } from "./index";

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
