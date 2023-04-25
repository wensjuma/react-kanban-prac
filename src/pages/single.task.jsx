import toast from "react-hot-toast"
import { useDrag } from 'react-dnd'

const Task = ({ task, tasks, setTasks }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "tasks",
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))
  console.log(isDragging);
  const handleRemove = (task) => {
    const newTasks = tasks.filter(it => it.id !== task);
    setTasks(newTasks)
    localStorage.setItem('taskList', JSON.stringify(newTasks))
    toast.success('Task Removed')
    return newTasks
  }
  return (<div ref={drag} className={`${isDragging ? 'styleElement' : ''}`}>
    <div onClick={() => handleRemove(task.id)} className="task-listed">
      <p>{task.name}</p>
    </div>
  </div>)
}
export default Task;