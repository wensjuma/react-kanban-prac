import { useEffect, useState } from "react"
import AddTasks from "./add.new.task";
import ListTasks from "./list.tasks";
import {Toaster } from "react-hot-toast"


const MainBoard = () => {
    const [tasks, setTasks] = useState([]);
    console.log("TASKS...", tasks);
    useEffect(() => {
        setTasks(JSON.parse(localStorage.getItem('taskList')));
    }, [])
    return (
        <div>
            <Toaster/>
            <AddTasks tasks={tasks} setTasks={setTasks} />
            <ListTasks tasks={tasks} setTasks={setTasks} />
        </div>
    )
}

export default MainBoard;