import React,{useState,useEffect} from "react";

function HookCounterFive() {
    const[count,setCount]=useState(0)
    const[name,setName]=useState('')

    useEffect(()=>{
        console.log('useeffect-updating document title')
        document.title=`you clicked ${count} times`
    },[count])
    return(
        <div>
        <input type="text" value={name}  onhange={e=>setName(e.target.name)}/>
        <button onClick={()=>setCount(count+1)}>click {count} times</button>
        </div>
    )
}

export default HookCounterFive