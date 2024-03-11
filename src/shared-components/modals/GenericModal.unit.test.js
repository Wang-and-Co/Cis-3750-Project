import { render } from '@testing-library/react';
import GenericModal from './GenericModal';
import { create } from 'react-test-renderer';
import TestProvider from '../../TestProvider';

jest.mock('react-dom', () => {
  const original = jest.requireActual('react-dom');

  return {
    ...original,
    createPortal: (node) => node,
  };
});

const props = {
  name: 'test',
  title: 'title',
  body: 'desc',
  id: 'id',
  onClose: jest.fn(),
  open: 'true',
};

let genericModalRenderer;
let genericModalInstance;

beforeEach(async () => {
  await renderGenericModal(props);
});

afterEach(() => {
  genericModalRenderer.unmount();
});
describe('Generic Modal', () => {
  it('renders correctly', () => {
    expect(genericModalRenderer.toJSON()).toMatchSnapshot();
  });
});

const renderGenericModal = async (editorProps) => {
  genericModalRenderer = await create(
    <TestProvider>
      <GenericModal {...editorProps}></GenericModal>
    </TestProvider>,
  );
  genericModalInstance = genericModalRenderer.root;
};
