import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import Header from '../Header';
import {addFilm} from "../../actions/moviesDataAction";

const FilmForm = () => {

const dispatch = useDispatch()


const [title, setTitle] = useState();
const [time, setTime] = useState();
const [synopsis, setSynopsis] = useState();
const [url, setUrl] = useState();
const [type, setType] = useState();
const [nationnalite, setNationnalite] = useState();
const user = JSON.parse(localStorage.getItem('currentUser'));

const types = [
    'Comedie',
    'Action',
    'Drama',
    'Fantaisie'
];

const handleSubmit = (e) => {
    e.preventDefault();

    const newMovie = 
    {
        id: new Date().getTime(),
        userId: user.id, 
        titre: title,
        durer: time,
        imageMovie: url,
        synopsis: synopsis,
        type: [type],
        realisateur : ['inconnu'],
        nationalité: nationnalite

    }

 
    dispatch(addFilm({newMovie}));
    window.location = "/";
     
}
    
    return (
        
       <>
         
          <Header />  

          <form onSubmit={ (e) => handleSubmit(e) } className="filmForm">
            <h1>Nouveau Film</h1>
            <div> 
          
                <label htmlFor="titre">Titre</label>
                <input titre="titre" type="text"
                      
                       onChange={ (e) => setTitle(e.target.value)}
                />
          
          </div>  
           <div> 
                <label htmlFor="imageurl">Image</label>
                <input titre="imageurl"
                       
                       onChange={ (e) => setUrl(e.target.value)}
                />
          </div>
            <div>
                <label htmlFor="syno">Synopsis</label>
                <input titre="syno" type="textarea"
                       
                       onChange={ (e) => setSynopsis(e.target.value)}
                />
           </div>
            <div>
                <label htmlFor="duree">Duree</label>
                <input titre="duree" type="text"
                       
                       onChange={ (e) => setTime(e.target.value) }
                />
            </div>

            <div>
            <label htmlFor="syno">nationnalité</label>
                <input titre="syno" type="textarea"
                       
                       onChange={ (e) => setNationnalite(e.target.value)}
                />
            </div>
        
                <label htmlFor="type">Type</label>
                <fieldset>
                   <p>
                        { types.map( (type, index) => 
                        <>
                        <input type="checkbox" key={index} value={type} 
                         onChange={ (e) => 
                            setType(e.target.value)
                            }
                        />
                        <label>{type}</label>
                        </> ) }
                   </p>
                </fieldset>    
                <button type="submit">Ajouter film</button>
           
        </form>
         
       
       </>
    );
};

export default FilmForm;