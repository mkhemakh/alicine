import React, { useEffect } from 'react';
import Card from '../Card';
import filmData from '../../data.Movie.json';
import Header from '../Header';
import { useSelector } from 'react-redux';

const Home = () => {
    const film = useSelector(state => state.movieReducer);
  useEffect(() => {
    
    console.log(film.movies);
  },[])
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