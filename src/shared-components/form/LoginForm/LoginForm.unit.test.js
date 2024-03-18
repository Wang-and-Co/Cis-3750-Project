import { create } from 'react-test-renderer';
import TestProvider from '../../../TestProvider';
import LoginForm from './LoginForm';

jest.mock('./utils', () => ({
  _esModule: true,
  initialValues: {
    name: 'test',
    password: 'this',
  },
}));

const props = {
  onSuccess: jest.fn(),
};

let loginFormRenderer;
let loginFormInstance;

beforeEach(async () => {
  await renderLoginForm(props);
});

afterEach(() => {
  loginFormRenderer.unmount();
});
describe('Generic Modal', () => {
  it('renders correctly', () => {
    expect(loginFormRenderer.toJSON()).toMatchSnapshot();
  });
  it('passes the correct props', () => {
    expect(GetFormProp('onSuccess')).toBe(props.onSuccess);
  });
});

const GetFormProp = (prop) =>
  loginFormInstance.findByType(LoginForm).props[prop];

const renderLoginForm = async (editorProps) => {
  loginFormRenderer = await create(
    <TestProvider>
      <LoginForm {...editorProps}></LoginForm>
    </TestProvider>,
  );
  loginFormInstance = loginFormRenderer.root;
};
