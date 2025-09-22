import { useRef } from "react";

export default function Touche({ value, sendTouche }) {

    let ajout =useRef()
    function afficher(){
     sendTouche(ajout.current.value);   
    }
  return (
      <button ref={ajout} onClick={afficher}>{value}</button>  
  )




}
