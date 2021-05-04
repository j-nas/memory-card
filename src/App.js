import React, {useState} from 'react'
import './App.css';
import TitleBar from "./components/TitleBar"
import GameArea from "./components/GameArea"

function App() {
  const [score, setScore] = useState(0)
  const [hiScore, setHiScore] = useState(0)
  
  function addScore() {
    
    if (hiScore > score ) {
      setScore(score + 1)
      return
    }
    setScore(score + 1)
    setHiScore(hiScore + 1)
    return
  }
  function resetScore(){
    setScore(score - score)
    return
  }
  
  
  
  
  return (
    
    <div className="App">
      <TitleBar 
        score={score}
        hiScore={hiScore}
      />
      <GameArea 
        addScore={addScore}
        resetScore={resetScore}
      />
    </div>
  );
}

export default App;
