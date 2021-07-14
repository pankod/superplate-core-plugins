import React from "react";
import { useQuery } from "@apollo/client";

import { GET_LAUNCHES } from "./graphql";
import {
  GetLaunches,
  GetLaunchesVariables,
} from "../../../../__generated__/GetLaunches";

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
        <div>
            <div>Last 2 Space-X Launches</div>
            <div>
                {data.launchesPast.map((val) => (
                    <div>
                        <img src={val.links.mission_patch_small} />
                        <div>
                            <h3>{val.mission_name}</h3>
                            <div>
                                <div>
                                    <h4>Rocket:</h4>
                                    <span>{val.rocket.rocket_name}</span>
                                </div>
                                <div>
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
