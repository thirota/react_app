import React, {useState} from 'react'
import './App.css';

//合計計算の関数
const total = (a)=> {
  let re = 0
  for (let i = 0; i <= a; i++) {
    re += i
  }
  return re
}

//消費税計算の関数
const tax = (a)=> {
  return Math.floor(a * 1.1)
}

//数値を計算してメッセージを返す独自フック関数
function useCalc(num=0, func=(a)=>{return a}) {
  const [msg, setMsg] = useState(null)

  const setValue = (p)=> {
    let res = func(p)
    setMsg(<p className="h5">* {p} の結果は、{res} です。</p>)
  }

  return [msg, setValue]
}

//デフォルトコンポーネント
function PlainMessage(props) {
  console.log("PlainMessage start")

  const [msg, setCalc] = useCalc()

  const onChange = (e)=> {
    setCalc(e.target.value)
  }

  return <div className="p-3 h5">
    <h5>{msg}</h5>
    <input type="number" onChange={onChange} className="form-control"/>
  </div>
}

//合計計算コンポーネント
function AlertMessage(props) {
  console.log("AlertMessage start")

  const [msg, setCalc] = useCalc(0, total)

  const onChange = (e)=> {
    setCalc(e.target.value)
  }

  return <div className="alert alert-primary h5 text-primary">
    <h5>{msg}</h5>
    <input type="number" onChange={onChange} className="form-control" min="0" max="10000"/>
  </div>

}

//消費税計算コンポーネント
function CardMessage(props) {
  console.log("CardMessage start")

  const [msg, setCalc] = useCalc(0, tax)

  const onChange = (e)=> {
    setCalc(e.target.value)
  }

  return <div className="card p-3 h5 text-primary">
    <h5>{msg}</h5>
    <input type="range" onChange={onChange} className="form-control" min="0" max="10000"/>
  </div>

}

//ベースコンポーネント
function App() {
  console.log("App start")

  return (
    <div>
      <PlainMessage/>
      <AlertMessage/>
      <CardMessage/>
    </div>
  )
}

export default App;
