import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Header';
import { deleteFilm } from '../../actions/moviesDataAction';

const MoviesUser = () => {
    const film = useSelector(state => state.movieReducer);
    const storage = JSON.parse(localStorage.getItem('currentUser'));
    const result = film.movies.filter(f => f.userId === storage.id)
    const dispatch = useDispatch();

    const handleDelete = (props) =>
    {
      dispatch(deleteFilm(props));
    }


     return (
        
   
       <>
     <div className='home-page'>
     <Header />  

     <div>
      <h1 className='titreMesfilm'>Mes Films</h1>
       </div>
        <div className="result">
         {result.map((f, index) =>   <div className="card" key={index}>
         <div className='supprResult' onClick={() => {
         if(window.confirm(('voulez vous supprimer ce film ?')))
         {handleDelete(f.id)}}}>supprimer
       </div>
      <img
        src={
          f?.imageMovie
            ? f.imageMovie
            : "https://upload.wikimedia.org/wikipedia/commons/7/7c/User_font_awesome.svg"
        }
        alt="aucun film"
      />
      <h2>{f.titre}</h2>
     
        <h5>durée : {f.durer}</h5>

    
      <div>
     {f.realisateur ? 
      (
      f.realisateur.map((ele, index) => <li key={index}>{ele}</li>)
      ) : (
      "")}
    
      </div>
      <div>
        genre :
       {f.type ? 
        (
       f.type.map((ele, index) => <li key={index}>{ele}</li>)
        ) : (
      "")}
   
      </div>

       <h3>Synopsis</h3> 

       <p>{f.synopsis}</p>
   
      </div>    
      )}

        </div> 
       
        </div>
       </>
       
        
       
    );
};

export default MoviesUser;