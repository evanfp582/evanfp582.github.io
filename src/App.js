import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <div className="bg-blue-500 text-white p-10">
          <h1 className="text-4xl font-bold">Hello, Tailwind!</h1>
          <p className="mt-4 text-lg">If you see this text with the blue background and white text, Tailwind is working!</p>
        </div>
          </header>
    </div>
  );
}

export default App;
