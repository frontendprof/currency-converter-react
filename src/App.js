import React from 'react';
import CurrencyRow from "./CurrencyRow";
import './App.css';

function App() {
  return (
    <div className="App">

      <h1>Convert</h1>
      <CurrencyRow />
      <div className="equals">=</div>
      <CurrencyRow />
      
    </div>
  );
}

export default App;
