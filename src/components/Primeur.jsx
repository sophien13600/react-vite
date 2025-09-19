import Produit from "./Produit"

export default function Primeur() {
    let produits = [
        { nom: "banane", prix: 3, quantite: 10 },
        { nom: "fraise", prix: 10, quantite: 20 },
        { nom: "poivron", prix: 5, quantite: 10 }
    ]
    return (
        <>
            <h2>Primeur</h2>
            <ul>
                {
                    produits.map(p =>
                        <li key={p.nom}>
                            <Produit {...p} />
                        </li>
                    )
                }
            </ul>
        </>
    )
}
// import Produit from "./Produit"

// export default function Primeur() {
//     let produits = [
//         { nom: "banane", prix: 3, quantite: 10 },
//         { nom: "fraise", prix: 10, quantite: 20 },
//         { nom: "poivron", prix: 5, quantite: 10 }
//     ]
//     return (
//         <>
//             <h2>Primeur</h2>
//             <ul>
//                 {
//                     produits.map(p =>
//                         <li key={p.nom}>
//                             <Produit produit={p} />
//                         </li>
//                     )
//                 }
//             </ul>
//         </>
//     )
// }