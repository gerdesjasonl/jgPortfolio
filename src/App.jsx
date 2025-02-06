import { useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';

function App() {
  return (
    <>
      <header> 
      <h1 className= "profileName">J.L.Gerdes</h1>
      <Nav />
      </header>
      <main className="mx-3">
        <Outlet />  
      </main> 
      <footer>
      
      </footer>   
    </>
  );
}

export default App
