import React,{useContext} from "react";
import { userContext } from "./ComponentA";
function ComponentD(){
    return(<>
        <div className="box">
            <h1>ComponentD</h1>
            <h2>{useContext(userContext)} </h2>
        </div>
    </>);
}
export default ComponentD