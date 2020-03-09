import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Components/Appbar.css';
import AppBar from './Components/Appbar';
import MapContainer from './Components/MapContainer';
import TextField from './Components/TextField';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppBar />
      </header>
      <body className="body" >

        <section className="App-body">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to my HomePage
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </section>


        <div className="section">
          <div className="left">
            <h1>Event Création</h1>
            <TextField />
          </div>
          <div className="right">
            <h1>Localisation</h1>
            <MapContainer className="Google" />
          </div>

        </div>


      </body>
    </div>
  );
}

export default App;
