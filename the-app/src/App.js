import logo from './logo.svg';
import React, { useState } from 'react';
import Home from './HomeSc.js';
import Thread from './ThreadSc.js';
import Settings from './SettingSc.js';
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
      <button type="button" onClick={() => setPage('home')}>Home</button>
      <button type="button" onClick={() => setPage('thread')}>Thread</button>
      <button type="button" onClick={() => setPage('settings')}>Settings</button>
      </nav>
      <div>{switchPage()}</div>
    </div>
  );
}

export default App;
