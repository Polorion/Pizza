import "./App.scss";
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import * as React from "react";
import { Route, Routes } from "react-router-dom";

export const SearchContext = React.createContext();
function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Routes>
          <Route path={"/"} element={<Content />} />
          <Route path={"/basket"} element={<div>1234</div>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
