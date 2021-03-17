import React, { useState } from 'react';
import './App.css';

/**
 * 税込価格を計算する独自フック関数です。
 * @param {*} t1 通常税率。10%なら10
 * @param {*} t2 軽減税率。8%なら8
 * @returns 税抜価格、通常税込価格を取得する関数、軽減税込価格を取得する関数、税抜価格を設定する関数
 */
function useTax(t1, t2) {
  const [price, setPrice] = useState(1000)
  const [tx1] = useState(t1)
  const [tx2] = useState(t2)

  const normal = ()=> {
    return Math.floor(price * (1.0 + tx1 / 100))
  }

  const reduced = ()=> {
    return Math.floor(price * (1.0 + tx2 / 100))
  }

  return [price, normal, reduced, setPrice]
}

function AlertMessage(props) {
  const [price, normal, reduced, setPrice] = useTax(10, 8)

  const doChange = (event)=>  {
    let p = event.target.value
    setPrice(p)
  }

  return <div className="alert alert-primary h5 text-center">
      <p className="h5">通常税率: {normal()}円</p>
      <p className="h5">軽減税率: {reduced()}円</p>
      <div className="form-group">
        <label className="form-group-label">Price:</label>
        <input type="number" className="form-control" onChange={doChange} value={price}/>
      </div>
    </div>
}

function App() {
  return (
    <div>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <h4 className="my-3">Hooks sample</h4>
        <AlertMessage/>
      </div>
    </div>
  )

}

export default App;
