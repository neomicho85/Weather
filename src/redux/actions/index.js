import {
    GET_LOCATION,
    GET_WEATHER
} from './constant';

export const getLocation = () => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            return navigator.geolocation.getCurrentPosition(position => {
                const payload = {
                    lat: position.coords.latitude,
                    lon: position.coords.longitude
                };
                resolve(
                    dispatch({
                        type: GET_LOCATION,
                        payload
                    })
                );
            }, reject);
        });
    }
};

export const getWeather = (lat, lon) => {
    return dispatch => {
        return fetch(`https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${lon}`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                dispatch({
                    type: GET_WEATHER,
                    payload: data
                })
            });
    }
};