import TaskInput from '../UI/TaskInput.jsx'
import { useState } from 'react'
import headerImg from '../assets/images/bitmap.png'

const TodoApp = function () {
  const [tasks, setTasks] = useState({
    active: [],
    completed: []
  })

  // TODO ლოგიკა რომლითაც ამავე ფუნცქციას გადმოვაწვდი active ან completed თასქს
  const taskAddHandler = function (newTask, newTaskDone) {
    console.log(newTask, newTaskDone)
    setTasks((prevState) => {
        return newTask && {
          ...prevState,
          active: [...prevState.active, newTask]
        } || {
          ...prevState,
          completed: [...prevState.completed, newTaskDone]
        }
      }
    )
  }

  console.log(tasks)

  return (<div className="bg-cover bg-center bg-no-repeat h-52 px-6 pt-28 "
               style={{ backgroundImage: `url(${headerImg})` }}>
    <TaskInput onAddTask={taskAddHandler}/>
  </div>)
}

export default TodoApp