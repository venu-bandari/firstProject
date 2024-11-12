//1.External styling
//1.modules styling
//1.inline styling


// import styles from './Button.module.css'

// function Button(){
//     return (<button className={styles.button}>Click Me</button>);
// }
// export default Button

// function Button(){

//     const styles ={
        
//             backgroundColor: "green",
//             padding: "100px",
//             borderRadius: "10px",
//             borderWidth: "3px",
//             cursor: "pointer",
          
//     }

//         return (<button style={styles}>Click Me</button>);
//     }
//     export default Button


//click event

function Button(){
    let c=0;
    const h=(name)=> {
      if(c<4)
        {
            c++;
            console.log(`${name} fucked me `+c+" time");
        } 
        else{
            console.log(`${name} stop fucking me`);
        } 
    };
    return(<>
        <button onClick={function(){h("Rakesh")}}>click me</button>
    </>);
}

export default Button