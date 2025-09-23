// import { useRef } from "react";

// export default function Controls({onSendSign}){

//     let signe =useRef('+')
//     function envoyer(){
//         onSendSign (signe.current.valueOf);
//     }

//     return(
//         <div>
//             <button ref={signe} onClick={envoyer} >
//                 +
//             </button>
//             {/* <span style={{color}}>{counter}</span> */}
//             <button ref ={signe} onClick={envoyer}>
//                 -
//             </button>
//         </div>
//     );
// } 

const Controls = ({ decrementer, incrementer }) => {
    return (
        <>
            <button onClick={decrementer}>-</button>
            <button onClick={incrementer}>+</button>

        </>
    )
}

export default Controls