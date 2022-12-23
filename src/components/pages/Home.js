import React from 'react';
import Card from '../Card';
import Header from '../Header';
import { useSelector } from 'react-redux';

const Home = () => {
    const film = useSelector(state => state.movieReducer);
     

    return (
      <>
        <div className='home-page'>
         <Header />    
         <div className="result">
          {film.movies.map((film, i) => <Card key={i} movie={film}/>)}
          </div>
        </div>
      </>
    );
};

export default Home;