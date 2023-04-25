// import { useState } from "react"

import { useEffect, useState } from "react";
import Task from './single.task'
import { useDrop } from "react-dnd";

const ListTasks = ({ tasks, setTasks }) => {

    const [todos, setTodos] = useState([])
    const [progress, setProgress] = useState([])
    const [closed, setClosed] = useState([])

    useEffect(() => {
        const fTodos = tasks.filter(item => item.status === 'todo')
        const fProgress = tasks.filter(item => item.status === 'InProgress')
        const fComplete = tasks.filter(item => item.status === 'Complete')


        setTodos(fTodos);
        setProgress(fProgress);
        setClosed(fComplete)
    }, [tasks])

    const allStatus = ['todo', 'InProgress', 'Complete'];
    return (
        <div className="flex">
            {allStatus.map((item, index) => (
                <Section key={index} status={item}
                    tasks={tasks} setTasks={setTasks}
                    todos={todos}
                    progress={progress}
                    closed={closed}
                />

            ))}
        </div>
    )
}

const Section = ({ status, setTasks, tasks, todos, progress, closed }) => {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "tasks",
        drop: (item) => addItemToSection(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))
    let text = 'Todo'
    let taskMapper = todos
    if (status === 'InProgress') {
        text = 'InProgress'
        taskMapper = progress
    } else if (status === 'Complete') {
        text = 'Complete'
        taskMapper = closed
    }
    const addItemToSection = (id) => {
        setTasks((tsk) => {
            const modified = tsk.map((item) => {
                if (item.id === id) {
                    return { ...item, status: status }
                }
                return item
            });
            localStorage.setItem('taskList', JSON.stringify(modified))
            return modified;
        })
    }
    return (<div className={`${isOver ? 'dropContainer' : ''}`} ref={drop}><Header text={text} />
        {taskMapper.length > 0 && taskMapper.map((task, index) => (
            <Task key={index} task={task} tasks={tasks} setTasks={setTasks} />
        ))}
    </div>)
}
const Header = ({ text }) => {
    return (<div className="header"><h4>{text} </h4></div>)
}

export default ListTasks;


