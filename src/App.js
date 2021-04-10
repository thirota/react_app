import React, {Component} from 'react'
import './App.css';

class App extends Component {
  input = ''

  render() {
    return <div>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <Message title="Children!">
          あいうえお。
          ほげほげ。肉まん。
          ふがふが。
        </Message>
      </div>
    </div>
  }
}

class Message extends Component {

  render() {
    let content = this.props.children
    let tokens = content.split('。')
    let array = []
    for (let i = 0; i < tokens.length; i++) {
      if (tokens[i].trim() !== '') {
        array.push(tokens[i])
      }
    }
    let list = array.map((value,index)=>(
      <li className="list-group-item" key={index}>{index+1}. {value}.</li>
    ))
    return <div>
      <h2>{this.props.title}</h2>
      <ol className="list-group">{list}</ol>
    </div>
  }

}

export default App;
