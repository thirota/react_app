import React, {Component} from 'react'
import './App.css';

class App extends Component {
  render() {
    return <div>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <h4>input form</h4>
        <Message maxlength="10" />
      </div>
    </div>
  }
}

class Message extends Component {

  constructor(props) {
    super(props)
    this.doChange = this.doChange.bind(this)
  }

  doChange(event) {
    if (event.target.value.length > this.props.maxlength) {
      alert(event.target.value + " is too long. (max: " + this.props.maxlength + " chars)")
      event.target.value = event.target.value.substr(0, this.props.maxlength)
    }
  }

  render() {
    return <div className="form-group">
      <label>input:</label>
      <input type="text" className="form-control" onChange={this.doChange}></input>
    </div>
  }

}

export default App;
