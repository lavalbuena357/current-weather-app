const initialState = {
  cities: []
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case "GET_CITY":
      return {...state, cities: [...state.cities, action.payload]}
    case "UPDATE_CITIES":
      const citiesFilter = state.cities.filter(el => el.sys.id !== action.payload)
      return {...state, cities: citiesFilter}
    default:
      return state
  }
}

export default  reducer