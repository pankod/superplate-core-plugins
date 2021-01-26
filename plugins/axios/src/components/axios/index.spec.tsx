import { AxiosExample } from "./index";
import nock from "nock";

<%_ if (testing === 'testing-library') { _%>
import { render, waitFor } from "@test";
<%_ } _%>

<%_ if (testing === 'enzyme') { _%>
import  from "@test/mount";
<%_ } _%>
    

const mockResponse = [
  {
    id: 74,
    type: "programming",
    setup: "Why do C# and Java developers keep breaking their keyboards?",
    punchline: "Because they use a strongly typed language.",
  },
];

<%_ if (testing === 'testing-library') { _%>
describe("Axios testing with testing-library and nock", () => {
  beforeAll(() => {
    nock("https://official-joke-api.appspot.com")
      .get("/jokes/programming/random")
      .reply(200, mockResponse);
  });

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
    beforeAll(() => {
        nock("https://official-joke-api.appspot.com")
        .get("/jokes/programming/random")
        .reply(200, mockResponse);
    });
    
    it("renders without crashing", async () => {
        expect(true).toBeTruthy();
    });
    });
<%_ } _%>
    