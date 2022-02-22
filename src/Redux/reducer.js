const initialState = {
  cities: []
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case "GET_CITY":
      return {...state, cities: [...state.cities, action.payload]}
  }
}