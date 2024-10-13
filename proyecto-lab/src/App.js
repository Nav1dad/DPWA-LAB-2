import React from 'react';
import Header from './componentes/encabezado';
import Counter from './componentes/contador';
import Hola from './componentes/saludo';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <Counter />
      <Hola nombre="Pedro" />
    </div>
  );
}

export default App;
