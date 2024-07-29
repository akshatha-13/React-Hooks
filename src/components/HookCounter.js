import React,{useState} from "react";
function HookCounter() {
  const[count,setCount]=useState(0)
  const IncNum=()=>{
    setCount(count+1);
  }
  return(
    <div>
    <h1>{count}</h1>
    <button onClick={IncNum}>click me</button>
    </div>
  );
}
export default HookCounter