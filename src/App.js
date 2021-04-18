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
function useCounter() {
    console.log("useCounter")

  const [num, setNum] = useState(0)

  const count = ()=> {
    console.log("count")
    setNum(num + 1)
  }

  return [num, count]
}

function AlertMessage(props) {
  console.log("AlertMessage start")

  const [counter, plus] = useCounter()

  return <div className="alert alert-primary h5 text-primary">
    <h4>count: {counter}</h4>
    <button onClick={plus} className="btn btn-primary">count</button>
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
