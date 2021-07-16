import { CounterStore } from "./index";

describe("Mobx Counter Store", () => {
    it("increases counter by 1", () => {
        const store = CounterStore.create();
        expect(store.count).toBe(0);
        store.increase();
        expect(store.count).toBe(1);
    });
    it("decreases counter by 1", () => {
        const store = CounterStore.create();
        expect(store.count).toBe(0);
        store.decrease();
        expect(store.count).toBe(-1);
    });
});
