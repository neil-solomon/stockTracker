import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import Layout from "./components/Layout.js";
import DowStocks from "./components/DowStocks.js";

function App() {
  return (
    <div>
      <DowStocks></DowStocks>
    </div>
  );
}

export default App;
