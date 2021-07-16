import { types } from "mobx-state-tree";

/**
 * This file is generated as an example of Mobx State Tree Stores
 *
 * To learn more about Mobx and Mobx State Tree,
 * please visit https://mobx-state-tree.js.org/intro/welcome
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
