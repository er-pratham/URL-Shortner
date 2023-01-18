import React from 'react';
import './App.css';
import Header from './Components/Header';
import MainContainer from './Components/MainContainer';
function App() {
  return (
   <div className="App">
    <Header />
    <div className="MainBox">
    <MainContainer />
    </div>
   </div>
  );
}

export default App;
