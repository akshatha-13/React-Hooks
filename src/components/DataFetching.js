import React,{useState,useEffect} from "react";
import axios from "axios";
 function DataFetching() {

    
    const[post,setPost]=useState([])
    const [id,setId]=useState(1)
    const[idFromButtonClick,setIdFromButtonClick]=useState(1)

    const handleClick=()=>{
        console.log("coming to handle click function",id)
        setIdFromButtonClick(id)
        
    }

    useEffect(()=>{
        axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>{
            console.log(res)
            setPost(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[idFromButtonClick])

    return(
        <div>
        <input type="text" value={id} onChange={e=>setId(e.target.value)}/>
        
        <div>{post.title}</div>
        <button type="submit" onClick={handleClick}>Click</button>
         {/*
          <ul>
          {post.map(posts=>(
            <li key={posts.id}>{posts.title}</li>
          ))}
          </ul>
          */}
        </div>
    )
 }
 export default DataFetching