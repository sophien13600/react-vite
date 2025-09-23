import { Link } from "react-router-dom";

export default function Menu(){

    return(
        <div>
            <nav>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/">Accueil</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/compteur">Compteur</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/calculette">Calculette</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/primeur">Primeur</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/clavier">Clavier</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/clavier">Clavier</Link>
                </li>
            </ul>
        </nav>
    </div>
    )
}