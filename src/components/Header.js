import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
   const storage = JSON.parse(localStorage.getItem('currentUser'));

    return (
        <div className="header">
        <nav>
       
          <ul>
            <li>
              <NavLink
                to="/"
                className={(nav) => (nav.isActive ? "nav-active" : "")}
              >
                Accueil
              </NavLink>
            </li>
            <li>
            
              {storage ? 
                (
                    <NavLink
                    to="/add"
                    className={(nav) => (nav.isActive ? "nav-active" : "") }
                 id="nav" >
                   Ajouter un film
                  </NavLink>
    
                ) :
                (
                  <>
                    <NavLink
                    to="/signup"
                    className={(nav) => (nav.isActive ? "nav-active" : "")}
                  >
                    S'inscrire
                  </NavLink>
    
                  </>
                )
              }
           
            </li>
          </ul>
        </nav>
        
        <h1>ALLO CINE</h1>
       {storage ?  <h1 className='name'>{storage.nom}</h1> : ""}
      </div>
    );
};

export default Header;