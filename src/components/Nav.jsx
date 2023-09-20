import React from "react";
import "../styles.css";
import { Link, Outlet } from "react-router-dom";


export default function Nav(){

  return(
   <React.Fragment>
        <div className="navbar">
           <ul className="nav-links">
              <Link to="/">Puntos Verdes</Link>
              <Link to="/informacion">Más Información</Link>
              <Link to="/login">Iniciar Sesión</Link>
           </ul>
        </div>
        <Outlet />
    </React.Fragment>
  );

}