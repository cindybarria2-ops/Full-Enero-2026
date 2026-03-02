import React, { useState, useEffect } from "react";

function App() {
  const [color, setColor] = useState("red");
  const [isHover, setIsHover] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

    const cambiarColor = () => {
    setColor(color === "red" ? "blue" : "red");
  };

  const baseStyle = {
    padding: "10px 20px",
    border: "none",
    cursor: "pointer",
    color: "white",
    margin: "10px",
    fontSize: "16px"
  };

  const hoverButtonStyle = {
    ...baseStyle,
    backgroundColor: isHover ? "orange" : "purple"
  };

  const responsiveTextStyle = {
    color: width < 600 ? "red" : "green",
    fontSize: "20px",
    marginTop: "20px"
  };

  const styles = {
    titulo: {
      color: "blue",
      textAlign: "center"
    },
    botonVerde: {
      backgroundColor: "green",
      color: "white",
      padding: "10px 20px",
      border: "none",
      cursor: "pointer",
      margin: "10px"
    },
    botonDinamico: {
      backgroundColor: color,
      color: "white",
      padding: "10px 20px",
      border: "none",
      cursor: "pointer",
      margin: "10px"
    }
  };

  return (
    <>
    <div style={{ textAlign: "center", marginTop: "50px" }}>

      <h1 style={styles.titulo}> Nivel 1</h1>

      <button style={styles.botonVerde}>
        Botón 1
      </button>
      <br />

      <button style={styles.botonDinamico} onClick={cambiarColor}>
        Botón 2 color
      </button>
    </div>

     <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Nivel 2</h1>

      <button
        style={hoverButtonStyle}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        boton 3 hover
      </button>

      <p style={responsiveTextStyle}>
        El ancho actual es: {width}px
      </p>
    </div>
    </>
  );
}

export default App;