import { useRef } from "react";

export default function Touche({ value, onSendLetter }) {

    let ajout =useRef()
    function envoyer(){
     onSendLetter(ajout.current.value);   
    }
  return (
      <button ref={ajout} onClick={envoyer}>{value}</button>  
  )




}


// const Touche = ({ lettre, onSendLetter }) => {

//     function envoyer() {
//         onSendLetter()
//     }
//     return (
//         <>
//             <button onClick={envoyer}>
//                 {lettre}
//             </button>
//         </>
//     )
// }

// export default Touche