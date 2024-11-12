import React,{useState,useEffect, useRef} from "react";

// function Mycomponents(){
//     const[name,setName]=useState("Guest");
//     const[age,setAge]=useState(0);
//     const updatename = ()=>{
//         setName("Venu");
//     }
//     const updateAge = ()=>{
//         setAge(19);
//     }
//         return(<>
//             <div>
//                 <p>Name: {name}</p>
//                 <p>Age: {age}</p>
//                 <button onClick={updatename}>Set Name</button>
//                 <br />
//                 <br />
//                 <button onClick={updateAge}>Set Age</button>
//             </div>
//     </>);
// }
// export default Mycomponents

// function Mycomponents(){
//     const [name,setName]=useState("Guest");
//     const [quantity,setquantity]=useState(1);
//     const [content,setcontent]=useState("");
//     const [payment,setpayment]=useState("");
//     const [shipping,setshipping]=useState();
//     function hn(event){
//         setName(event.target.value)
//         input.value="";
//     }
//     function hq(event){
//         setquantity(event.target.value)
//     }
//     function hc(event){
//         setcontent(event.target.value);
//     }
//     function hp(event){
//         setpayment(event.target.value);
//     }
//     function hs(event){
//         setshipping(event.target.value);
//     }
//     return(<>
//         <div>
//             <input value={name} onChange={hn}/>
//             <p>Name: {name}</p>

//             <input value={quantity} onChange={hq} type="number"/>
//             <p>Quantity: {quantity}</p>

//             <textarea value={content} onChange={hc}
//             placeholder="Enter delivery instruction"/>
//             <p>Comment: {content}</p>

//             <select value={payment} onChange={hp}>
//                 <option value="">select an option</option>
//                 <option value="Visa">Visa</option>
//                 <option value="masterCard">MasterCard</option>
//             </select>
//             <p>Payment: {payment}</p>
//             <label >
//                 <input type="radio" value="pick up" checked={shipping==="pick up"}
//                 onChange={hs}/>
//                 pick up
//             </label>
//             <br />
//             <label >
//             <input type="radio" value="Delivery" checked={shipping==="Delivery"}
//                 onChange={hs}/>
//                 Delivery
//             </label>
//             <p>Shipping: {shipping}</p>
//         </div>
//     </>);
// }
// export default Mycomponents

// function Mycomponents(){
//     const [car,setCar]=useState({year:2024,make:"Ford",model:"Mustang"});
//     function hy(event){
//         setCar(c=>({...c, year:event.target.value}));
//     }
//     function hm(event){
//         setCar(c=>({...c, make:event.target.value}));
//     }
//     function hmo(event){
//         setCar(c=>({...c, model:event.target.value}));

//     }
//     return(<>
//         <p>Your favorite car is: {car.year} {car.make} {car.model}</p>
//         <input type="number" value={car.year} onChange={hy}/><br /><br />
//         <input type="text" value={car.make} onChange={hm}/><br /><br />
//         <input type="text" value={car.model} onChange={hmo}/><br />
//     </>);
// }
// export default Mycomponents

// function Mycomponents(){
//     const [foods,setFoods]=useState(["Apple","Orange","Banana"]);
//     function h1(){
//         const newFood = document.getElementById("foodInput").value;
//         document.getElementById("foodInput").value="";
//         setFoods(f=> [...f,newFood]);
//     }
//     function h2(index){
//         setFoods(foods.filter((_,i)=> i!==index));
//     }
//     return(<>
//         <div>
//             <h2>List of Food</h2>
//             <ul>
//                 {foods.map((food,index)=> <li key={index} onClick={()=>h2(index)}>
//                     {food}</li>)}
//             </ul>
//             <input type="text" id="foodInput" placeholder="Enter food name"/>
//             <button onClick={h1}>Add Food</button>
//         </div>
//     </>);
// }
// export default Mycomponents

// function Mycomponents(){
//     const [count,setCount]=useState(0);
//     const [color,setColor]=useState("green");
//     useEffect(()=>{
//         document.title = `Count: ${count} ${color}`;
//     },[color,count]);
//     function addCount(){
//         setCount(c=>c+1);
//     }
//     function subtractCount(){
//         setCount(c=>c-1);
//     }
//     function changeColor(){
//         setColor(c=>c==="green"?"red":"green");
//     }
//     return(<>
//             <p style={{color: color}}>Count: {count}</p>
//             <button onClick={addCount}>Add</button><br />
//             <button onClick={subtractCount}>Subtract</button><br />
//             <button onClick={changeColor}>changeColor</button>
//     </>);
// }
// export default Mycomponents

// function Mycomponents(){
//     const [width, setWidth]= useState(window.innerWidth);
//     const [height, setHeight]= useState(window.innerHeight);

//     useEffect(()=>{
//         window.addEventListener("resize",handleresize);

//         return ()=>{
//             window.removeEventListener("resize",handleresize);
//         }
//     },[]);

//     useEffect(()=>{
//         document.title=`Size: ${width} x ${height}`;
//     },[width,height])

//     function handleresize(){
//         setWidth(window.innerWidth);
//         setHeight(window.innerHeight);
//     }
//     return(<>
//         <p>WIndow Width : {width}px</p>
//         <p>WIndow Height : {height}px</p>
//     </>);
// }
// export default Mycomponents

function Mycomponents(){
    const inputref = useRef(null);
    useEffect(()=>{
        console.log("Venu");
    });
    function h(){
        inputref.current.focus();
        inputref.current.style.backgroundColor="blue";
    }
    return(<div>
         <button onClick={h}>Click Me</button>
         <input ref={inputref}/>

    </div>);
}
export default Mycomponents