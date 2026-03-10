import React from "react";
import { UserProvider } from "./context/UserContext";
import { CounterProvider } from "./context/CounterContext";
import { ThemeProvider } from "./context/ThemeContext";

import UserProfile from "./components/UserProfile";
import Counter from "./components/Counter";
import ThemeToggle from "./components/ThemeToggle";
import { LanguageProvider } from "./context/LenguageContext";
import LanguageToggle from "./components/LenguageToggle";

function App() {
  return (
    <>
    <h1>Nivel 1</h1>
    <UserProvider>
      <CounterProvider>
        <ThemeProvider>
          <div>
            <UserProfile />
            <Counter />
            <ThemeToggle />
          </div>
        </ThemeProvider>
      </CounterProvider>
    </UserProvider>
    <h1>Nivel 2</h1>
     <LanguageProvider>
      <LanguageToggle />
    </LanguageProvider>
    </>
  );
}

export default App;