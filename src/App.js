import React, {Component} from 'react'
import './App.css';

let theme = {
  light:{
    styles:{
      backgroundColor:"#f0f9ff",
      color:"#00f"
    },
    head:"bg-primary text-white display-4 mb-4",
    alert:"alert alert-primary"
  },
  dark:{
    styles:{
      backgroundColor:"#336",
      color:"#eef"
    },
    head:"bg-secondary text-white display-4 mb-4",
    alert:"alert alert-dark"
  }
}

const ThemeContext = React.createContext(theme.dark)
class App extends Component {
  static contextType = ThemeContext

  render() {
    return <div style={this.context.styles}>
      <h1 className={this.context.head}>React</h1>
      <div className="container">
        <Title value="Content page"/>
        <Message value="This is content sample"/>
        <Message value="サンプルですよ"/>
      </div>
    </div>
  }
}

class Title extends Component {
  static contextType = ThemeContext

  render() {
    return (
      <div className={this.context.alert}>
        <h2 style={this.context.styles}>{this.props.value}</h2>
      </div>
    )
  }
}

class Message extends Component {
  static contextType = ThemeContext

  render() {
    return (
      <div style={this.context.styles}>
        <p>{this.props.value}</p>
      </div>
    )
  }

}

export default App;
