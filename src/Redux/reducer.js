const initialState = {
  cities: []
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case "GET_CITY":
      return {...state, cities: [...state.cities, action.payload]}
    default:
      return state
  }
}

export default  reducer