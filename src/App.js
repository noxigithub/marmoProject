import React, { useState } from 'react';
import './css/style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import LoginForm from './pages/login';
import DocumentsHome from './pages/documents.js';
import { LoginContext } from './helpers/context';



function App() {

  const [connected, setConnected] = useState({});

  return (
    <LoginContext.Provider value={{connected,setConnected}}>
    <div className="App">
      <BrowserRouter>
        <Routes> 
          <Route path="/" element= { <Home /> }/> 
          <Route path="/login" element={ <LoginForm /> }/>
          <Route path="/documents" element={<DocumentsHome/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
    </LoginContext.Provider>
  );
}

export default App;