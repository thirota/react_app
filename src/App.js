import React, {Component} from 'react'
import './App.css';

class App extends Component {
  input = ''

  constructor(props) {
    super(props)
    //XXX Do we need to use the state??
    this.state = {
      title:'input form',
      message:'type your name',
      max:10
    }
    this.doCheck = this.doCheck.bind(this)
  }

  doCheck(event) {
    alert(event.target.value + " is too long. (max: " + this.state.max + " chars)")
  }

  render() {
    return <div>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <h4>{this.state.title}</h4>
        <Message maxlength={this.state.max} onCheck={this.doCheck}/>
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
      //XXX hard to understand...
      this.props.onCheck(event)
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
