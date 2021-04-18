import React, {useState} from 'react'
import './App.css';

//This function name is wrong.
//function funcCounter() {
//
//React Hook "useState" is called in function "funcCounter" that is neither a React function component nor a custom React Hook function.
//React component names must start with an uppercase letter  react-hooks/rules-of-hooks
//
//see also https://ja.reactjs.org/docs/hooks-rules.html
//
const useTax = (t1, t2)=> {
  console.log("useTax start")

  const [price, setPrice] = useState(1000)
  const [tx1] = useState(t1)
  const [tx2] = useState(t2)

  const tax = ()=> {
    return Math.floor(price * (1.0 + tx1/100))
  }

  const reduced = ()=> {
    return Math.floor(price * (1.0 + tx2/100))
  }

  return [price, tax, reduced, setPrice]
}

function AlertMessage(props) {
  console.log("AlertMessage start")

  const [price, tax, reduced, setPrice] = useTax(10, 8)

  const doChange = (e)=> {
    setPrice(e.target.value)
  }

  return <div className="alert alert-primary h5 text-primary">
    <p className="h5">通常：¥ {tax()}</p>
    <p className="h5">軽減：¥ {reduced()}</p>
    <input type="number" onChange={doChange} value={price}/>
  </div>
}

function App() {
  console.log("App start")

  return <div>
    <h1 className="bg-primary text-white display-4">React</h1>
    <div className="container">
      <h4 className="my-3">Hook sample</h4>
      <AlertMessage />
    </div>
  </div>
}

export default App;
