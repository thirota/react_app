import React, {Component} from 'react'
import './App.css';

let data = {
  title:'React-Context3',
  message:'This is sample message3.'
}

const sampleContext = React.createContext(data)
class App extends Component {
  newData = {
    title:'New Title',
    message:'New Message'
  }

  render() {
    return <div>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <Title/>
        <Message/>
        <hr/>
        <sampleContext.Provider value={this.newData}>
          <Title/>
          <Message/>
        </sampleContext.Provider>
        <Title/>
        <Message/>
      </div>
    </div>
  }
}

class Title extends Component {
  static contextType = sampleContext

  render() {
    return (
      <div className="card p-2 my-3">
        <h2>{this.context.title}</h2>
      </div>
    )
  }
}

class Message extends Component {
  static contextType = sampleContext

  render() {
    return (
      <div className="alert alert-primary">
        <p>{this.context.message}</p>
      </div>
    )
  }

}

export default App;
