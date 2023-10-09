import { useState } from 'react'
import Icon from '../common/SimpleComponents/Icon.jsx'
import { v4 as uuidv4 } from 'uuid'
import PropTypes from 'prop-types'

const TaskInput = function ({ onAddTask }) {
  const [taskText, setTaskText] = useState({ id: '', task: '' })
  const [iconCompletedIsClicked, setIconCompletedIsClicked] = useState(false)

  const inputChangeHandler = function (event) {
    setTaskText({ id: uuidv4(), task: event.target.value })
  }

  const keyPressHandler = function (event) {
    if (event.key !== 'Enter' || taskText.task.trim() === '') return

    if (!iconCompletedIsClicked) {
      onAddTask(taskText)
    } else {
      onAddTask(undefined, taskText)
    }
    setTaskText({ id: '', task: '' })
  }

  return (
    <div
      className="flex items-center gap-3 w-full h-12 bg-white rounded-md mb-4">
      <i
        className="icn ml-5"
        onClick={() => setIconCompletedIsClicked(!iconCompletedIsClicked)}
        // data-for={`div-place-DebtNotification-`}
      >
        {iconCompletedIsClicked
          ? <Icon name="icn-checked" viewBox="0 0 20 20"/>
          : <Icon name="icn-check" viewBox="0 0 20 20"/>
        }
      </i>

      <input className="w-full"
             type="text" placeholder="Create a new todo…" value={taskText.task}
             onChange={inputChangeHandler}
             onKeyDown={keyPressHandler}/>
    </div>)
}

TaskInput.propTypes = {
  onAddTask: PropTypes.func
}

export default TaskInput