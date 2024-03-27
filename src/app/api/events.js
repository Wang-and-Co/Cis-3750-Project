import { Axios } from '../../shared-components/axios/Axios';
const retrieveEvents = async (cookies) => {
  try {
    const id = cookies?.auth?.id;
    const options = id ? { params: { id } } : {};
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

const addBooking = async (payload, cookies) => {
  try {
    const id = cookies?.auth?.id;
    const dataPayload = { user_id: id, ...payload };
    const { data } = await Axios.post('/eventBooking', dataPayload);
    return { status: 200, data };
  } catch (error) {
    return { status: 0, ...error };
  }
};

const searchEvents = async (searchQuery, cookies) => {
  try {
    const id = cookies?.auth?.id ? { id: cookies?.auth?.id } : {};
    const nameQuery = searchQuery?.name ? { name: searchQuery.name } : {};
    const options = { params: { ...id, ...nameQuery } };
    const { data } = await Axios.get('/events', options);
    return { status: 200, data };
  } catch (error) {
    return { status: 0, ...error };
  }
};

const deleteBooking = async (params, cookies) => {
  try {
    const id = cookies?.auth?.id ? { userID: cookies?.auth?.id } : {};
    const { data } = await Axios.delete('/eventBooking', {
      params: { ...params, ...id },
    });
    return { status: 200, ...data };
  } catch (error) {
    return { status: 400, ...error };
  }
};

const deleteEvent = async (params) => {
  try {
    const { data } = await Axios.delete('/events', { params });
    return { status: 200, ...data };
  } catch (error) {
    return { status: 400, ...error };
  }
};

export {
  retrieveEvents,
  retrieveBookings,
  addBooking,
  deleteBooking,
  deleteEvent,
  postNewEvent,
  searchEvents,
};
