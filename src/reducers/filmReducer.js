const stateInit = {
    films: [],
    types: [
        'Comedie',
        'Action',
        'Drama',
        'Fantaisie'
    ],
    newFilm: {
        id: null,
        titre: '',
        duree: 0,
        imgurl: '',
        syno: '',
        type: 'Comedie'
    },
    errorMsgs: [],
}

const filmReducer = ( state = stateInit, action = {} ) => {
        switch( action.type )
        {
            case 'ADD_FILM':

                const errors = [];

                if( state.newFilm.titre.trim() === '' )
                {
                    errors.push( 'Film\'s name required' );
                }

                if( state.newFilm.duree === 0 )
                {
                    errors.push( 'Film\'s duree required' );
                }

                if( errors.length > 0 )
                {
                    return {
                        ...state,
                        errorMsgs: errors
                    }
                }

                return {
                    ...state,
                    films: state.films.concat( { ...state.newFilm, id: new Date().getTime()} ),
                    errorMsgs: [],
                    newFilm: {
                        id: null,
                        titre: '',
                        duree: 0,
                        imgurl: '',
                        syno: ''
                    }
                }
            case 'DELETE_FILM':
                return {
                    ...state,
                    films: state.films.filter( film => film.id !== action.payload.film.id )
                }
            case 'REVERSE_FILMS':
                return {
                    ...state,
                    films: state.films.reverse()
                }
            case 'SET_NEW_FILM':
                return {
                    ...state,
                    newFilm: action.payload.newFilm
                }
            default:
                return state;
        }
}

export default filmReducer;