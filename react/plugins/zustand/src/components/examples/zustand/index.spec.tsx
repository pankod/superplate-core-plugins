import { renderHook, act } from "@testing-library/react-hooks";

import { useStore } from "./index";

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
