import axios from 'axios'

const url = process.env.REACT_APP_URI
const apikey = process.env.REACT_APP_API_KEY

export function getCityByName(name) {
  return async function(dispatch) {
    try {
      const city = await axios.get(`${url}?q=${name}&lang=es&units=metric&appid=${apikey}`)
      dispatch({
        type: "GET_CITY",
        payload: city.data
      })
    } catch (error) {console.log(error)}
  }
}

export function updateCities(id) {
  return {
    type: "UPDATE_CITIES",
    payload: id
  }
}

export function cityDetail(id) {
  return async function(dispatch) {
    try {
      const detail = await axios.get(`${url}?id=${id}&lang=es&units=metric&appid=${apikey}`)
      dispatch({
        type: "CITY_DETAIL",
        payload: detail.data
      })
    } catch (error) {console.log(error)}
  }
}