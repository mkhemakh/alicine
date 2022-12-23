import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
   const storage = JSON.parse(localStorage.getItem('currentUser')); 
   const handleLogout = () => {
    window.localStorage.removeItem('currentUser');
    window.location.reload();
    window.location = "/";
   }

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
            {storage ? (
              <NavLink
                to="/add"
                className={(nav) => (nav.isActive ? "nav-active" : "")}
                id="nav"
              >
                Ajouter un film
              </NavLink>
            ) : (
              <>
                <NavLink
                  to="/signup"
                  className={(nav) => (nav.isActive ? "nav-active" : "")}
                >
                  S'inscrire
                </NavLink>
              </>
            )}
          </li>
          <li>
            {storage ? (
              <NavLink
                to="/mesfilms"
                className={(nav) => (nav.isActive ? "nav-active" : "")}
                id="nav"
              >
                Mes reviews
              </NavLink>
            ) : (
              ""
            )}
          </li>
          <li>
            {storage ? (
              <NavLink
                to="/"
                onClick={handleLogout}
                className={(nav) => (nav.isActive ? "nav-active" : "")}
                id="nav"
              >
                deconnexion
              </NavLink>
            ) : (
              ""
            )}
          </li>
        </ul>
      </nav>
      <div>
        {storage ? <h1 className="user">bienvenu {storage.nom}</h1> : ""}
        <h1>ALLO CINÉ</h1>
      </div>
      
    </div>
    );
};

export default Header;