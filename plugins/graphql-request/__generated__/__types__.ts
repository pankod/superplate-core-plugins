export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
    { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
    { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    uuid: any;
    timestamptz: any;
    Date: any;
    ObjectID: any;
};

/** select columns of table "users" */

export type GetLaunchesQueryVariables = Exact<{
    limit?: Maybe<Scalars["Int"]>;
}>;

export type GetLaunchesQuery = {
    __typename?: "Query";
    launchesPast?: Maybe<
        Array<
            Maybe<{
                __typename?: "Launch";
                mission_name?: Maybe<string>;
                launch_year?: Maybe<string>;
                links?: Maybe<{
                    __typename?: "LaunchLinks";
                    mission_patch_small?: Maybe<string>;
                    mission_patch?: Maybe<string>;
                }>;
                rocket?: Maybe<{
                    __typename?: "LaunchRocket";
                    rocket_name?: Maybe<string>;
                }>;
            }>
        >
    >;
};
