import React from "react";
import { usePrevious, useWindowSize } from "react-use";

/**
 * This component is created as an example for React-use hooks
 *
 * To learn more about react-use and it's hooks
 * please visit https://github.com/streamich/react-use
 */

export const ReactUseExample = () => {
    const [count, setCount] = React.useState(0);
    const prevCount = usePrevious(count);
    const { width, height } = useWindowSize();
    return (
        <div>
            <header>
                <h2>React Use Example</h2>
                <p>
                    react-use has various hooks that you can use with ease. To
                    learn more about react-use please check out their
                    documentation.
                </p>
            </header>
            <main>
                <div>
                    <p>usePrevious</p>
                    <p>
                        Now: {count}, before: {prevCount}
                    </p>
                    <p>
                        <button onClick={() => setCount(count + 1)}>
                            Increment
                        </button>
                        <button onClick={() => setCount(count - 1)}>
                            Decrement
                        </button>
                    </p>
                </div>
                <div>
                    <p>useWindowSize</p>
                    <p>
                        width: {`${width}px`}, height: {`${height}px`}
                    </p>
                </div>
            </main>
            <footer>
                <a
                    href="https://github.com/streamich/react-use"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Go To Documentation
                </a>
            </footer>
        </div>
    );
};
