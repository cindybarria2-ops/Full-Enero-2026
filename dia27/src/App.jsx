import React, { useState, useEffect } from "react";
import "./App.css";

function App() {

  const [pokemonName, setPokemonName] = useState("");
  const [pokemon, setPokemon] = useState(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

console.log(pokemon);

  useEffect(() => {
    if (!search) return;

    const fetchPokemon = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`);

        if (!response.ok) {
          throw new Error("Pokemon no encontrado");
        }

        const data = await response.json();
        setPokemon(data);

      } catch (err) {
        setPokemon(null);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();

  }, [search]);

  const buscarPokemon = () => {
    setSearch(pokemonName.toLowerCase());
  };

  return (
    <div className="container">
      <h1>Pokédex</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Escribe el nombre del pokemon"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
        />

        <button onClick={buscarPokemon}>
          Buscar
        </button>
      </div>

      {loading && <p>Cargando...</p>}

      {error && <p className="error">{error}</p>}

      {pokemon && (
        <div className="card">
          <h2>{pokemon.name.toUpperCase()}</h2>

          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
          />

          <p><strong>Peso:</strong> {pokemon.weight}</p>
          <p><strong>Altura:</strong> {pokemon.height}</p>

          <p>
            <strong>Tipos:</strong>{" "}
            {pokemon.types.map((t) => t.type.name).join(", ")}
          </p>

          <p>
            <strong>Habilidades:</strong>{" "}
            {pokemon.abilities.map((a) => a.ability.name).join(", ")}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;