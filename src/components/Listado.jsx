import React from "react";
import Comentario from './Comentario';

const Listado = ({comments, setComentarios}) => {

    return comments.map((comentario, i) => <Comentario key={i} {...comentario} posicion={i} setComentarios={setComentarios} comments={comments}/>)
}

export default Listado;