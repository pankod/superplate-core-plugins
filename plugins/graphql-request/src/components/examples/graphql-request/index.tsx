import React from "react";
import { request } from "graphql-request";

import { GET_LAUNCHES } from "./graphql";
import { GetLaunchesQuery } from "@graphqlTypes/__types__";

const endpoint = "https://api.spacex.land/graphql/";

export const GraphQLRequestExample: React.FC = () => {
    const [launches, setLaunches] = React.useState<GetLaunchesQuery>();
    const [hasData, setHasData] = React.useState(false);

    if (!hasData) {
        request(endpoint, GET_LAUNCHES, { limit: 2 }).then(
            (data: GetLaunchesQuery) => {
                setLaunches(data);
                setHasData(true);
            },
        );
    }

    if (!hasData) return <div>Loading...</div>;

    return (
        <div>
            <div>Last 2 Space-X Launches</div>
            <div>
                {launches.launchesPast.map((val) => (
                    <div key={`key-${val.mission_name}`}>
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
