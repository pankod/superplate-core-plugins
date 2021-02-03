import React, { useEffect, useState } from "react";

/**
 * This component is generated as an example for fetch
 */

const API_URL =
    "https://official-joke-api.appspot.com/jokes/programming/random";

export const FetchExample = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);

    console.log("data: ", data);
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch(API_URL)
            .then((res) => {
                console.log("res: ", res);
                return res.json();
            })
            .then(
                (result) => {
                    console.log("result: ", result);
                    setData(result);
                    setIsLoaded(true);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                },
            );
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                <header>
                    <h2>Fetch Data Fetching Example</h2>
                </header>
                <main
                <%_ if (testing !== "none") { _%>
                    data-testid="joke-container"
                <%_ } _%>
                >
                    <p>
                        Programmer Jokes {`#${data[0].id}`}
                    </p>
                    <p>{data[0].setup}</p>
                    <p>{data[0].punchline}</p>
                </main>
                <footer>
                    <a
                        href="https://swr.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Go To Documentation
                    </a>
                </footer>
            </div >
        );
    }
};
