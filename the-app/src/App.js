import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
import Controller from './Controller';
import Navigator from './Navigator';

function App() {
  const [screenState, changeScreen] = useState(0);

  function toHomePage() {
    changeScreen(1)
  }

  return (
    <div>
          <Controller screen={screenState}/>
          <Navigator action1={toHomePage} />
    </div>
  );
}

export default App;
