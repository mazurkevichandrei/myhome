import React from 'react';
import './App.css';
import Header from './Components/Header/Header';

function App() {
  document.title = 'myHome'
  return (
    <div className="App">
      <container className="App-body">
        <Header>

        </Header>
      </container>
    </div>
  );
}

export default App;
