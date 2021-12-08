import Sitelogo from './components/Sitelogo';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>
          <Sitelogo />&nbsp;App
        </h3>
      </header>
    </div>
  );
}

export default App;
