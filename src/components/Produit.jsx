export default function Produit({ nom, prix, quantite }) {
    return (
        <>
            {nom}, {prix}€, {quantite} pièces
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