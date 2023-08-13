import TaskInput from '../UI/TaskInput.jsx'
import { useState } from 'react'

const TodoApp = function () {
  const [tasks, setTasks] = useState({
    active: [],
    completed: []
  })


  // TODO ლოგიკა რომლითაც ამავე ფუნცქციას გადმოვაწვდი active ან completed თასქს
  const taskAddHandler = function (newTask, newTaskDone) {
    setTasks((prevState) => {
        return {
          ...prevState,
          active: [...prevState.active, newTask],
          completed: [...prevState.completed, newTaskDone]
        }
      }
    )
  }

  console.log(tasks)

  return (<TaskInput onAddTask={taskAddHandler}/>)
}

export default TodoApp