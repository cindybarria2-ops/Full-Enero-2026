import { useEffect, useState } from "react";


function App() {
  const [mensajes, setMensajes] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/mensajes")
      .then(response => response.json())
      .then(data => setMensajes(data));
  }, []);

  return (
    <>
    <h1>Mensaje desde express</h1>
    <p>{mensajes}</p>
    </>
  );
}

export default App;
