import { Route, Routes } from 'react-router';
import './App.css';
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import FilmForm from './components/pages/FilmForm';
function App() {
  return (
<Routes>
  <Route path='/' element={ <Home /> }/>
  <Route path='/signup' element={ <SignUp/> }/>
  <Route path='/add' element={ <FilmForm/> }/>
</Routes>

  );
}

export default App;
