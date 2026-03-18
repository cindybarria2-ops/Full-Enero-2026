'use client';
import { useState } from "react";

export default function Formulario() {
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");

  const enviar = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/nombres", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nombre }),
    });

    const data = await res.json();

    if (data.recibido) {
      setMensaje("✅ Nombre enviado correctamente");
      setNombre("");
    } else {
      setMensaje("❌ Error al enviar");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Enviar nombre</h1>

      <form onSubmit={enviar}>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Escribe tu nombre"
        />
        <button type="submit">Enviar</button>
      </form>

      <p>{mensaje}</p>
    </div>
  );
}