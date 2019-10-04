import React from 'react';
import logo from './logo.svg';
import './App.css';
import Eventos from './eventos';
import Evento2 from './evento2';

function App() {


  
  return (
    <div className="App">
        <Eventos valor="23" />
        <Evento2 />
    </div>
  );
}

export default App;
