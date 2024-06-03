import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./HomePage";
import { FormPage } from "./FormPage";

// https://reactrouter.com/
export const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/new" element={<FormPage />} />
    </Routes>
  </Router>
);
