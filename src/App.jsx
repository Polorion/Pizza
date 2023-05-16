import "./App.scss";
import Content from "./components/content/Content";
import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/cart/Cart";
import Layout from "./layout/Layout";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Routes>
          <Route path={"/"} element={<Layout />}>
            <Route path={""} element={<Content />} />
            <Route path={"cart"} element={<Cart />} />
            <Route path={"*"} element={<div>страница не найдена</div>} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
