import React, { useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { ACTIONS } from '../reducers/authReducer';

const Navbar = () => {

  const {user, dispatch} = useContext(AuthContext);

  const history = useHistory();

  const handleLogout = () => {

    history.replace('/login');
    
    dispatch({
      type: ACTIONS.logout
    });
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        HeroApp
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/dc"
          >
            Dc
          </NavLink>

          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/hero/22"
          >
            Hero/22
          </NavLink>

          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/hero/100"
          >
            NoHero
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-info">{user.name}</span>
          <button
            className="nav-item nav-link btn"
            onClick={ handleLogout }
          >
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
