import React from "react";

export const EnvExample = () => {
    return (
        <div>
            <div>REACT_APP_ENV_VARIABLE</div>
            <div>{process.env.REACT_APP_ENV_VARIABLE}</div>
            <div>REACT_APP_DEVELOPMENT_ENV_VARIABLE</div>
            <div>{process.env.REACT_APP_DEVELOPMENT_ENV_VARIABLE}</div>
            <div>REACT_APP_ENV_LOCAL_VARIABLE</div>
            <div>{process.env.REACT_APP_ENV_LOCAL_VARIABLE}</div>
            <div>REACT_APP_PRODUCTION_ENV_VARIABLE</div>
            <div>
                {process.env.REACT_APP_PRODUCTION_ENV_VARIABLE ?? "undefined"}
            </div>
        </div>
    );
};
