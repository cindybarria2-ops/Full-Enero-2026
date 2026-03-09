import React from "react";
import InputFocus from "./components/InputFocus";
import ContadorConRenders from "./components/Contador";
import ContadorConPrevio from "./components/ContadorPrevio";
import Temporizador from "./components/Temporizador";

function App() {
  return (
    <div>
      <h1>nivel 1</h1>
      <InputFocus />
      <ContadorConRenders />
      <ContadorConPrevio />
      <h1>nivel 2</h1>
      <Temporizador />
    </div>
  );
}

export default App;