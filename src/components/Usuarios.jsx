import React from "react";
import Usuario from './Usuario'
import { UserContext } from "../context/UserContext";

const Usuarios = () => {
    const {setUser} = React.useContext(UserContext);

    return (
    <div>
        <h1>Usuarios</h1>
        <button onClick={() => setUser('username1')}>Cambiar de Usuario</button> {/*cambiar para que tenga un listado de usuarios existentes para cambiar entre si*/}
        <Usuario />
    </div>
    )
}

export default Usuarios;