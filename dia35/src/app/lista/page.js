'use client';
import { useEffect, useState } from "react";

export default function Lista() {
  const [nombres, setNombres] = useState([]);

  useEffect(() => {
    fetch("/api/nombres")
      .then((res) => res.json())
      .then((data) => setNombres(data.nombres));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Lista de nombres</h1>

      <ul>
        {nombres.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
    </div>
  );
}