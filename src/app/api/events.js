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
const postNewEvent = async (params, cookies) => {
  try {
    const id = cookies?.auth?.id;
    const payload = { ...params, organizer_id: id };
    const { data } = await Axios.post('/events', payload);
    return { status: 200, data };
  } catch (error) {
    return { status: 0, ...error };
  }
};

const retrieveBookings = async (payload) => {
  try {
    const { data } = await Axios.get('/eventBooking', {
      params: {
        id: payload,
      },
    });
    return { status: 200, ...data };
  } catch (error) {
    return { status: 0, ...error };
  }
};

const addBooking = async (payload) => {
  try {
    const { data } = await Axios.post('/eventBooking', payload);
    return { status: 200, ...data };
  } catch (error) {
    return { status: 200, ...error };
  }
};

const deleteBooking = async (params) => {
  try{
    const { data } = await Axios.delete('/eventBooking', { params })
    return { status: 200, ...data};
  } catch (error) {
    return {status: 400, ...error};
  }
}

const deleteEvent = async (params) => {
  try {
    const { data } = await Axios.delete('/events', { params })
    return { status: 200, ...data};
  } catch (error) {
    return { status: 400, ...error};
  }
}

export { retrieveEvents , retrieveBookings, addBooking, deleteBooking, deleteEvent };
