//Multiple useReducer

import React,{useReducer} from "react";
const initialState=0
const reducer=(state,action)=>{
    switch(action) {
        case 'increament':
            return state+1
        case 'decreament':
            return state-1
        case 'reset':
            return initialState
        default:
            return state
    }
}

function ReducerOne() {
    const[count,dispatch]=useReducer(reducer,initialState)
    const[countTwo,dispatchTwo]=useReducer(reducer,initialState)

    return(
        <div>
        <div>
            <div>Count - {count}</div>
            <button onClick={()=>dispatch('increament')}>Increament</button>
            <button onClick={()=>dispatch('decreament')}>Decreament</button>
            <button onClick={()=>dispatch('reset')}>Reset</button>
        </div>
        <div>
            <div>Count Two - {countTwo}</div>
            <button onClick={()=>dispatchTwo('increament')}>Increament</button>
            <button onClick={()=>dispatchTwo('decreament')}>Decreament</button>
            <button onClick={()=>dispatchTwo('reset')}>Reset</button>
        </div>
        </div>
    )
}
export default ReducerOne