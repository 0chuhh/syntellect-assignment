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
      <div style={{maxWidth:'70%', margin:'0 auto'}}>
        <FirstControl />
        <SecondControll />
      </div>
    </RootStoreContext.Provider>
  );
}

export default App;
