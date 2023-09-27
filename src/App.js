import './App.css';
import "./styles.css";
import React from 'react';
import Nav from "./components/Nav";
import Home from './components/Home';
import Login from './components/Login'
import Informacion from './components/Informacion';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthContext } from './context/AuthContext.jsx';

function App() {
  const [comments, setComentarios] = React.useState([])
  console.log("comentario", comments)
  
  return (
    <BrowserRouter>
    <div className="App">
    <AuthContext>
      <Routes> 
        <Route path='/' element={<Nav />}>
        <Route index element={<Home />}></Route>
        <Route path='/informacion' element={<Informacion />} ></Route>
        <Route path='/login' element={<Login />} ></Route>
        
        <Route path='*' element={<h1>Not Found</h1>} ></Route>
        </Route> 
      </Routes> <br></br>
    </AuthContext>
    </div> 
    </BrowserRouter>
    
  );
}

export default App;

/*Routes replaces the switch component */
