import { useEffect } from 'react';
import MockAdapter from 'axios-mock-adapter';
// eslint-disable-next-line no-restricted-imports
import axios from 'axios';
const axiosInstance = axios.create({
  timeout: 30000,
});

const apiMock = new MockAdapter(axiosInstance);

const AxiosMock = ({ children, mock }) => {
  useEffect(() => {
    mock(apiMock);
    return () => {
      apiMock.reset();
    };
  });
  return children;
};

export default AxiosMock;
