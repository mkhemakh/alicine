export const addFilm = () => ( { type: 'ADD_FILM' } )
export const deleteFilm = payload => ( { type: 'DELETE_FILM', payload } )
export const reverseFilms = () => ( { type: 'REVERSE_FILMS' } )
export const setNewFilm = payload => ( { type: 'SET_NEW_FILM', payload } )