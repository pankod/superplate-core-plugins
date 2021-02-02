import { types } from "mobx-state-tree";

/**
 * This file is generated as an example of Mobx Stores
 *
 * To learn more about Mobx and state management,
 * please visit https://mobx.js.org/README.html
 */

export const CounterStore = types
    .model("Counter", {
        count: 0,
    })
    .actions((counter) => ({
        increase() {
            counter.count += 1;
        },
        decrease() {
            counter.count -= 1;
        },
    }));
