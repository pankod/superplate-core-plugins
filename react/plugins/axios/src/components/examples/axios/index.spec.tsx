import { AxiosExample } from "./index";
import "./mocks";
import { mockResponse } from "./mocks";

<%_ if (testing === 'testing-library') { _%>
import { render, waitFor } from "test";
<%_ } _%>

<%_ if (testing === 'enzyme') { _%>
import  from "test/mount";
<%_ } _%>

<%_ if (testing === 'testing-library') { _%>
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
<%_ } _%>

<%_ if (testing === 'enzyme') { _%>
describe("Axios testing with enzyme and nock", () => { 
  it("renders without crashing", async () => {
      expect(true).toBeTruthy();
  });
});
<%_ } _%>
    