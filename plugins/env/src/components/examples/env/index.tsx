import React from "react";

export const EnvExample = () => {
    return (
        <div>
            <div>
                NEXT_PUBLIC_ENV_VARIABLE
                </div>
            <div>
                {process.env.NEXT_PUBLIC_ENV_VARIABLE}
            </div>
            <div>
                NEXT_PUBLIC_ENV_LOCAL_VARIABLE
                </div>
            <div>
                {process.env.NEXT_PUBLIC_ENV_LOCAL_VARIABLE}
            </div>
            <div>
                NEXT_PUBLIC_DEVELOPMENT_ENV_VARIABLE
                </div>
            <div>
                {process.env.NEXT_PUBLIC_DEVELOPMENT_ENV_VARIABLE}
            </div>
            <div>
                NEXT_PUBLIC_PRODUCTION_ENV_VARIABLE
                </div>
            <div>
                {process.env.NEXT_PUBLIC_PRODUCTION_ENV_VARIABLE ??
                    "undefined"}
            </div>
        </div>
    );
};
