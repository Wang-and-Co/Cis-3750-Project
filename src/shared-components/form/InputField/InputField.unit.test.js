import { render } from '@testing-library/react';
import { create } from 'react-test-renderer';
import TestProvider from '../../../TestProvider';
import { Form, Formik } from 'formik';
import InputField from './InputField';

const props = {
  name: 'test',
  label: 'Hello there',
  required: false,
  variant: 'filled',
};

const formikProps = {
  initalValues: { name: '' },
  onSubmit: jest.fn(),
};

let inputFieldRenderer;
let inputFieldInstance;

beforeEach(async () => {
  await renderGenericModal(props);
});

afterEach(() => {
  inputFieldRenderer.unmount();
});
describe('Generic Modal', () => {
  it('renders correctly', () => {
    expect(inputFieldRenderer.toJSON()).toMatchSnapshot();
  });
  xit('passes the correct props', () => {
    expect(getModalProp('name')).toBe(props.name);
    expect(getModalProp('title')).toBe(props.title);
    expect(getModalProp('body')).toBe(props.body);
    expect(getModalProp('id')).toBe(props.id);
    expect(getModalProp('open')).toBe(props.open);
  });
});

const getModalProp = (prop) =>
  inputFieldInstance.findByType(InputField).props[prop];

const renderGenericModal = async (editorProps) => {
  inputFieldRenderer = await create(
    <TestProvider>
      <Formik>
        <Form>
          <InputField {...editorProps}></InputField>
        </Form>
      </Formik>
    </TestProvider>,
  );
  inputFieldInstance = inputFieldRenderer.root;
};
