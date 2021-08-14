import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReduxThunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import {CardViewReducer} from "./redux/reducer";
import {CardView} from "./page/CardView";

const middleware = [ReduxThunk];


export const store = createStore(
    CardViewReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);


function App() {
  return (
      <div className="App">
          <CardView/>
    </div>
  );
}

export default App;
