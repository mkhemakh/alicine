import React from 'react';

const Card = ({movie}) => {
 
    return (
        <>
    <div className="card">
      <img
        src={
          movie?.imageMovie
            ? movie.imageMovie
            : "https://upload.wikimedia.org/wikipedia/commons/7/7c/User_font_awesome.svg"
        }
        alt=""
      />
      <h2>{movie.titre}</h2>
     
      <h5>durée : {movie.durer}</h5>

      <div>
      {movie.realisateur ? 
      (
      movie.realisateur.map((ele, index) => <li key={index}>{ele}</li>)
      ) : (
      "")}
    
     </div>
       <h3>Synopsis</h3> 
      <p>{movie.synopsis}</p>
   
    </div>
     
        </>
    );
};

export default Card;