import { useContext, useRef } from "react"
import { GlobalContext } from "../contexts/GlobalContext"

export default function First() {
    const { ajouterTexte } = useContext(GlobalContext)
    const texte = useRef()
    function envoyer() {
        ajouterTexte(texte.current.value)
        texte.current.value = ''
    }
    return (
        <div className="col-6">
            <h3>First</h3>
            <div>
                <input type="text" ref={texte} placeholder="Ton texte par ici" />
                <button onClick={envoyer}>
                    Envoyer
                </button>
            </div>
        </div>
    )
}