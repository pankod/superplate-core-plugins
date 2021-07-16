import { types } from "mobx-state-tree";
import { CounterStore } from "./counter";

export const RootStore = types.model("RootStore", {
    counterStore: CounterStore,
});

export const createRootStore = () =>
    RootStore.create({
        counterStore: CounterStore.create(),
    });
