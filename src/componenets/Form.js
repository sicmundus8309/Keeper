import {useState} from "react";
import Card from "./Card";
import "./form.css";

function Form(){
    const [tasks,setTask] = useState([]);

    const [data , setData] = useState({
        title:"",
        task :""
    })
    function chgData(e){
        const {name , value} = e.target;
        setData({
            ...data,
            [name] : value 
        })
        console.log(e.target.value);
    }
    function addData(e){
        setTask([...tasks,data]);
        setData({
            title:"",
            task:""
        })
        e.preventDefault();
    }
    function deleteTask(id){
        setTask(tasks.filter((tas,index)=>{
            return(
                index !==id
            )
        }))
    }
    return(
        <>
            <div className="i">
            <form onSubmit={addData} className="inp">
                <div><input className="ibox" maxLength={15} type="text" name="title" value={data.title} required placeholder="Enter the title of task" onChange={chgData} /></div>
                <div><input className="ibox"maxLength={100} type="text" name="task" value={data.task} required placeholder="Enter task" onChange={chgData} /></div>
                <div>{data.task.length} / 100 characters left</div>
                <button type="submit" className="btn btn-success addbtn">Add</button>
            </form>
            </div>
            {tasks.map((tas,index)=>{
                return(
                    <Card 
                        key={index}
                        id = {index}
                        title = {tas.title}
                        task = {tas.task}
                        onDelete = {deleteTask}
                    />
                )
            })
            }
        </>
    );
}

export default Form;