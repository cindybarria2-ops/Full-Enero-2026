import React, { useContext } from "react";
import { LanguageContext } from "../context/LenguageContext.jsx";


const LanguageToggle = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <div>
      <p>Idioma actual: {language}</p>
      <button onClick={toggleLanguage}>
        Cambiar a {language === "es" ? "English" : "Español"}
      </button>
    </div>
  );
};

export default LanguageToggle;