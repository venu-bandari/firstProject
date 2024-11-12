function Profilepic(){
    const imgurl = 'https://imgs.search.brave.com/OJtlRpVuDwc1HnACbXgYDEXDjHUaYLPmjQCQzaj6k8Q/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA5LzI0LzA1LzY4/LzM2MF9GXzkyNDA1/Njg0NF9CaWVNUlpu/cDBVVkNKeVRUYWFi/Z0tBUEJtUEZJdHFJ/Qy5qcGc';
    const h = (e)=>e.target.textContent="venu";
    return(<img onDoubleClick={(e)=>h(e)} src={imgurl}></img>)
}
export default Profilepic