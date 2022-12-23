import test from '../data.Movie.json'
const stateInit = {
    movies: test.Movies
}


const movieReducer = ( state = stateInit, action = {} ) => {
 
  
    switch( action.type )
    {   
             case 'ADD_FILM':
                return ({
                    ...state,
                    movies: state.movies.concat(action.payload.newMovie)
                 })

                 case 'DELETE_FILM':
                    return ({
                        ...state,
                        movies: state.movies.filter((film) => film.id !== action.payload)
                     })
         
        default:
            return state;
    }
}

export default movieReducer;