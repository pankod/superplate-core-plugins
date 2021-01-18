import { makeAutoObservable } from "mobx";

import { iroot } from "@mobx/stores/store";
import { icounter } from "./counter";

export class CounterStore implements icounter {
    count = 0;
    rootStore: iroot;

    constructor(rootStore: iroot) {
        makeAutoObservable(this, { rootStore: false });
        this.rootStore = rootStore;
    }

    increase = () => {
        this.count++;
    };

    decrease = () => {
        this.count--;
    };
}
