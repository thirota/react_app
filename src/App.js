import React, {useState, useEffect} from 'react'
import './App.css';

function AlertMessage(props) {
  console.log("AlertMessage start")

  return <div className="alert alert-primary h5 text-primary">
    <h5>{props.msg}</h5>
  </div>
}

function App() {
  console.log("App start")

  const [val, setVal] = useState(1000)
  const [tax1, setTax1] = useState(0)
  const [tax2, setTax2] = useState(0)
  const [msg, setMsg] = useState(<p>set a number...</p>)

  const doChange = (e)=> {
    setVal(e.target.value)
  }

  const doAction = (e)=>{ 
    let res = <div>
      <p>軽減税率: {tax1} 円</p>
      <p>通常税率: {tax2} 円</p>
    </div>
    setMsg(res)
  }

  useEffect(()=> {
    console.log("useEffect1")
    setTax1(Math.floor(val * 1.08))
  })

  useEffect(()=> {
    console.log("useEffect2")
    setTax2(Math.floor(val * 1.10))
  })

  return <div>
    <h1 className="bg-primary text-white display-4">React</h1>
    <div className="container">
      <h4 className="my-3">Hook sample</h4>
      <AlertMessage msg={msg}/>
      <div className="form-group">
        <label>Input</label>
        <input type="number" onChange={doChange} className="form-control"/>
      </div>
      <button className="btn btn-primary" onClick={doAction}>Calc</button>
    </div>
  </div>
}

export default App;
