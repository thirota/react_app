import React, {useState} from 'react'
import './App.css';

function AlertMessage(props) {
  return <div className="alert alert-primary h5 text-primary">{props.message}</div>
}

function CardMessage(props) {
  return <div className="card p-3 h5 border-primary text-center">{props.message}</div>
}

function App() {
  console.log("App start")

  const [msg, setMsg] = useState("This is sample message.")

  const doAction = ()=> {
    let res = window.prompt('type your name:')
    setMsg("Hello " + res + " !!")
  }

  return <div>
    <h1 className="bg-primary text-white display-4">React</h1>
    <div className="container">
      <h4 className="my-3">Hook sample</h4>
      <AlertMessage message={msg} />
      <CardMessage message={msg} />
      <button onClick={doAction}>Click</button>
    </div>
  </div>
}

export default App;
