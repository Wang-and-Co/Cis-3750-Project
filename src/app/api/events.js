import { Axios } from '../../shared-components/axios/Axios';
const retrieveEvents = async (cookies, params) => {
  const id = cookies?.auth?.id;
  const options = id
    ? { params: { ...params, ...(id ? { id: id } : {}) } }
    : {};
  const { data } = await Axios.get('/events', options);
  return data;
};
export { retrieveEvents };
