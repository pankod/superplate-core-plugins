import { iroot } from "@mobx/store";

export interface icounter {
    count: number;
    rootStore: iroot;
    increase: () => void;
    decrease: () => void;
}
