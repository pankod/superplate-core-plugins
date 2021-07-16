import { observer } from "mobx-react";
import { useRootStore } from "store";

/**
 * This component is provided as an example usage of MobX in components
 *
 * To learn more about MobX and state management
 * please visit https://mobx.js.org/README.html
 */

export const MobxExample: React.FC = observer(() => {
    const { counterStore } = useRootStore();
    const { count, increase, decrease } = counterStore;

    return (
        <div>
            <div>
                <h2>Counter</h2>
                <button type="button" onClick={increase}>
                    +
                </button>
                <span>{count}</span>
                <button type="button" onClick={decrease}>
                    -
                </button>
            </div>
            <a href="https://mobx.js.org" target="_blank">
                Go To Documentation
            </a>
        </div>
    );
});
