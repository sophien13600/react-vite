import { useState } from "react";
import Touche from "./Touche";

export default function Clavier() {
  let lettres = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const [saisie,setSaisie] = useState('')
  function ajoutLettre(lettre){
      //console.log(lettre);
      setSaisie(saisie  + lettre)
      
  }
  return (
    <div>
      <h2>Clavier</h2>
      <textarea rows="4" cols="50" value={saisie}></textarea>
      <div>
        {/* {lettres.map((lettre, index) => (
          <Touche key={index} value={lettre} sendTouche= {(value) =>ajoutLettre(value, lettre)} />
        ))} */}
         {lettres.map((lettre, index) => (
          <Touche key={index} value={lettre} sendTouche={()=>ajoutLettre(lettre)} />
        ))}
      </div>
    </div>
  );
}
