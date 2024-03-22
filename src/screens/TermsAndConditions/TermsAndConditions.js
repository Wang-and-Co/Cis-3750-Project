import { Container, Typography } from '@mui/material';
import { listOfTerms } from './terms';
import TextList from '../../shared-components/TextList/TextList';

const TermsAndConditions = () => {
  return (
    <Container>
      {listOfTerms.map((value, index) => (
        <TextList {...value} index={index} key={index}></TextList>
      ))}
    </Container>
  );
};
export default TermsAndConditions;
