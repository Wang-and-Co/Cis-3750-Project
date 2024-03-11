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
  open: true,
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
  it('passes the correct props', () => {
    expect(getModalProp('name')).toBe(props.name);
    expect(getModalProp('title')).toBe(props.title);
    expect(getModalProp('body')).toBe(props.body);
    expect(getModalProp('id')).toBe(props.id);
    expect(getModalProp('open')).toBe(props.open);
  });
});

const getModalProp = (prop) =>
  genericModalInstance.findByType(GenericModal).props[prop];

const renderGenericModal = async (editorProps) => {
  genericModalRenderer = await create(
    <TestProvider>
      <GenericModal {...editorProps}></GenericModal>
    </TestProvider>,
  );
  genericModalInstance = genericModalRenderer.root;
};
