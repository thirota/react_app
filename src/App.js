import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Rect from './Rect'

class App extends Component {
  input = ''

  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <Message title="Children!">
          これはコンポーネント内のコンテンツです。
          句点でテキストを分割して、リスト表示します。
          改行は必要ありません。あいうえお。かきくけこ。
        </Message>
      </div>
    </div>    
  }

}

class Message extends Component {
  li = {
    fontSize: "14pt",
    fontWeight: "bold",
    color: "#090"
  }

  render() {
    let content = this.props.children
    let arr = content.split('。')
    let arr2 = []
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].trim() != '') {
        arr2.push(arr[i])
      }
    }
    let list = arr2.map((value,key)=>(
      <li className="list-group-item" style={this.li}
        key={key}>{key+1}. {value} .</li>
    ))

    return (
      <div>
        <h2>{this.props.title}</h2>
        <ol className="list-group">{list}</ol>
      </div>
    )
  }
}

export default App;
