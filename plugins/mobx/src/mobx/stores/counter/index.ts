import { makeAutoObservable } from "mobx";

import { iroot } from "@mobx/stores/store";
import { icounter } from "./counter";

/**
 * This file is generated as an example of Mobx Stores
 *
 * To learn more about Mobx and state management,
 * please visit https://mobx.js.org/README.html
 */

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
