import React, { Component } from 'react';
import './App.css';

let data = {
  title: "React-Context",
  message: "This is sample message."
}

const SampleContext = React.createContext(data)

class App extends Component {

  newData = {
    title: "Hoge",
    message: "Fuga fuga"
  }

  render() {
    return <div>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <Title/>
        <Message/>
        <SampleContext.Provider value={this.newData}>
          <Title/>
          <Message/>
        </SampleContext.Provider>
        <Title/>
        <Message/>
      </div>
    </div>
  }
}

class Title extends Component {
  static contextType = SampleContext
  render() {
    return (
      <div className="card p-2 my-3">
        <h2>{this.context.title}</h2>
      </div>
    )
  }
}

class Message extends Component {
  static contextType = SampleContext
  render() {
    return (
      <div className="alert alert-primary">
        <p>{this.context.message}</p>
      </div>
    )
  }
}

export default App;
