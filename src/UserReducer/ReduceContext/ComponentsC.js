import React,{useContext} from "react";
import { CountContext } from "./MainComponent";

function ComponentsC() {
    const countContext=useContext(CountContext)
    return(
        <div>
           <button onClick={()=>countContext.countDispatch('increament')}>Increament</button>
           <button onClick={()=>countContext.countDispatch('decreament')}>decreament</button>
           <button onClick={()=>countContext.countDispatch('reset')}>Reset</button>


        </div>
    )
}
export default ComponentsC