import React, {useState} from 'react'
import './App.css';

function App() {
  console.log("App start")

  const [count, setCount] = useState(0)
  const counterForDisplay = count * count;

  const clickFunc = ()=> {
    setCount(count+1)
  }

  return <div>
    <h1 className="bg-primary text-white display-4">React</h1>
    <div className="container">
      <h4 className="my-3">Hook sample</h4>
      <p>{counterForDisplay}</p>
      <button onClick={clickFunc}>Click</button>
    </div>
  </div>
}

export default App;
