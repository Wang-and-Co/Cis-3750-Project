import { Axios } from '../../shared-components/axios/Axios';
const retrieveEvents = async (cookies, params) => {
  try {
    const id = cookies?.auth?.id;
    const options = id
      ? { params: { ...params, ...(id ? { id: id } : {}) } }
      : {};
    const { data } = await Axios.get('/events', options);
    return { status: 200, data };
  } catch (error) {
    return { status: 0, ...error };
  }
};
export { retrieveEvents };
