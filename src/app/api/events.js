import { Axios } from '../../shared-components/axios/Axios';
const retrieveEvents = async (params, cookies) => {
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

const retrieveBookings = async (payload) => {
  try {      
      const { data } = await Axios.get('/eventBooking', {
        params: {
          id: payload
        }
      })
      return { status: 200, ...data};

  } catch (error) {
      return { status: 0, ...error};
  }
}



export { retrieveEvents , retrieveBookings };
