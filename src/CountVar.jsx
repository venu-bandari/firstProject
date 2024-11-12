import React,{useState} from "react";

function CountVar(){
    const [count,setCount]=useState(0);
    const h1=()=>{
        setCount(count=>count+1);
    }
    const h2=()=>{
        setCount(count=>count=0);
    }
    const h3=()=>{
        setCount(count=>count-1);
    }
    return(<>
        <div className="counter">
            <p className="count-display">{count}</p>
            <button className="count-button" onClick={h3}>decrement</button>
            <button className="count-button" onClick={h2}>reset</button>
            <button className="count-button" onClick={h1}>increment</button>
        </div>
    </>);
}
export default CountVar