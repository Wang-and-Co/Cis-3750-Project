/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
import { createTheme } from '@mui/material';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
// import defaultTheme from '../../src/renderer/data/theme';

export default class TestProvider extends React.Component {
  disableTransitions = {
    defaultProps: {
      disablePortal: true,
      hideBackdrop: true,
      TransitionComponent: ({ children }) => children,
    },
  };

  render() {
    const theme = createTheme({
      //   ...defaultTheme,
      // disable Transitions when runing tests, throws errors otherwise.
      components: {
        MuiDialog: this.disableTransitions,
        MuiModal: this.disableTransitions,
      },
    });
    return (
      // eslint-disable-next-line react/jsx-no-comment-textnodes
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>{this.props.children}</ThemeProvider>
      </StyledEngineProvider>
    );
  }
}
