import React, { useState } from 'react';
import './App.css';

// 合計計算の関数
const total = (max)=> {
  let result = 0
  for (let i = 0; i <= max; i++) {
    result += i
  }
  return result
}

// 消費税計算の関数
const tax = (price)=> {
  return Math.floor(price * 1.1)
}

/**
 * 数値を計算し、メッセージを返す独自フック関数
 * @param {*} num 数値
 * @param {*} func 数値計算関数
 * @returns 
 */
function useCalc(num=0, func = (arg)=>{return arg}) {
  const [msg, setMsg] = useState(null)

  const setValue = (price)=> {
    let result = func(price)
    setMsg(<p className="h5">{price}の結果は{result}です。</p>)
  }

  return [msg, setValue]
}

// デフォルトコンポーネント
function PlainMessage(props) {
  const [msg, setCalc] = useCalc()

  const doChange = (event)=>  {
    setCalc(event.target.value)
  }

  return <div className="p-3 h5">
    <h5>{msg}</h5>
    <input type="number" onChange={doChange} className="form-control"/>
  </div>
}

// 合計計算コンポーネント
function AlertMessage(props) {
  const [msg, setCalc] = useCalc(0, total)

  const doChange = (event)=>  {
    setCalc(event.target.value)
  }

  return <div className="alert alert-primary h5 text-primary">
    <h5>{msg}</h5>
    <input type="number" onChange={doChange} min="0" max="10000" className="form-control"/>
  </div>
}

// 消費税計算コンポーネント
function CardMessage(props) {
  const [msg, setCalc] = useCalc(0, tax)

  const doChange = (event)=>  {
    setCalc(event.target.value)
  }

  return <div className="alert alert-primary h5 text-primary">
    <h5>{msg}</h5>
    <input type="range" onChange={doChange} min="0" max="10000" step="100" className="form-control"/>
  </div>
}

// ベースコンポーネント
function App() {
  return (
    <div>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <h4 className="my-3">Hooks sample</h4>
        <PlainMessage/>
        <AlertMessage/>
        <CardMessage/>
      </div>
    </div>
  )

}

export default App;
