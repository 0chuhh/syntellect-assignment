import { createContext, useContext } from "react";
import RootStore from "stores/root-store";

export const RootStoreContext = createContext<RootStore | null>(null);
