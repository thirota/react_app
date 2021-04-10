import React, {Component} from 'react'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      msg:'count start',
      counter:0,
      flg:true
    }
    //bind
    this.doAction = this.doAction.bind(this)
  }

  doAction(event) {
    console.log(event)
    this.setState({
      counter: this.state.counter + 1,
      msg: "*** count: " + this.state.counter + " ***",
      flg: !this.state.flg
    })
  }

  render() {
    return <div>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <p className="subtitle">Count number</p>
        {this.state.flg ?
        <p className="alert alert-warning">{this.state.msg}</p>
        :
        <p className="alert alert-primary">{this.state.msg}</p>
        }
        <button className="btn btn-primary" onClick={this.doAction}>Click</button>
      </div>
    </div>
  }
}

export default App;
