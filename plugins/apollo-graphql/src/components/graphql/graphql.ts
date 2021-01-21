import { gql } from "@apollo/client";

export const GET_LAUNCHES = gql`
    query GetLaunches($limit: Int) {
        launchesPast(limit: $limit) {
            mission_name
            links {
                mission_patch_small
                mission_patch
            }
            launch_year
            rocket {
                rocket_name
            }
        }
    }
`;
