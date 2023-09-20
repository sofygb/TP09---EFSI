import React from "react";
import { UserContext } from "../context/UserContext";

const Usuario = () => {
    const {usuario} = React.useContext(UserContext);

    return (
        <div>
            <h1>Usuario</h1> {/*cambiar para que muestre que usuario está logueado*/}
            <h2>Seleccionado: {usuario}</h2>
        </div>
    )
}

export default Usuario;