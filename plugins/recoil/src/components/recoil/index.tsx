import React from "react";

import { useCounter } from "@recoil/hooks";

/**
 * This component is provided as an example usage of Recoil in components
 *
 * To learn more about Recoil and state management
 * please visit https://recoiljs.org
 */

export const RecoilExample: React.FC = () => {
    const [count, { increase, decrease }] = useCounter();

    return (
        <div>
            <div>
                <h2>Recoil Counter</h2>
                <button
                    type="button"
                    onClick={increase}
                >
                    +
                </button>
                <span>{count}</span>
                <button
                    type="button"
                    onClick={decrease}
                >
                    -
                </button>
            </div>
            <a
                href="https://recoiljs.org/"
                target="_blank"
            >
                Go To Documentation
            </a>
        </div>
    );
};
