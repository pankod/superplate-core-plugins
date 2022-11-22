import { AxiosExample } from "./index";
import "./mocks";
import { mockResponse } from "./mocks";

import { render, waitFor } from "@test";

describe("Axios testing with testing-library and nock", () => {
    it("renders the mock result", async () => {
        const { getByText, getByTestId } = render(<AxiosExample />);

        await waitFor(() => {
            expect(getByTestId("joke-container")).toBeDefined();
            expect(getByText(mockResponse[0].setup)).toBeDefined();
            expect(getByText(mockResponse[0].punchline)).toBeDefined();
        });
    });
});
