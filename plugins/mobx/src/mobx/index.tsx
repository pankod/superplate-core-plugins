import React from "react";

import { RootStore } from "./stores";
import { iroot } from "./stores/store";

let store: iroot;

const StoreContext = React.createContext<RootStore | undefined>(undefined);

export const RootStoreProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const root = store ?? new RootStore();

    return (
        <StoreContext.Provider value={root}>{children}</StoreContext.Provider>
    );
};

export const useRootStore = () => {
    const context = React.useContext(StoreContext);
    if (context === undefined) {
        throw new Error("useRootStore must be used within RootStoreProvider");
    }

    return context;
};
