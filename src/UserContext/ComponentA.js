import React from "react";
import ComponentB from "./ComponentB";
export const UserContext=React.createContext()
export const ChannelContext=React.createContext()
function ComponentA(){
    return(
        <UserContext.Provider value={'vishwa'}>
        <ChannelContext.Provider value={'codehive'}>
        <ComponentB/>
        </ChannelContext.Provider>
        </UserContext.Provider>
    )
}
export default ComponentA