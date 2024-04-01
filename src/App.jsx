// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./page/Home";

function App() {
  return (
    <>
      <Navbar />
      <main className="main-section">
        <Home />
      </main>
    </>
  );
}

export default App;
