import { useRef } from "react";

export default function Produit({ nom, prix, quantite,sendQuantite }) {
    let ajout =useRef()
    function ajouter(){
     sendQuantite(ajout.current.value);
      
        
    }
    return (
        <>
            {nom}, {prix}€, {quantite} pièces,{sendQuantite}
            <input type="number" ref={ajout} />
            <button onClick ={ajouter}>Ajouter</button>
        </>
    )

}
// export default function Produit({ produit }) {
//     return (
//         <>
//             {produit.nom}, {produit.prix}€, {produit.quantite} pièces
//         </>
//     )

// }