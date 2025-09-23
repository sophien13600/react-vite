// import Produit from "./Produit"
// import { useRef, useState } from "react"

// export default function Primeur() {
//     let [produits,setProduits] = useState([
//         { nom: "banane", prix: 3, quantite: 10 },
//         { nom: "fraise", prix: 10, quantite: 20 },
//         { nom: "poivron", prix: 5, quantite: 10 }
//     ])
//     let nom =useRef()
//     let prix =useRef()
//     let quantite =useRef()
//     const ajouter =( )=>{
//         setProduits([
//             ...produits,
//             {nom: nom.current.value, prix:prix.current.value, quantite: quantite.current.value}
//         ])
//     }
//     const [total,setTotal] = useState(0)
//     function ajoutTotal(value, ind){
//         console.log(value, ind);
//         setTotal(total + value * produits[ind].prix)
        
//         // setTotal(value)

//     }
//     //const TVA = useRef(20)
//     const TVA = 0.2
//     return (
//         <>
//             <h2>Primeur</h2>
//             <p>
//              total=   {total}
//             </p>
//             <ul>
//                 {
//                     produits.map((p,ind) =>
//                         <li key={p.nom}>
//                             <Produit tva={TVA} {...p} onSendQuantite={(value) =>ajoutTotal(value,ind)} />
//                         </li>
                        
//                     )
//                 }
//             </ul>
//             <div>
//                 <label htmlFor="">Produit</label>
//                     <input type="text" ref={nom} />
//                 <label htmlFor="">Prix</label>
//                     <input type="text" ref={prix} />
//                 <label htmlFor="">Quantité</label>
//                     <input type="number" ref={quantite}/>
//                 <button ref={TVA}onClick={ajouter}>Ajouter</button>
//                 <h3>Ajouter un produit</h3>
//             </div>
//         </>
//     )
// }
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
//                             <Produit {...p} />
//                         </li>
//                     )
//                 }
//             </ul>
//         </>
//     )
// }
// import { useRef, useState } from "react"
// import Produit from "./Produit"

// export default function Primeur() {
//     let [produits, setProduits] = useState([
//         { nom: "banane", prix: 3, quantite: 10 },
//         { nom: "fraise", prix: 10, quantite: 20 },
//         { nom: "poivron", prix: 5, quantite: 10 }
//     ])
//     let [total, setTotal] = useState(0)
//     let nom = useRef()
//     let prix = useRef()
//     let quantite = useRef()
//     const ajouter = () => {
//         setProduits([
//             ...produits,
//             { nom: nom.current.value, prix: prix.current.value, quantite: quantite.current.value }
//         ])
//     }
//     const calculerTotal = (qteReservee, ind) => {
//         console.log(qteReservee, ind);
//         setTotal(total + qteReservee * produits[ind].prix)
//     }
//     return (
//         <>
//             <h2>Primeur : total = {total}</h2>
//             <div>
//                 <h3>Nouveau produit</h3>
//                 <input type="text" ref={nom} placeholder="Nom" />
//                 <input type="number" ref={prix} placeholder="Prix" />€
//                 <input type="number" ref={quantite} placeholder="Quantité" />Pièces
//                 <button onClick={ajouter}>
//                     Ajouter
//                 </button>
//             </div>
//             <ul>
//                 {
//                     produits.map((p, ind) =>
//                         <li key={p.nom}>
//                             <Produit
//                                 produit={p}
//                                 sendQuantity={(qteReservee) => calculerTotal(qteReservee, ind)}
//                             />
//                         </li>
//                     )
//                 }
//             </ul>
//         </>
//     )
// }

import { createContext, useRef, useState } from "react"
import Produit from "./Produit"
const TVA = 0.2
export const TvaContext = createContext(TVA)

export default function Primeur() {
    let [produits, setProduits] = useState([
        { nom: "banane", prix: 3, quantite: 10 },
        { nom: "fraise", prix: 10, quantite: 20 },
        { nom: "poivron", prix: 5, quantite: 10 }
    ])
    let [total, setTotal] = useState(0)
    let nom = useRef()
    let prix = useRef()
    let quantite = useRef()
    // const TVA = 0.2


    const ajouter = () => {
        setProduits([
            ...produits,
            { nom: nom.current.value, prix: prix.current.value, quantite: quantite.current.value }
        ])
    }
    const calculerTotal = (qteReservee, ind) => {
        console.log(qteReservee, ind);
        setTotal(total + qteReservee * produits[ind].prix)
    }
    return (
        <>
            <h2>Primeur : total = {total}€ HT</h2>
            <div>
                <h3>Nouveau produit</h3>
                <input type="text" ref={nom} placeholder="Nom" />
                <input type="number" ref={prix} placeholder="Prix" />€
                <input type="number" ref={quantite} placeholder="Quantité" />Pièces
                <button onClick={ajouter}>
                    Ajouter
                </button>
            </div>
            <ul>
                {
                    produits.map((p, ind) =>
                        <li key={p.nom}>
                            <Produit
                                // tva={TVA}
                                produit={p}
                                onSendQuantity={(qteReservee) => calculerTotal(qteReservee, ind)}
                            />
                        </li>
                    )
                }
            </ul>
        </>
    )
}