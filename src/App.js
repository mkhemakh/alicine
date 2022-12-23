import { Route, Routes } from 'react-router';
import './App.css';
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import FilmForm from './components/pages/FilmForm';
import { BrowserRouter } from 'react-router-dom';
import MoviesUser from './components/pages/MoviesUser';

function App() {


  return (  
  <BrowserRouter>
    <Routes>
     <Route path='/' element={ <Home /> }/>
     <Route path='/signup' element={ <SignUp /> }/>
     <Route path='/add' element={ <FilmForm /> }/>
     <Route path='/mesfilms' element={ <MoviesUser /> }/>
    </Routes>
 </BrowserRouter >
  );
}

export default App;
