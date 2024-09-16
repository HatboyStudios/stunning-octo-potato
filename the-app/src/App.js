import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
import Controller from './Controller';
import Navigator from './Navigator';
import LoginProvider from './LoginFun.js';

function App() {
  const [screenState, changeScreen] = useState(0);

  function toHomePage() {
    changeScreen(1);
  }
  function toLoginPage() {
    changeScreen(2);
  }

  return (

    <div>
          <Controller screen={screenState}/>
          <Navigator action1={toHomePage} action2={toLoginPage} />
    </div>
  );
}

export default App;
