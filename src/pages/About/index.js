import { Link } from 'react-router-dom'

function About() {

    return(
        <div>
            <h1>About a Empresa.</h1>

            <Link to="/">Home Page</Link><br />
            <Link to="/contato">Contato</Link>
        </div>
    )
}

export default About;