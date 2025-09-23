import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import Controls from "../components/Controls";

export default function Compteur() {
  // let counter =0
  let [counter, setCounter] = useState(0);
  let [signe, setSigne] = useState("Nul");
  let [color, setColor] = useState("yellow");
  let pas = useRef(1);

  useEffect(() => {
    if (counter > 0) {
      setSigne("positif");
      setColor("blue");
    } else if (counter < 0) {
      setSigne("négatif");
      setColor("red");
    } else {
      setSigne("nul");
      setColor("yellow");
    }
  }, [counter]);
  useEffect(() => {
    pas.current.value = 1;
  }, []);

  function incrementer() {
    // counter ++
    const value = counter + Number(pas.current.value);
    setCounter(value);
    // if(counter>0 && counter!=0){
    //     setSigne('+')
    // }else if(counter ==0){
    //     setSigne('Nul')
    // }
    // console.log(counter);
  }
  // function mettreAJour(value) {
  //     if (value > 0) {
  //         setSigne('positif')
  //     } else if (value < 0) {
  //         setSigne('négatif')
  //     } else {
  //         setSigne('nul')
  //     }
  // }

  function decrementer() {
    const value = counter - pas.current.value;
    setCounter(value);
    //  if(counter<0 && counter!=0){
    //     setSigne('-')
    // }else if(counter ==0){
    //     setSigne('Nul')
    // }
    //  counter --
  }

  // function decrementer() {
  //     // counter--
  //     const value = counter - 1

  //     setCounter(value)
  //     mettreAJour(value)
  // }
  // function incrementer() {
  //     // counter++
  //     const value = counter + 1
  //     setCounter(value)
  //     mettreAJour(value)
  // }

  return (
    <div>
      <span style={{ color }}>{counter}</span>
      <Controls decrementer={decrementer} incrementer={incrementer} />
      <label htmlFor="">Ajuster le pas</label>
      <input type="number" ref={pas} />
      <h2>Compteur: Signe est :{signe}</h2>
    </div>
  );
}
