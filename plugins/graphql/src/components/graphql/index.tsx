import React from "react";
import { useQuery } from "@apollo/client";

import { GET_LAUNCHES } from "./query";
import styles from "./index.module.css";
import { GetLaunches, GetLaunchesVariables } from "@GraphqlTypes/GetLaunches";

export const GraphQLExample: React.FC = () => {
    const { data, loading, error } = useQuery<
        GetLaunches,
        GetLaunchesVariables
    >(GET_LAUNCHES, {
        variables: { limit: 2 },
    });

    if (loading) return <p>Loading..</p>;
    if (error) return <p>ERROR: {error.message}</p>;
    if (!data) return <p>Not found</p>;

    return (
        <div className={styles.app}>
            <div className={styles.header}>Last 2 Space-X Launches</div>
            <div className={styles.container}>
                {data.launchesPast.map((val) => (
                    <div className={styles.card}>
                        <img src={val.links.mission_patch_small} />
                        <div className={styles.content}>
                            <h3>{val.mission_name}</h3>
                            <div className="">
                                <div className={styles.info}>
                                    <h4>Rocket:</h4>
                                    <span>{val.rocket.rocket_name}</span>
                                </div>
                                <div className={styles.info}>
                                    <h4>Launch year:</h4>
                                    <span>{val.launch_year}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};