// import { useRef, useState } from "react";
// import Prix from "./Prix"

// export default function Produit({ produit, tva,onSendQuantite }) {
//     let ajout =useRef()
//      let [disabled, setDisabled] = useState(false)
//     function ajouter(){
//      onSendQuantite(ajout.current.value);
//       setDisabled(true)
        
//     }
//     return (
//         <>
//             {produit.nom}, <Prix prixHt={produit.prix} tva={tva} /> {produit.quantite} pièces,{onSendQuantite}
//             <input type="number" ref={ajout} />
//             <button onClick ={ajouter}disabled={disabled}>Ajouter</button>
//         </>
//     )

// }
// export default function Produit({ produit }) {
//     return (
//         <>
//             {produit.nom}, {produit.prix}€, {produit.quantite} pièces
//         </>
//     )

// }

import { useRef, useState } from "react"
import Prix from "./Prix"


// }
export default function Produit({ produit, onSendQuantity }) {
    let qteReservee = useRef()
    let [disabled, setDisabled] = useState(false)
    function envoyer() {
        onSendQuantity(qteReservee.current.value)
        setDisabled(true)
    }
    return (
        <>
            {produit.nom},
            <Prix prixHt={produit.prix} />         ,
            {produit.quantite} pièces
            <input type="number" ref={qteReservee} />
            <button onClick={envoyer} disabled={disabled}  >
                Ajouter dans le panier
            </button>
        </>
    )

}