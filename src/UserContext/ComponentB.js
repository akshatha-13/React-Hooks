import React,{useContext} from "react";
import {UserContext,ChannelContext} from '../UserContext/ComponentA'

function ComponentB() {
    const user=useContext(UserContext)
    const channel=useContext(ChannelContext)
    return(
        <div>
          {user}-{channel}
        </div>
    )
}
export default ComponentB