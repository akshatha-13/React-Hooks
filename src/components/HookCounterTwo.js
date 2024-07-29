import React,{useState} from "react";

function HookCounterTwo() {
    const initialValue=0
    const[count,setCount]=useState(initialValue)
    const increamentFive=()=>{
        for(let i=0;i<5;i++) {
            setCount(prevCount=>prevCount+1)
        }
    }

    return(
        <div>
        Count:{count}
         <button onClick={()=>setCount(initialValue)}>Reset</button>
         <button onClick={()=>setCount(prevCount=>prevCount+1)}>Inc</button>
         <button onClick={()=>setCount(prevCount=>prevCount-1)}>Dec</button>
         <button onClick={increamentFive}>Incfive</button>


        </div>
    )
}
export default HookCounterTwo