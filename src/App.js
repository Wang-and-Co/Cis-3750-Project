import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';
import { showConfirmationModal } from './shared-components/modals';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button
          variant="contained"
          onClick={() =>
            showConfirmationModal({
              title: 'among us alert!',
              description: 'Raw men and maximum samuel',
            })
          }
        >
          Show Modal
        </Button>
      </header>
    </div>
  );
};

export default App;
