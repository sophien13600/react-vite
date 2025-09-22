import { useState } from "react"

export default function OnOff(){

    
    let [disabled, setDisabled] = useState(true)

    function switchState(){
        setDisabled(!disabled)
    }
       

    return(
        <div>
            <button disabled ={disabled} onClick ={switchState} >{!disabled ? 'On' : 'Off'}</button>
            <button disabled ={!disabled} onClick ={switchState} >{disabled ? 'On' : 'Off'}</button>
        </div>
    )
}