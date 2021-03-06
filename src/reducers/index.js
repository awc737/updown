const initialState = {
  score: 1
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_SCORE":
            return { ...state, score: state.score + action.payload }
        default:
            return state
    }
}

export default appReducer
