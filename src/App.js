import './App.css';
import Header from './Header';
import Aboutme from "./Aboutme"
import React from 'react';
import ContentDetails from './ContentDetails';




function App() {
  const [showClicked, setShowClicked] = React.useState(false)
  function handleClick(event) {
    setShowClicked(true)
  }
  return (
    <div className="main">
      <div className="header-section">
        <Header handleClick={handleClick} />
      </div>
      <div className="resume-content">
        {showClicked ? <ContentDetails /> : <Aboutme />}
      </div>
    </div>
  );
}

export default App;

