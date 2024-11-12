function List(){
    const fruits =[ {id:1,name:"apple"},
                    {id:2,name:"banana"},
                    {id:3,name:"cutie"},
                    {id:4,name:"dog"}];
    const listItem = fruits.map(fruit=> <li key={fruit.id}>{fruit.name}</li>)
    return(
         <ul>{listItem}</ul>
        
    );
}
export default List