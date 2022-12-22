import { Route, Routes } from 'react-router';
import './App.css';
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import FilmForm from './components/pages/FilmForm';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMoviesData } from './actions/moviesDataAction';
import filmData from './data.Movie.json'

function App() {

  const [user, setUser] = useState([]);

  console.log()
  const dispatch = useDispatch()

  dispatch(addMoviesData(filmData.Movies))

console.log(user)

  return (
<Routes>
  <Route path='/' element={ <Home /> }/>
  <Route path='/signup' element={ <SignUp /> }/>
  <Route path='/add' element={ <FilmForm /> }/>
</Routes>

  );
}

export default App;
