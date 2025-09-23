export default function Calculette() {
    let valeur1 = 0
    let valeur2 = 0

     function recupererValeur(event ) {
         if (event.target.name === "valeur1"){

             return valeur1 = Number(event.target.value)
         }
             return valeur2 = Number(event.target.value)
 
    }
    //  function calculer() {
    //     console.log(valeur1 + valeur2);
    // }

     function calculer(op) {
        if (!isNaN(valeur1) && !isNaN(valeur2)) {
            console.log(eval(valeur1 + op + valeur2));
        } else {
            console.error("Valeurs non numériques non acceptées");
            
        }
    }
   

    return (
        <div>
         <h2>Calculette</h2>
            Valeur 1 : <input type="number" name="valeur1" onInput={recupererValeur} />
            Valeur 2 : <input type="number" name="valeur2" onInput={recupererValeur} />
            <button onClick={() => calculer('+')}>+</button>
            <button onClick={() => calculer('-')}>-</button>
            <button onClick={() => calculer('*')}>*</button>
            
            <button onClick={() => calculer('/')}>/</button>
        </div>
    )
}