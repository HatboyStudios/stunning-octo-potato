import { useState } from 'react';

import Content from './Content'

import logo from './logo.svg';
import './App.css';

function App() {
  const [screenState, changeScreen] = useState(0);
  return (
    <div>
      <h1>Hello World!</h1>
      <div>
        <button onClick={() => changeScreen(1)}>Screen 1</button>
        <button onClick={() => changeScreen(2)}>Screen 2</button>
        <button onClick={() => changeScreen(3)}>Screen 3</button>
      </div>

      <Content screen = {screenState} />
    </div>
  );
}

export default App;
