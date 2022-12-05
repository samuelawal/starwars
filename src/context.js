import React from 'react'
import { STAR_WARS_INITIAL_STATE } from "./constants";

const AppContext = React.createContext({
    onSelectedMovieIndex: () => {},
    ...STAR_WARS_INITIAL_STATE,
})
export default AppContext