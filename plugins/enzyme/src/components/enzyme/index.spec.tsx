import mount from "@test/mount";
import { EnzymeExample } from "./index";

/**
 * This test file is generated as an example for enzyme with jest
 *
 * To learn more about enzyme and it's usage
 * please visit https://enzymejs.github.io/enzyme/
 */

describe("Component testing with enzyme", () => {
  it("renders without crashing", () => {
    const wrapper = mount(<EnzymeExample onClick={() => {}} />);
    expect(wrapper.find("button")).toBeDefined();
  });
  it("button is clickable", () => {
    const mockFn = jest.fn();
    const wrapper = mount(<EnzymeExample onClick={mockFn} />);

    const btn = wrapper.find("button");
    btn.simulate("click");

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
