import TaskInput from '../UI/TaskInput.jsx'
import { useReducer, useState } from 'react'
import headerImg from '../assets/images/bitmap.png'
import TaskAdded from '../UI/TaskAdded.jsx'

const taskReducer = function (state, action) {
  console.log(state, action)
  if (action.type === 'Active') {
    return [...action.tasks.active]
  }
  if (action.type === 'Completed') {
    return [...action.tasks.completed]
  }
  if (action.type === 'All') {
    return [...Object.values(action.tasks)].flat()
  }
}
const TodoApp = function () {
  const [tasks, setTasks] = useState({
    active: [],
    completed: []
  })

  const [tasksState, dispatchTasks] = useReducer(taskReducer, {
    type: '',
    tasks: []
  })

  const taskAddHandler = function (newTask, newTaskDone) {
    // console.log(newTask, newTaskDone)
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

  return (
    <div className="bg-cover bg-center bg-no-repeat h-52 px-6 pt-28"
         style={{ backgroundImage: `url(${headerImg})` }}>
      <div>
        <TaskInput onAddTask={taskAddHandler}/>
        <div
          className="h-368 bg-lightestGrey rounded-5 overflow-hidden mb-4 relative">
          {tasksState && tasksState.map(
            (task) => {
              return <TaskAdded key={task.id} task={task.task}/>
            })}
          <div
            className="w-full absolute bottom-0 flex justify-between pt-4 pl-5 pr-5 text-12"
            style={{ paddingBottom: '22px' }}>
            {/*<p>{tasks.active.length} items*/}
            {/*  left</p>*/}
            <button type="button">Clear Completed</button>
          </div>
        </div>

        <div className="h-12 bg-white flex justify-between text-14 items-start"
             style={{ padding: '15px 80px' }}>
          <button type={'button'} onClick={() => dispatchTasks(
            { type: 'All', tasks: tasks })}>ALL
          </button>
          <button type={'button'} onClick={() => dispatchTasks(
            { type: 'Active', tasks: tasks })}>Active
          </button>
          <button type={'button'} onClick={() => dispatchTasks(
            { type: 'Completed', tasks: tasks })}>Completed
          </button>
        </div>
      </div>
    </div>)
}

export default TodoApp