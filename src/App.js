import React from 'react';
import {BrowserRouter as Router, Routes, Rout, Route} from 'react-router-dom'

import './App.css';
//Components
import Header from './Components/Header/Header';

//Pages
import House from './Components/HousePage/House';
import Admin from './Components/AdminPage/Admin';

function App() {
  document.title = 'myHome'
  return (
    <Router>
    <div className="App">
      <container className="App-body">
          <Header />
          <Routes>
            <Route path='/' element={<House />}/>
            <Route path='/admin' element={<Admin />}/>
          </Routes>
      </container>
    </div>
    </Router>
  );
}

export default App;
