import { useRecoilState } from "recoil";

import { counter } from "@recoil/atoms";

export const useCounter: () => [
    number,
    { increase: () => void; decrease: () => void },
] = () => {
    const [count, setCount] = useRecoilState(counter);

    const increase = () => {
        setCount((current) => current + 1);
    };

    const decrease = () => {
        setCount((current) => current - 1);
    };

    return [count, { increase, decrease }];
};
