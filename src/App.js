import React from 'react';
import Form from './Form';
import Menu from './Menu';
import Nav from './Nav';
import Topo from './Topo';

function App() {
  return (
    <div className="App">
      <Topo />
      <Menu />
      <Nav />
      <Form />
    </div>
  );
}

export default App;
