import React, {Component} from 'react'
import './App.css';

let data = {
  title:'React-Context2',
  message:'This is sample message2.'
}
class App extends Component {
  render() {
    return <div>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <Title/>
        <Message/>
      </div>
    </div>
  }
}

class Title extends Component {
  render() {
    return (
      <div className="card p-2 my-3">
        <h2>{data.title}</h2>
      </div>
    )
  }
}

class Message extends Component {
  render() {
    return (
      <div className="alert alert-primary">
        <p>{data.message}</p>
      </div>
    )
  }

}

export default App;
