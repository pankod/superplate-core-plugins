import { increase, decrease } from "./actions";

describe("Redux Actions", () => {
    describe("Counter Actions", () => {
        it("increase should return increase.type", () => {
            const action = increase();
            expect(action.type).toBe(increase.type);
        });
        it("decrease should return decrease.type", () => {
            const action = decrease();
            expect(action.type).toBe(decrease.type);
        });
    });
});
