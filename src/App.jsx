import './App.css'
import TodoApp from './components/TodoApp.jsx'
import { Fragment } from 'react'
import SvgIcons from './assets/svgIcons.jsx'
import "../src/css/main.css";


function App () {

  return (
    <Fragment>
      <SvgIcons/>
      <TodoApp/>
    </Fragment>)
}

export default App