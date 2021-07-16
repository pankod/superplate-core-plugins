import { IRoot } from "./store";
import { CounterStore } from "./counter";
import { ICounter } from "./counter/counter";

export class RootStore implements IRoot {
    counterStore: ICounter;

    constructor() {
        this.counterStore = new CounterStore();
    }
}
