import Listado from './Listado';
import MyForm from './Formulario';
import {AuthContext} from '../context/AuthContext.js'
import React, { useContext } from 'react';

const Home = () => {
    const {loginError}=useContext(AuthContext)
    const {isLoggedIn}=useContext(AuthContext)
    const {isLoginPending}=useContext(AuthContext)


    const [comments, setComentarios] = React.useState([])
    return (
    <div>
        <h1>Puntos Verdes</h1>
        <div id="map-container">
            <iframe title="Listado de Puntos Verdes" id="map-canvas" width="800" height="550" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=puntos verdes&amp;t=18;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>
    
        <div className="container flex" style={{maxWidth: "100%", marginLeft:"3rem", textAlign:"left"}}>
            <div className="row">
            <MyForm comments={comments} setComentarios={setComentarios}>
            { isLoginPending && <div>Please wait...</div> }
      { isLoggedIn && <div>Success.</div> }
      { loginError && <div>{loginError.message}</div> }
            </MyForm>
            </div> 
            <Listado comments={comments} setComentarios={setComentarios} />
        </div>
    </div>
    )
}

export default Home;