import { useState } from "react";
import "./App.scss";
import Payment from "./components/Payment/Payment";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Payment />
    </>
  );
}

export default App;
