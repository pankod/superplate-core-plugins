import { fireEvent, render } from "@test";
import { TestingLibraryExample } from "./index";

/**
 * This test file is generated as an example for testing-library/react with jest
 *
 * To learn more about testing-library and it's environment
 * please visit https://testing-library.com/docs/react-testing-library/intro/
 */

describe("Component testing with testing-library", () => {
    it("renders without crashing", () => {
        const { getByText } = render(
            <TestingLibraryExample onClick={() => undefined} />,
        );
        expect(getByText("Click Me!")).toBeDefined();
    });
    it("button is clickable", () => {
        const mockFn = jest.fn();
        const { getByText } = render(
            <TestingLibraryExample onClick={mockFn} />,
        );

        const btn = getByText("Click Me!");
        fireEvent.click(btn);

        expect(mockFn).toHaveBeenCalledTimes(1);
    });
});
