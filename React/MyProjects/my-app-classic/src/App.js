import logo from './logo.svg';
import './App.css';
import Timer from "./components/hooks/hook-use-effect";
import Counter from "./components/counter-class";
import CounterAndHookUseState from "./components/hooks/counter-and-hook-use-state";
import ImportUiMaterial from "./components/ui_materails/import-ui-materials";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{color: 'white'}} className="header__text">
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <CounterAndHookUseState/>
        <Counter/>
        <Timer/>
        <ImportUiMaterial/>

      </header>
    </div>
  );
}

export default App;
