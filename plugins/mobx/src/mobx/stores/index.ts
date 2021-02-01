import { iroot } from "./store";
import { CounterStore } from "./counter";
import { icounter } from "./counter/counter";

export class RootStore implements iroot {
    counterStore: icounter;

    constructor() {
        this.counterStore = new CounterStore();
    }
}
