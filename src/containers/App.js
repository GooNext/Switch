import React from 'react';
import './App.scss';
import Switch from '../components/Switch/Switch';

function App() {

  const isText = {
    trueText : 'true',
    falseText : 'false'
  }

  return (
    <div className="App">
      <Switch
         value = {isText}
      />
    </div>
  );
}

export default App;
