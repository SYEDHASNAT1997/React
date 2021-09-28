
import React from 'react'
import { useReducer } from 'react'



const reducer = (state, action) => {
    if (action.type === "inc") {
 return state+1;
 }
    if(action.type ==="decrement"){
       return  state-1;
    }
    
    return state;
}
export const Red = () => {
    const [state,dispatchem] = useReducer(reducer, 1);

    return (

        <div>

            <h1>{state}</h1>
            <button onClick={()=>dispatchem({type: "inc"})}>
                increment
            </button>
            <button onClick={()=>dispatchem({type:"decrement"})}>
                decrement
            </button>

        </div>
    )
}
