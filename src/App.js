import React from 'react';
import './App.css';

import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      {/* <Pages /> */}
    </Provider>
  );
}

export default App;


