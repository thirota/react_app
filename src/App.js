import './App.css';
import MemoPage from './memo/MemoPage'
import Button from '@atlaskit/button'

function App() {
  console.log("App start")

  return (
    <div>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <h4 className="my-3">Memo</h4>
        <MemoPage />
        <Button>This is AtlasKit Button</Button>
      </div>
    </div>
  )
}

export default App;
