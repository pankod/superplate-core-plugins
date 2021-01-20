import { increase, decrease } from "./actions";
import { INCREASE, DECREASE } from "./actionTypes";

describe("Redux Actions", () => {
    describe("Counter Actions", () => {
        it("increase should return type INCREASE", () => {
            const action = increase();
            expect(action.type).toBe(INCREASE);
        });
        it("decrease should return type DECREASE", () => {
            const action = decrease();
            expect(action.type).toBe(DECREASE);
        });
    });
});
