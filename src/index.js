import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import D from "./components/details"
import reportWebVitals from "./reportWebVitals";
import { GlobalStateProvider } from "./GlobalContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStateProvider>
     <BrowserRouter>
        <Routes>
          
          <Route path="/" Component={App}/> 
          <Route path="/components" Component={D}/>
        </Routes>
      </BrowserRouter>
      
    </GlobalStateProvider>
  </React.StrictMode>
);


reportWebVitals();
