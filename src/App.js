import React, {useState} from 'react'
import './App.css';

function AlertMessage(props) {
  console.log("AlertMessage start")

  const data = props.data
  const msg = JSON.stringify(data)

  return <div className="alert alert-primary h5 text-primary">
    <h5>{msg}</h5>
    <hr/>
    <table className="table h6">
      <tbody>
        <tr><th>Name</th></tr><td>{data.name}</td>
        <tr><th>Mail</th></tr><td>{data.mail}</td>
        <tr><th>Age</th></tr><td>{data.age}</td>
      </tbody>
    </table>
    </div>
}

function App() {
  console.log("App start")

  const [name, setName] = useState("")
  const [mail, setMail] = useState("")
  const [age, setAge] = useState(0)
  const [form, setForm] = useState({
    name: 'no name',
    mail: 'no mail',
    age: -1
  })

  const doChangeName = (e)=> {
    setName(e.target.value)
  }

  const doChangeMail = (e)=> {
    setMail(e.target.value)
  }

  const doChangeAge = (e)=> {
    setAge(e.target.value)
  }

  const doSubmit = (e)=> {
    setForm({name:name, mail:mail, age:age})
    e.preventDefault()
  }

  return <div>
    <h1 className="bg-primary text-white display-4">React</h1>
    <div className="container">
      <h4 className="my-3">Hook sample</h4>
      <AlertMessage data={form} setData={setForm}/>
      <form onSubmit={doSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" className="form-control" onChange={doChangeName}/>
        </div>
        <div className="form-group">
          <label>Mail:</label>
          <input type="text" className="form-control" onChange={doChangeMail}/>
        </div>
        <div className="form-group">
          <label>Age:</label>
          <input type="number" className="form-control" onChange={doChangeAge}/>
        </div>
        <input type="submit" className="btn btn-primary" value="Click"/>
      </form>
    </div>
  </div>
}

export default App;
