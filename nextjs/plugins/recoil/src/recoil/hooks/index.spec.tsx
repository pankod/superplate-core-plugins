<%_ if (testing === 'enzyme') { _%>
import { act } from "react-dom/test-utils";
<%_ } else if (testing === 'testing-library') { _%>
import { renderHook, act } from "@testing-library/react-hooks";
<%_ } _%>

<%_ if (testing === 'enzyme') { _%>
import mount from "@test/mount";
<%_ } else if (testing === 'testing-library') { _%>
import { AllTheProviders } from "@test";
<%_ } _%>

import { useCounter } from "./useCounter";

/**
 * This test is provided as an example.
 * You can test your custom recoil hooks and their behaviors,
 * also you can create snapshot tests for your selectors.
 */

<%_ if (testing === 'enzyme') { _%>

const HookWrapper = ({ hook }) => {
    const val = hook();
    // @ts-expect-error add custom property to access in the wrapper
    return <div hook={val} />;
};

describe("Recoil useCounter Hook", () => {
    type HookReturnType = ReturnType<typeof useCounter>;

    const wrapper = mount(<HookWrapper hook={useCounter} />);

    const [_, { increase, decrease }] = (wrapper.find("div").props() as {
        hook: HookReturnType;
    }).hook;

    it("should set initial count to 0", () => {
        const [count] = (wrapper.find("div").props() as {
            hook: HookReturnType;
        }).hook;
        expect(count).toEqual(0);
    });
    it("should increase count by 1", () => {
        act(() => {
            increase();
        });

        wrapper.update();

        const [count] = (wrapper.find("div").props() as {
            hook: HookReturnType;
        }).hook;

        expect(count).toEqual(1);
    });
    it("should increase count by 1", () => {
        act(() => {
            decrease();
        });

        wrapper.update();

        const [count] = (wrapper.find("div").props() as {
            hook: HookReturnType;
        }).hook;

        expect(count).toEqual(0);
    });
});

<%_ } else if (testing === 'testing-library') { _%>

describe("Recoil useCounter Hook", () => {
  it("should set initial value to 0", async () => {
    const { result } = renderHook(() => useCounter(), {
      wrapper: AllTheProviders,
    });
    const [count] = result.current;

    expect(count).toEqual(0);
  });

  it("should increment counter by 1", async () => {
    const { result } = renderHook(() => useCounter(), {
      wrapper: AllTheProviders,
    });
    const [_, { increase }] = result.current;

    act(() => {
      increase();
    });

    const [count] = result.current;

    expect(count).toBe(1);
  });

  it("should decrement counter by 1", async () => {
    const { result } = renderHook(() => useCounter(), {
      wrapper: AllTheProviders,
    });
    const [_, { decrease }] = result.current;

    act(() => {
      decrease();
    });

    const [count] = result.current;

    expect(count).toBe(-1);
  });
});  

<%_ } _%>
