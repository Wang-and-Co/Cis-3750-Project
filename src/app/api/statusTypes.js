const NETWORK_ERROR = 'Could not connect to the server. Please try again.';
const GENERIC_ERROR = 'Soemthing went wrong. Please try again.';
export const getResponseStatus = (status) => {
  switch (status) {
    case 0:
      return NETWORK_ERROR;
    default:
      return GENERIC_ERROR;
  }
};
