import {useDispatch, useSelector} from "react-redux";
import {addFilm, setNewFilm} from "../actions/filmActions";

const filmForm = () => {
    const dispatch = useDispatch();
    const { realisateurs, types, acteurs, errorMsgs, newFilm } = useSelector( state => state.filmReducer );

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
                <label htmlFor="titre">Titre</label>
                <input titre="titre" type="text"
                       value={newFilm.titre}
                       onChange={ (e) => dispatch( setNewFilm( { newFilm: {
                               ...newFilm,
                               titre: e.target.value,
                       }}))}
                />
            </p>
            <p>
                <label htmlFor="imageurl">Image</label>
                <input titre="imageurl" type="url"
                       value={newFilm.imgurl}
                       onChange={ (e) => dispatch( setNewFilm( { newFilm: {
                               ...newFilm,
                               titre: e.target.value,
                       }}))}
                />
            </p>
            <p>
                <label htmlFor="syno">Synopsis</label>
                <input titre="syno" type="textarea"
                       value={newFilm.syno}
                       onChange={ (e) => dispatch( setNewFilm( { newFilm: {
                               ...newFilm,
                               titre: e.target.value,
                       }}))}
                />
            </p>
            <p>
                <label htmlFor="duree">Duree</label>
                <input titre="duree" type="number"
                       value={newFilm.duree}
                       onChange={ (e) => dispatch( setNewFilm( { newFilm: {
                               ...newFilm,
                               duree: e.target.value,
                       }}))}
                />
            </p>
            <p>
                <label htmlFor="type">Type</label>
                <fieldset>
                    <div>
                        { types.map( (type, i) => 
                        <>
                        <input type="checkbox" key={i} value={type}/>
                        <label>{type}</label>
                        </> ) }
                    </div>
                </fieldset>
            </p>
            <p>
                <button type="submit">Ajouter film</button>
            </p>
        </form>
    )
}