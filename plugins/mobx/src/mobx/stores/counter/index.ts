import { makeAutoObservable } from "mobx";

import { icounter } from "./counter";

/**
 * This file is generated as an example of Mobx Stores
 *
 * To learn more about Mobx and state management,
 * please visit https://mobx.js.org/README.html
 */

export class CounterStore implements icounter {
    count = 0;

    constructor() {
        makeAutoObservable(this);
    }

    increase = () => {
        this.count++;
    };

    decrease = () => {
        this.count--;
    };
}
