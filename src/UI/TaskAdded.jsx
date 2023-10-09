import Icon from '../common/SimpleComponents/Icon.jsx'
import { useState } from 'react'
import PropTypes from 'prop-types'

const TaskAdded = function ({ task }) {
  const [iconCompletedIsClicked, setIconCompletedIsClicked] = useState(false)
  // console.log([...Object.values(tasks)].flat())
  // const allTasks = [...Object.values(tasks)].flat()
  return (
    <div
      className="flex items-center bg-white border-b-1 border-lightestGrey pt-4 pb-4 pl-5 pr-5">
      <i
        className="icn h-5"
        onClick={() => setIconCompletedIsClicked(!iconCompletedIsClicked)}
      >
        {iconCompletedIsClicked ? (
          <Icon name="icn-checked" viewBox="0 0 20 20"/>
        ) : (
          <Icon name="icn-check" viewBox="0 0 20 20"/>
        )}
      </i>
      <span className="text-12">{task}
      </span>
    </div>
  )
}

TaskAdded.propTypes = {
  task: PropTypes.string
}
export default TaskAdded
