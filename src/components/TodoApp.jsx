import TaskInput from '../UI/TaskInput.jsx'
import { useReducer, useState } from 'react'
import headerImg from '../assets/images/bitmap.png'
import TaskAdded from '../UI/TaskAdded.jsx'

const taskReducer = () => {

}
const TodoApp = function () {
  const [tasks, setTasks] = useState({
    active: [],
    completed: []
  })

  const [state, dispatch] = useReducer(taskReducer, tasks)

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

  const allTasks = [...Object.values(tasks)].flat()
  console.log(allTasks)

  return (
    <div className="bg-cover bg-center bg-no-repeat h-52 px-6 pt-28"
         style={{ backgroundImage: `url(${headerImg})` }}>
      <div>
        <TaskInput onAddTask={taskAddHandler}/>
        <div
          className="h-368 bg-lightestGrey rounded-5 overflow-hidden mb-4 relative">
          {allTasks.map(
            (task) => {
              console.log(task)
              return <TaskAdded key={task.id} task={task.task}/>
            })}
          <div
            className="w-full absolute bottom-0 flex justify-between pt-4 pl-5 pr-5 text-12"
            style={{ paddingBottom: '22px' }}>
            <p>{tasks.active.length} items
              left</p>
            <button type="button">Clear Completed</button>
          </div>
        </div>

        <div className="h-12 bg-white flex justify-between text-14 items-start"
             style={{ padding: '15px 80px' }}>
          <button type={'button'}>ALL</button>
          <button type={'button'}>Active</button>
          <button type={'button'}>Completed</button>
        </div>
      </div>
    </div>)
}

export default TodoApp