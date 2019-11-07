import React from "react";
import NextButton from "../src/components/ButtonComponents/NextButton";
import PreviousButton from "../src/components/ButtonComponents/PreviousButton";
import ImgBox from "../src/components/DisplayComponents/ImgBox";
import "./App.css";
import ImgList from "./components/DisplayComponents/ImgList";

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
        <ImgList />
        <NextButton />
        <PreviousButton />
      </p>
    </div>
  );
}

export default App;
