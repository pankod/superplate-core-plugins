import { INCREASE, DECREASE } from "@redux/actionTypes";

import Counter from "./index";

describe("Redux Counter Reducer", () => {
    it("should create reducer with initial props", () => {
        const initial = {
            count: 0,
        };
        const reducer = Counter(initial, {});
        expect(reducer).toEqual(initial);
    });
    it("INCREASE action type should increase counter by 1", () => {
        const initial = {
            count: 0,
        };
        const expected = {
            count: 1,
        };
        const reducer = Counter(initial, { type: INCREASE });
        expect(reducer).toEqual(expected);
    });
    it("DECREASE action type should decrease counter by 1", () => {
        const initial = {
            count: 0,
        };
        const expected = {
            count: -1,
        };
        const reducer = Counter(initial, { type: DECREASE });
        expect(reducer).toEqual(expected);
    });
});
