import { RootStoreContext } from "contexts/root-store-context";
import { useContext } from "react";

export const useStore = () => {
    const context = useContext(RootStoreContext);

    if (!context) throw new Error('root store context not found');

    return context;
};