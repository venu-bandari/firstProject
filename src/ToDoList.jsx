import React,{useState} from "react";
function ToDOList(){
    const [tasks,setTasks]=useState(["Eat Breakfast"]);
    const [newTask, setNewTask] = useState("");
    function h(event){
        setNewTask(event.target.value)
    }
    function addtask(){
        if(newTask.trim()!==""){
            setTasks(t=>[...t,newTask]);
            setNewTask("");
        }
    }
    function deletetask(index){
        const updated=tasks.filter((element,i)=> i!==index);
        setTasks(updated);
    }
    function moveup(index){
        if(index>0)
        {
            const updated = [...tasks];
            [updated[index],updated[index-1]]=[updated[index-1],updated[index]];
            setTasks(updated);
        }
    }
    function movedowm(index){
        if(index<tasks.length-1)
            {
                const updated = [...tasks];
                [updated[index],updated[index+1]]=[updated[index+1],updated[index]];
                setTasks(updated);
            }
    }
    return(<>
        <div className="to-do-list">
            <h1>To-Do-List</h1>
            <div>
                <input type="text" 
                    placeholder="Enter the task..."
                    value={newTask}
                    onChange={h}/>
                <button className="add-button" onClick={addtask}>Add</button>
            </div>
            <ol>
                {tasks.map((task,index)=>
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="delete-button" onClick={() => deletetask(index)}>
                            Delete
                        </button>
                        <button className="move-button" onClick={() => moveup(index)}>
                            👆
                        </button>
                        <button className="move-button" onClick={() => movedowm(index)}>
                            👇
                        </button>
                    </li>
                )}
            </ol>
        </div>
    </>);
}
export default ToDOList