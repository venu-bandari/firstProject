import React, { useState,createContext } from "react";
import ComponentB from "./ComponentB";
export const userContext = createContext();
function ComponentA(){
    const [user , setUser ]= useState("Venu");
    return(<>
        <div className="box">
            <h1>ComponentA</h1>
            <h2>hello {user}</h2>
            <userContext.Provider value={user}>
                <ComponentB user={user}/>
            </userContext.Provider>
        </div>
    </>);
}
export default ComponentA