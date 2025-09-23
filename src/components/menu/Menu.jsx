import { NavLink } from "react-router-dom";
import './Menu.css'
export default function Menu(){

    return(
        <div>
            <nav>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/">Accueil</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/compteur">Compteur</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/calculette">Calculette</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/primeur">Primeur</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/clavier">Clavier</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/clavier">Clavier</NavLink>
                </li>
            </ul>
        </nav>
    </div>
    )
}