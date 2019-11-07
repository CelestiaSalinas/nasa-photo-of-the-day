import React from "react";
import "./App.css";
import ImgList from "./components/DisplayComponents/ImgList";
import Header from "./components/DisplayComponents/Header";

function App() {
  return (
    <div className="App">
      <p>
        <Header />
        <ImgList />
      </p>
    </div>
  );
}

export default App;
