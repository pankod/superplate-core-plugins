import { RootStore } from "./index";

describe("Mobx Root Store", () => {
    it("should create CounterStore instance as a property", () => {
        const store = new RootStore();
        expect(store.counterStore).toBeDefined();
    });
});
