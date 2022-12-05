import { Link } from 'react-router-dom';
import './error.css';

function Erro(){
    return(
        <div className="not-found">
        <h1>Erro</h1>
        <h2>página não encontrada!</h2>
        <Link to="/">Veja todos os filmes!</Link>
        </div>
    )
}

export default Erro;