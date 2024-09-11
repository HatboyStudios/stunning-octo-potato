import logo from './logo.svg';
import React, { useState } from 'react';
import Home from './HomeSc.js';
import Thread from './ThreadSc.js';
import Settings from './SettingSc.js';
import CustomButton from './bntCreation.js';
import './App.css';



function App() {
  const [page, setPage] = useState('home');

  const switchPage = () => {
    switch (page) {
      case 'home':
        return <Home />;
      case 'thread':
        return <Thread />;
      case 'settings':
        return <Settings />;
      default:
        return <Home />;
    }
  };


  return (
      <div>
        <nav>
        <CustomButton onClick={() => setPage('home')} label="Home" id="NavHome"/>
        <CustomButton onClick={() => setPage('thread')} label="Thread" id="NavThread" />
        <CustomButton onClick={() => setPage('settings')} label="Settings" id="NavSettings" />
        </nav>

      <div>{switchPage()}</div>
    </div>
  );
}

export default App;
