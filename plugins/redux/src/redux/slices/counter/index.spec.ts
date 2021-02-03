import Counter, { decrease, increase } from "./index";

describe("Redux Counter Reducer", () => {
    it("should create reducer with initial props", () => {
        const initial = {
            count: 0,
        };
        const reducer = Counter(initial, {});
        expect(reducer).toEqual(initial);
    });
    it("increase action should increase counter by 1", () => {
        const initial = {
            count: 0,
        };
        const expected = {
            count: 1,
        };
        const reducer = Counter(initial, increase());
        expect(reducer).toEqual(expected);
    });
    it("decrease action should decrease counter by 1", () => {
        const initial = {
            count: 0,
        };
        const expected = {
            count: -1,
        };
        const reducer = Counter(initial, decrease());
        expect(reducer).toEqual(expected);
    });
});
