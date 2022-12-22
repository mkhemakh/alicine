
const stateInit = {
    movies: [] 
}


const movieReducer = ( state = stateInit, action = {} ) => {
 
  
    switch( action.type )
    {
        case 'SET_MOVIEDATA':
            return ({
                ...state,
                movies: state.movies.concat(action.payload)       
               
             })

             case 'ADD_FILM':
                console.log(action.payload.newMovie)
                console.log(state.movies)
                return ({
                    ...state,
                    movies: [...state.movies, action.payload.newMovie]
                 })
         
        default:
            return state;
    }
}

export default movieReducer;