import React from "react";
import "./App.css";
import { RootStoreContext } from "contexts/root-store-context";
import RootStore from "stores/root-store";
import { FirstControl } from "components/modules/first-control";
import { SecondControll } from "components/modules/second-controll";

const store = new RootStore();

function App() {
  return (
    <RootStoreContext.Provider value={store}>
      <FirstControl />
      <SecondControll />
    </RootStoreContext.Provider>
  );
}

export default App;
