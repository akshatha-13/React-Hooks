import React,{useReducer} from "react";
import ComponentsA from "./ComponentsA";
import ComponentsB from "./ComponentsB";
import ComponentsC from "./ComponentsC";
export const CountContext=React.createContext()
const initialState=0
const reducer=(state,action)=>{
    switch(action) {
        case 'increameant':
            return state+1
            case 'decreament':
                return state-1
            case 'reset':
                return initialState
            default:
                return state
    }
}
function MainComponent() {
    const[count,dispatch]=useReducer(reducer,initialState)
    return(
        <CountContext.Provider value={{countState:count,countDispatch:dispatch}}>
          <div>
          count-{count}
          <ComponentsA/>
          <ComponentsB/>
          <ComponentsC/>
          </div>
        </CountContext.Provider>
    )
}
export default MainComponent