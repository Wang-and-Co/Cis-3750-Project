import { showConfirmationModal } from '../../shared-components/modals';
import toast from 'react-hot-toast';
import logo from './../../logo.svg';
import { Button } from '@mui/material';

const LoserPage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>LOL LOSER HAHAHAHAHAHAHA</p>
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
              title: 'loser alert!!!!!!',
              description: 'Its you',
            })
          }
        >
          Am I a loser
        </Button>
        <Button
          variant="contained"
          onClick={() => toast('Successfully losered the loser L winnmer')}
        >
          hehehea
        </Button>
      </header>
    </div>
  );
};
export default LoserPage;
