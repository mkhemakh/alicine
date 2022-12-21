import {useState} from "react";
import {addFilm} from "../actions/filmActions";
import {useDispatch} from "react-redux";

const FilmForm = () => {

    const [film, setFilm] = useState([]);
    const [nom, setNom] = useState('');
    const [date, setDate] = useState('');
    const [categorie, setCategorie] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault()
        setFilm({
            id: new Date().getTime(),
            nom,
            date,
            
        });
        setNom('');
        setAge('');
        setElement('');
        dispatch( addDragon( { dragon } ) )
    }

    return (
        <form onSubmit={ (e) => handleSubmit(e) }>
            <h1>New Film</h1>
            <p>
                <label htmlFor="nom">Nom</label>
                <input name="nom" type="text" value={nom} onChange={ (e) => setNom( e.target.value ) }/>
            </p>
            <p>
                <label htmlFor="age">Age</label>
                <input name="age" type="text" value={age} onChange={ (e) => setAge( e.target.value ) }/>
            </p>
            <p>
                <label htmlFor="element">Element</label>
                <input name="element" type="tel" value={element} onChange={ (e) => setElement( e.target.value ) }/>
            </p>
            <p>
                <button type="submit">Add</button>
            </p>
        </form>
    )
}

export default FilmForm;