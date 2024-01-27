import React, { useState } from 'react';
import './App.css';

function App() {
  const [texto, setTexto] = useState('');
  const [opcion, setOpcion] = useState('encriptar');
  const [resultado, setResultado] = useState('');

  const procesar = () => {
    const nuevoResultado = (opcion === 'encriptar') ? encriptar(texto) : desencriptar(texto);
    setResultado(nuevoResultado);
  };

  const encriptar = (texto) => {
    return texto.replace(/e/g, "enter")
                .replace(/i/g, "imes")
                .replace(/a/g, "ai")
                .replace(/o/g, "ober")
                .replace(/u/g, "ufat");
  };

  const desencriptar = (texto) => {
    return texto.replace(/ufat/g, "u")
                .replace(/ober/g, "o")
                .replace(/ai/g, "a")
                .replace(/imes/g, "i")
                .replace(/enter/g, "e");
  };

  return (
    <div className="App">
      <h1>Bienvenidas y bienvenidos a nuestro primer desafío!</h1>
      <p>Durante estas cuatro semanas, vamos a trabajar en una aplicación que encripta textos...</p>

      <form>
        <label htmlFor="texto">Texto:</label>
        <textarea id="texto" name="texto" value={texto} onChange={(e) => setTexto(e.target.value)} rows="4" cols="50"></textarea>

        <label htmlFor="opcion">Opción:</label>
        <select id="opcion" name="opcion" value={opcion} onChange={(e) => setOpcion(e.target.value)}>
          <option value="encriptar">Encriptar</option>
          <option value="desencriptar">Desencriptar</option>
        </select>

        <button type="button" onClick={procesar}>Procesar</button>
      </form>

      <div id="resultado">
        {resultado && <p>Resultado: {resultado}</p>}
      </div>
    </div>
  );
}

export default App;
