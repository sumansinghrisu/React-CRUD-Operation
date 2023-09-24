import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import AddEmployee from "./components/AddEmployee";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addEmployee" element={<AddEmployee />} />
        </Routes>
      </App>
    </BrowserRouter>
  </StrictMode>
);
