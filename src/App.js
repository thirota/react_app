import React, {useState} from 'react'
import './App.css';

function AlertMessage(props) {
  console.log("AlertMessage start")

  const data = ["Hello", "Welcome", "Good-bye"]

  const actionAlert = ()=> {
    const re = data[Math.floor(Math.random() * data.length)]
    props.setAlert('message: ' + re + ".")
  }

  return <div className="alert alert-primary h5 text-primary">
    <h5>{props.alert}</h5>
    <button onClick={actionAlert}>Click</button>
    </div>
}

function CardMessage(props) {
  console.log("CardMessage start")

  const [count, setCount] = useState(0)

  const actionCard = ()=> {
    setCount(count+1)
    props.setCard("card counter: " + count + " count.")
  }

  return <div className="card p-3 h5 border-primary text-center">
    <h5>{props.card}</h5>
    <button onClick={actionCard}>Click</button>
    </div>
}

function App() {
  console.log("App start")

  const [alert, setAlert] = useState("This is alert message.")
  const [card, setCard] = useState("This is card message.")

  return <div>
    <h1 className="bg-primary text-white display-4">React</h1>
    <div className="container">
      <h4 className="my-3">Hook sample</h4>
      <AlertMessage alert={alert} setAlert={setAlert}/>
      <CardMessage card={card} setCard={setCard}/>
      <hr/>
      <div>
        <p>{alert}</p>
        <p>{card}</p>
      </div>
    </div>
  </div>
}

export default App;
