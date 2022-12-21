import {useDispatch, useSelector} from "react-redux";
import {addFilm, setNewFilm} from "../actions/filmActions";

const filmForm = () => {
    const dispatch = useDispatch();
    const { acteurs, errorMsgs, newFilm } = useSelector( state => state.filmReducer );

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch( addFilm() );
    }

    return (
        <form onSubmit={ (e) => handleSubmit(e) }>
            <h2>Nouveau Film</h2>
                { errorMsgs.length > 0 && (
                    <ul className="error-box">
                        { errorMsgs.map( (error, i) => <li key={i}>{ error }</li> ) }
                    </ul>
                )}
            <p>
                <label htmlFor="titre">Name</label>
                <input titre="titre" type="text"
                       value={newFilm.titre}
                       onChange={ (e) => dispatch( setNewFilm( { newFilm: {
                               ...newFilm,
                               titre: e.target.value,
                       }}))}
                />
            </p>
            <p>
                <label htmlFor="duree">Age</label>
                <input titre="duree" type="number"
                       value={newFilm.duree}
                       onChange={ (e) => dispatch( setNewFilm( { newFilm: {
                               ...newFilm,
                               duree: e.target.value,
                       }}))}
                />
            </p>
            <p>
                <label htmlFor="type">Element</label>
                <select titre="type"
                        value={newFilm.type}
                        onChange={ (e) => dispatch( setNewFilm( { newFilm: {
                                ...newFilm,
                                type: e.target.value,
                        }}))}
                >
                    { types.map( (type, i) => <option key={i} value={type}>{type}</option> ) }
                </select>
            </p>
            <p>
                <button type="submit">Ajouter film</button>
            </p>
        </form>
    )
}