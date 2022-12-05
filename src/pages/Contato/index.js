import { Link } from 'react-router-dom';

function Contato(){
    return(
        <div>
            <h1>Contato</h1>
            <span>Contato da empresa: xx xxxxx-xxxx</span><br />
            <Link to="/">Home page</Link><br />
            <Link to="/about">About</Link>
        </div>
    )
}

export default Contato;