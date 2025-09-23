import { useState } from "react";
import Hello from "../components/Hello/Hello";
import Hi from "../components/Hi";

export default function About() {
    const [country, setCountry] = useState('')
    function afficherPays(value) {
        setCountry(value)
    }

    return (
        <div>
            <h2>À propos de React  en {country}</h2>
            <Hi nom='Wick'>Aix</Hi>
            <Hello nom='Dalton' sendData={afficherPays}>Marseille</Hello>
        </div>
    )
}