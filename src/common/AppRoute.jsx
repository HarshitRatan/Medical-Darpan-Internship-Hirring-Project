import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../page/Home";
import Header from "../component/Header";

const AppRoute = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/*" element={<Home />}></Route>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default AppRoute;
