import {Link} from 'react-router-dom';
import { environment } from '../environments/environments';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const Nav = () => {
  const {auth0} = environment;
  let {name} = useContext(AuthContext)
  return (
    <nav>
        <Link to="/">Home</Link>
        <a href={`https://${auth0.url}/authorize?audience=${auth0.audience}&response_type=token&client_id=${auth0.clientId}&redirect_uri=${auth0.callbackURL}`}>Login</a>
        <Link to="/edit">Edit</Link>
        <p>{name}</p>
    </nav>
  )
}

export default Nav