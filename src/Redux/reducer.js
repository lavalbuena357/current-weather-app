const initialState = {
  cities: [],
  detail: null
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case "GET_CITY":
      return {...state, cities: [...state.cities, action.payload]}
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