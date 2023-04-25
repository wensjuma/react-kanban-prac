import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import toast  from "react-hot-toast"

const AddTasks = ({ tasks, setTasks }) => {
    const [task, setTask] = useState({
        id: "",
        name:"",
        status: "todo"
    });

    const handleSubmit = (e) => {
        e.preventDefault();
         if(task.name.length <3){
                toast.error('Cannot add empty item to list ! ')
              }
        setTasks((prev) => {
            const listTasks = [...prev, task];
            localStorage.setItem("taskList", JSON.stringify(listTasks))
            toast.success('Item added successfully')
            return listTasks;
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                value={task.name}
                onChange={(e) => setTask({...task, id: uuidv4(), name: e.target.value })} className="input" placeholder="Enter new task" type="text" />
            <button type="submit" className="submit-btn">Submit</button>
        </form>
    )
}

export default AddTasks;