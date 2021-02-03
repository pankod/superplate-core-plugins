import { createRootStore } from "./index";

describe("Mobx - MST Root Store", () => {
    it("should create CounterStore instance as a property", () => {
        const store = createRootStore();
        expect(store.counterStore).toBeDefined();
    });
});
