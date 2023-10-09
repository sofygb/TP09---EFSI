import { useState, useContext, useEffect } from "react";
import { AuthContext } from '../context/AuthContext.js'
import '../App.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';

const puntosVerdes = ["Armenia 1809", "Medrano, Charcas y, 1746 Palermo", "Antezana 355", "Bulnes, Sarmiento y, 1176"];

const MyForm = ({ comments, setComentarios }) => {
  const { loginError } = useContext(AuthContext)
  const { isLoggedIn } = useContext(AuthContext)
  const { isLoginPending } = useContext(AuthContext)
  const loggedinData = (/true/).test(localStorage.getItem("usuario"))
  const [selectedPuntoVerde, setSelectedPuntoVerde] = useState(""); // Estado para almacenar el punto verde seleccionado
  const navigate = useNavigate();
  const [historialComentarios, setHistorialComentario] = useState("");

  var comentariosViejos = []
  comentariosViejos = localStorage.getItem("usuario") || []

  /* 
  {
    comentarios: [
      {

      }
    ]
    isLoggedin: bool
  }
  */

  useEffect(() => {
    const nuevoComentario = {
      puntoVerde: selectedPuntoVerde,
      usuario: document.getElementById("nombreUsuario").value,
      calificacion: document.getElementById("calificacion").value,
      comentario: document.getElementById("comentario").value,
      fecha: document.getElementById("fecha").value,
      hora: document.getElementById("hora").value,
    };

    localStorage.setItem("usuario", [...comentariosViejos, nuevoComentario])
  }, [historialComentarios])


  const irALogin = () => {
    navigate('/login');
  }
  const updateComentario = () => {

    const nuevoComentario = {
      puntoVerde: selectedPuntoVerde,
      usuario: document.getElementById("nombreUsuario").value,
      calificacion: document.getElementById("calificacion").value,
      comentario: document.getElementById("comentario").value,
      fecha: document.getElementById("fecha").value,
      hora: document.getElementById("hora").value,
    };

    setHistorialComentario([...comments, nuevoComentario]);
  };

  console.log(loggedinData)
  if (loggedinData) {
    return (
      <div className="one-half column">
        <h2>Reseñas</h2>
        <div className="form-container">
          <label htmlFor="puntoVerde">Elige un Punto Verde:</label>
          <select
            name="puntoVerde"
            id="puntoVerde"
            value={selectedPuntoVerde}
            onChange={(e) => setSelectedPuntoVerde(e.target.value)}
          >
            <option value="">Selecciona un punto verde</option>
            {puntosVerdes.map((element, index) => (
              <option key={index} value={element}>
                {element}
              </option>
            ))}
          </select>

          <label htmlFor="nombreUsuario">Nombre de Usuario:</label>
          <input
            type="text"
            name="username"
            className="u-full-width"
            id="nombreUsuario"
            value="admin"
            disabled
          />

          {/*<label htmlFor="passwordUsuario">Contraseña</label>
            <input
              type="password"
              name="password"
              className="u-full-width"
              placeholder="Ingresa tu contraseña: admin"
              id="passwordUsuario"
            />*/}

          <label htmlFor="calificacion">Calificación:</label>
          <input
            type="number"
            name="calif"
            className="u-full-width"
            placeholder="Calificación entre 1 y 5"
            id="calificacion"
            min="1"
            max="5"
            required
          />

          <label htmlFor="comentario">Comentario:</label>
          <textarea
            name="comment"
            className="u-full-width"
            placeholder="Escribe tu comentario"
            id="comentario"
            required
          ></textarea>

          <label htmlFor="fecha">Fecha:</label>
          <input
            type="date"
            name="fecha"
            className="u-full-width"
            id="fecha"
          />

          <label htmlFor="hora">Hora:</label>
          <input
            type="time"
            name="hora"
            className="u-full-width"
            id="hora"
          />

          <button
            type="button"
            className="u-full-width button-primary"
            onClick={updateComentario}
          >
            Aceptar
          </button>
        </div>
      </div>

    );
  }
  else {
    return (
      <button onClick={irALogin}>Login para subir comentario</button>
    )
  }
};

export default MyForm;
