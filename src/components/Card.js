import React from 'react';

const Card = ({movie}) => {

  console.log(movie.realisateur)
    return (
        <>
          <div className="card">
      <img
        src={
          movie.imageMovie
            ? movie.imageMovie
            : ""
        }
        alt={`affiche ${movie.titre}`}
      />
      <h2>{movie.titre}</h2>
     
        <h5>durée : {movie.durer}</h5>
    
    
    <div>
    {movie.realisateur.map((ele, index) => <li key={index}>{ele}</li>)}
    
    </div>

      <ul>
        
      </ul>

       <h3>Synopsis</h3> 
      <p>{movie.synopsis}</p>
   
    </div>
     
        </>
    );
};

export default Card;