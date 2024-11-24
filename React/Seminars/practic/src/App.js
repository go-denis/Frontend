import logo from './logo.svg';
import './App.css';
import Message from "./components/Message";

function App() {
  return (
      <div className="App">
        <h1>My React App</h1>
        <Message text="Hello, this is your first message!" />
        <Message text="This is another message!" />
      </div>
  );
}

export default App;
