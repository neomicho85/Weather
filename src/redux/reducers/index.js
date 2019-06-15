import { GET_LOCATION, GET_WEATHER } from '../actions/constant';

const initialState = {
    location: {
        lat: undefined,
        lon: undefined
    },
    currentWeather: undefined
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LOCATION:
            const {lat, lon} = action.payload;
            return {
                ...state,
                location: {lat, lon}
            }

        case GET_WEATHER:
            return {
                ...state,
                currentWeather: action.payload
            }
    
        default:
            return state;
    }
}

export default rootReducer;