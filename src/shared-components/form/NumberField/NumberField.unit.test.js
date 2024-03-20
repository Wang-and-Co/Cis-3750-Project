import { create } from 'react-test-renderer';
import TestProvider from '../../../TestProvider';
import { Form, Formik } from 'formik';
import NumberField from './NumberField';
const props = {
  name: 'test',
  label: 'Hello there',
  required: false,
  helperText: 'among us',
  variant: 'filled',
};

let inputFieldRenderer;
let inputFieldInstance;

beforeEach(async () => {
  await renderGenericModal(props);
});

afterEach(() => {
  inputFieldRenderer.unmount();
});
describe('NumberField', () => {
  it('renders correctly', () => {
    expect(inputFieldRenderer.toJSON()).toMatchSnapshot();
  });
  it('passes the correct props', () => {
    expect(GetInputProp('name')).toBe(props.name);
    expect(GetInputProp('label')).toBe(props.label);
    expect(GetInputProp('required')).toBe(props.required);
    expect(GetInputProp('helperText')).toBe(props.helperText);
    expect(GetInputProp('variant')).toBe(props.variant);
  });
});

const GetInputProp = (prop) =>
  inputFieldInstance.findByType(NumberField).props[prop];

const renderGenericModal = async (editorProps) => {
  inputFieldRenderer = await create(
    <TestProvider>
      <Formik>
        <Form>
          <NumberField {...editorProps}></NumberField>
        </Form>
      </Formik>
    </TestProvider>,
  );
  inputFieldInstance = inputFieldRenderer.root;
};
