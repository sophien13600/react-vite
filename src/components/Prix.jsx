// export default function Prix({prixHt, tva}) {
//     return (
//         <>
//         {prixHt} € HT, ({prixHt + prixHt * tva} € TTC)
//         </>
//     )
// }

import { useContext } from "react"
import { TvaContext } from "./Primeur"

export default function Prix({prixHt}) {

    const tva = useContext(TvaContext)
    return (
        <>
        {prixHt} € HT, ({prixHt + prixHt * tva} € TTC)
        </>
    )
}