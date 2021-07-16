<%_ if (testing === 'enzyme') { _%>
import { act } from "react-dom/test-utils";
<%_ } else if (testing === 'testing-library') { _%>
import { renderHook, act } from "@testing-library/react-hooks";
<%_ } _%>

<%_ if (testing === 'enzyme') { _%>
import mount from "@test/mount";
<%_ }  _%>

import { useStore } from "./index";

<%_ if (testing === 'enzyme') { _%>

const HookWrapper = ({ hook }) => {
    const val = hook();
    // @ts-expect-error add custom property to access in the wrapper
    return <div hook={val} />;
};

describe("zustand useStore Hook", () => {
    type HookReturnType = ReturnType<typeof useStore>;

    const wrapper = mount(<HookWrapper hook={useStore} />);

    const { inc, dec } = (
    wrapper.find("div").props() as {
        hook: HookReturnType;
    }
    ).hook;

    it("should set initial count to 1", () => {
    const { count } = (
        wrapper.find("div").props() as {
        hook: HookReturnType;
        }
    ).hook;
    expect(count).toEqual(1);
    });
    it("should inc count by 2", () => {
    act(() => {
        inc();
    });

    wrapper.update();

    const { count } = (
        wrapper.find("div").props() as {
        hook: HookReturnType;
        }
    ).hook;

    expect(count).toEqual(2);
    });
    it("should inc count by 1", () => {
    act(() => {
        dec();
    });

    wrapper.update();

    const { count } = (
        wrapper.find("div").props() as {
        hook: HookReturnType;
        }
    ).hook;

    expect(count).toEqual(1);
    });
});

<%_ } else if (testing === 'testing-library') { _%>

describe("zustand useStore hooks", () => {
  it("should set initial value to 1", async () => {
    const { result } = renderHook(() => useStore());

    const { count } = result.current;

    expect(count).toEqual(1);
  });

  it("should increment counter by 1", async () => {

    const { result } = renderHook(() => useStore());
    const { inc } = result.current;

    act(() => {
      inc();
    });

    const { count } = result.current;

    expect(count).toBe(2);
  });

  it("should decrement counter by 1", async () => {
    const { result } = renderHook(() => useStore());
    const { dec } = result.current;

    act(() => {
      dec();
    });

    const { count } = result.current;

    expect(count).toBe(1);
  });
});

<%_ } _%>


