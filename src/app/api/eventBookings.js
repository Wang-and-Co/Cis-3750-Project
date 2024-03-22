import { Axios } from '../../shared-components/axios/Axios'

const retrieveBookings = async (payload) => {
    try {
        const { data } = await Axios.get('/eventBooking', {
            params: {
                id: 2
            }
        })
        .then(function (response) {
            console.log(data)
        })
        return { status: 200, ...data};
    } catch (error) {
        return { status: 0, ...error};
    }
}

export { retrieveBookings  };