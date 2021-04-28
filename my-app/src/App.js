import React from 'react';

import { BasicInput, AwesomeInput } from './components/Inputs';

import './App.css';

const App = () => {

  return (
    <div>
      <BasicInput/>
      <AwesomeInput/>
      <AwesomeInput type="email" placeholder="Please an enter email"/>
    </div>
  );
}

export default App;
