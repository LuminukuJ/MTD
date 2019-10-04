import React from 'react';
import './App.css';
import MenuAppBar from './Components/MenuAppBar';
import OutlinedTextFields from './Components/OutlinedTextFields';

function App() {
  return (
    <div className="App">
      <header>
        <MenuAppBar />
      </header>
      <h1>WELCOME TO MAP TO DEV</h1>
      <h4>Create your event: Fill in the form</h4>

      <OutlinedTextFields />
    </div>
  );
}

export default App;
