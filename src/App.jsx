import React from "react";
import { createStore } from 'redux'
import { createStoreHook, Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./stores/rootReducer";
import Home from "./pages";
import TicketDetail from "./pages/ticket-detail";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const store = createStore(reducers, composeWithDevTools());
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="/ticket-detail/:id" element={<TicketDetail />} />
            </Route>
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
