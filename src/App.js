import React, { useState, useEffect, Suspense, lazy } from "react";
import AllComponent from "./components/Admin/AllComponent";
import Login from "./components/Admin/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import "bootstrap/dist/css/bootstrap.min.css";
// import Home from "./components/Home";
const Home = lazy(() => import("./components/Home"));

function App() {
  // <AllComponent />
  return (
    <Suspense fallback={<div style={{ color: "black" }}>Loading...</div>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/authentication" element={<Login />} />
          <Route path="/admin" element={<AllComponent />}></Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
