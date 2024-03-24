import { Axios } from '../../shared-components/axios/Axios';

const login = async (payload) => {
  try {
    const { data } = await Axios.post('/login', payload);
    return { status: 200, data };
  } catch (error) {
    return { status: 0, ...error };
  }
};


const createAccount = async (payload) => {
  try {
    const { data } = await Axios.post('/createAccount', payload);
    return { status: 200, ...data };
  } catch (error) {
    return { status: 0, ...error };
  }
};
export { login, createAccount };
