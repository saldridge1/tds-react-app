import icon from './TDS Spin Network Dark.png';
import lockup from './TDS Lockup Vertical - Dark No Spin.png';
import './App.css';

function App() {
  return (
   <div className="App">
      <header className="App-header">
          <a className="tds-link"
          href="https://www.teamdesignstudios.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={icon} className="App-logo" alt="TDS Icon" />
          <img src={lockup} className="TDS Lockup Vertical - Dark No Spin.png" alt="TDS Lockup" />
        </a>
        <p>
          DESIGN | CONSULTANCY SERVICES | CREATIVE SOLUTIONS
        </p>
      </header>
    </div>
  );
}

export default App;
