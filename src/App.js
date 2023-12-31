import './App.css';
import "./styles.css";
import React from 'react';
import Nav from "./components/Nav";
import Home from './components/Home';
import Login from './components/Login'
import Informacion from './components/Informacion';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ContextProvider } from './context/AuthContext.js';

function App() {
  const [comments, setComentarios] = React.useState([])
  console.log("comentario", comments)
  
  return (
    <BrowserRouter>
    <div className="App">
    <ContextProvider>
      <Routes> 
        <Route path='/' element={<Nav />}>
        <Route index element={<Home />}></Route>
        <Route path='/informacion' element={<Informacion />} ></Route>
        <Route path='/login' element={<Login />} ></Route>
        
        <Route path='*' element={<h1>Not Found</h1>} ></Route>
        </Route> 
      </Routes> <br></br>
    </ContextProvider>
    </div> 
    </BrowserRouter>
    
  );
}

export default App;

/*Routes replaces the switch component 


*/
