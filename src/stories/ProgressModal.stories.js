// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
import { ThemeProvider } from '@mui/material';
import { theme } from '../app/themeUtils';
import {
  showProgressModal,
  hideProgressModal,
} from '../shared-components/modals';

import NiceModal from '@ebay/nice-modal-react';
import { ModalButton } from './storyUtils';

/**
 * Use showProgressModal to show the modal and hideProgressModal to hide the modal. It will not autoclose so be careful!
 */
export default {
  title: 'Modals/ProgressModal',
  component: ModalButton,
  decorators: [
    (Story) => (
      <NiceModal.Provider>
        <ThemeProvider theme={theme}>
          <Story />
        </ThemeProvider>
      </NiceModal.Provider>
    ),
  ],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    modalOpener: () => {
      showProgressModal();
      setTimeout(() => hideProgressModal(), 1000);
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {};
