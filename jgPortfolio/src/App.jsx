import { useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';

function App() {
  return (
    <>
      <h1>J.L.Gerdes</h1>
      <Nav />
      <main className="mx-3">
        <Outlet />  
      </main>    
    </>
  );
}

export default App
