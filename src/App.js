import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';
import NiceModal from '@ebay/nice-modal-react';
import { SampleModal } from './shared-components/modals';

const App = () => {
  const showModal = () => {
    NiceModal.show(SampleModal, { name: 'test' });
  };
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
        <Button variant="contained" onClick={showModal}>
          Show Modal
        </Button>
      </header>
    </div>
  );
};

export default App;
