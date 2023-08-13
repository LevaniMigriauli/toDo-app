import { Fragment, useState } from 'react'
import Icon from '../common/SimpleComponents/Icon.jsx'

const TaskInput = function ({ onAddTask }) {
  const [taskText, setTaskText] = useState('')
  const [iconCompletedIsClicked, setIconCompletedIsClicked] = useState(false)

  const inputChangeHandler = function (event) {
    setTaskText(event.target.value)
  }

  const keyPressHandler = function (event) {

    if (event.key === 'Enter') {
      console.log('gela')
      if (taskText.trim() !== '') {
        onAddTask(taskText)
        setTaskText('')
      }
    }
  }

  return (<div className="flex gap-3">
    {/*<img/>*/}
    <i
      className="icn"
      onClick={() => setIconCompletedIsClicked(!iconCompletedIsClicked)}
      // data-for={`div-place-DebtNotification-`}
    >
      {iconCompletedIsClicked ? <Icon name="icn-check" viewBox="0 0 20 20"/> :
        <Icon name="icn-checked" viewBox="0 0 20 20"/>}
    </i>

    <input type="text" placeholder="Create a new todo…" value={taskText}
           onChange={inputChangeHandler}
           onKeyDown={keyPressHandler}/>
    {/*<input style={{borderRadius: "50%"}} type={'checkbox'}  />*/}
  </div>)
}

export default TaskInput