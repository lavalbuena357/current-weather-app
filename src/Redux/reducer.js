const initialState = {
  cities: [],
  detail: null,
  fisrtCard: null,
  repeatedCity: false
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case "GET_CITY":
      const city = state.cities.filter(el => el.name === action.payload.name)
      if(city.length === 0) {
        return {...state, cities: [action.payload, ...state.cities], repeatedCity: false}
      } else {
        return {...state, repeatedCity: true}
      }
    case "FIRST_CARD": 
    return {...state, fisrtCard: state.cities[0]}
    case "UPDATE_CITIES":
      const citiesFilter = state.cities.filter(el => el.id !== action.payload)
      return {...state, cities: citiesFilter}
    case "CITY_DETAIL":
      return {...state, detail: action.payload}
    default:
      return state
  }
}

export default  reducer