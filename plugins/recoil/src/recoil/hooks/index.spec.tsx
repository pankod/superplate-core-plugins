import mount from "@test/mount";
import { act } from "react-dom/test-utils";
import { useCounter } from "./useCounter";

/**
 * This test is provided as an example.
 * You can test your custom recoil hooks and their behaviors,
 * also you can create snapshot tests for your selectors.
 */

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
