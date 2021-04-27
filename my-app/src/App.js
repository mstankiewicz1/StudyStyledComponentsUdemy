import React from 'react';

import { Button } from './Buttons';
import { SecondButton } from './Buttons';
import Header from './components/Header';

import './App.css';

const App = () => {

  return (
    <div>
      <Header/>
      Hellow from app
      <Button>Click me!</Button>
      <SecondButton>Click me! i"m second</SecondButton>
    </div>
  );
}

export default App;
