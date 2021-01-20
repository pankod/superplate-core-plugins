import React, { useState, useEffect } from "react";
import axios from "axios";

/**
 * This component is generated as an example for axios
 *
 * To learn more about axios and data fetching,
 * please visit https://github.com/axios/axios
 */

const BASE_API_URL = "https://official-joke-api.appspot.com/";

const API_URL = "/jokes/programming/random";

const jokesApi = axios.create({
    baseURL: BASE_API_URL,
});

export const AxiosExample = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        jokesApi({
            method: "get",
            url: API_URL,
        })
            .then((res) => res.data)
            .then(
                (result) => {
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
    }

    if (!isLoaded) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <header>
                <h2>Fetch Data Fetching Example</h2>
            </header>
            <main>
                <p>Programmer Jokes {`#${data[0].id}`}</p>
                <p>{data[0].setup}</p>
                <p>{data[0].punchline}</p>
            </main>
            <footer>
                <a
                    href="https://github.com/axios/axios"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Go To Documentation
                </a>
            </footer>
        </div>
    );
};
