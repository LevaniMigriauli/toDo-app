import TaskInput from '../UI/TaskInput.jsx'
import { useReducer } from 'react'
import headerImg from '../assets/images/bitmap.png'
import TaskAdded from '../UI/TaskAdded.jsx'

const initialState = {
  active: [],
  completed: [],
  filteredTasks: [],
  filter: 'ALL'  // Possible values: 'ALL', 'ACTIVE', 'COMPLETED'
}

const taskReducer = function (state, action) {
  let filteredTasks
  console.log(state, action)
  switch (action.type) {
    case 'ADD_TASK':
      return { ...state, active: [...state.active, action.task] }
    case 'ADD_TASK_COMPLETED':
      return { ...state, completed: [...state.completed, action.task] }
    case 'SET_FILTER':
      switch (action.filter) {
        case 'ALL':
          console.log(state)
          filteredTasks = [...state.active, ...state.completed]
          break
        case 'ACTIVE':
          filteredTasks = [...state.active]
          break
        case 'COMPLETED':
          filteredTasks = [...state.completed]
          break
        default:
          filteredTasks = []
      }
      return { ...state, filter: action.filter, filteredTasks: filteredTasks }
    case 'CLEAR_COMPLETED':
      console.log({ ...state })
      return { ...state, completed: [] }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}
const TodoApp = function () {
  const [tasksState, dispatchTasks] = useReducer(taskReducer, initialState)

  console.log(tasksState)
  const taskAddHandler = function (newTask, newTaskCompleted) {
    if (newTask) {
      dispatchTasks({ type: 'ADD_TASK', task: newTask })
    } else {
      dispatchTasks({ type: 'ADD_TASK_COMPLETED', task: newTaskCompleted })
    }
    dispatchTasks({ type: 'SET_FILTER', filter: tasksState.filter })
  }

  return (
    <div className="bg-cover bg-center bg-no-repeat h-52 px-6 pt-28"
         style={{ backgroundImage: `url(${headerImg})` }}>
      <div>
        <TaskInput onAddTask={taskAddHandler}/>
        <div
          className="h-368 bg-lightestGrey rounded-5 overflow-hidden mb-4 relative">
          {tasksState && tasksState.filteredTasks.map(
            (task) => {
              return <TaskAdded key={task.id} task={task.task}/>
            })}
          <div
            className="w-full absolute bottom-0 flex justify-between pt-4 pl-5 pr-5 text-12"
            style={{ paddingBottom: '22px' }}>
            {/*<p>{tasks.active.length} items*/}
            {/*  left</p>*/}
            <button type="button" onClick={() => dispatchTasks(
              { type: 'CLEAR_COMPLETED' })}>Clear Completed
            </button>
          </div>
        </div>

        <div className="h-12 bg-white flex justify-between text-14 items-start"
             style={{ padding: '15px 80px' }}>
          <button type={'button'} onClick={() => dispatchTasks(
            { type: 'SET_FILTER', filter: 'ALL' })}>ALL
          </button>
          <button type={'button'} onClick={() => dispatchTasks(
            { type: 'SET_FILTER', filter: 'ACTIVE' })}>Active
          </button>
          <button type={'button'} onClick={() => dispatchTasks(
            { type: 'SET_FILTER', filter: 'COMPLETED' })}>Completed
          </button>
        </div>
      </div>
    </div>)
}

export default TodoApp