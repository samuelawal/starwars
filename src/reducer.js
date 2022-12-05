import { SET_MOVIES } from "./constants";
const AppReducer = (state, action) => {
    switch(action.type) {
        case SET_MOVIES:  
        return { ...state, movies: action.movies}
        default: 
        return state
    }
}
export default AppReducer