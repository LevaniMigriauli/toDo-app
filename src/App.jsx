import './App.css'
import TodoApp from './components/TodoApp.jsx'
import SvgIcons from './assets/svgIcons.jsx'
import '../src/css/main.css'

function App () {

  return (
    <div className="w-96 mx-auto my-0 h-100vh bg-white1">
      <SvgIcons/>
      <TodoApp/>
    </div>)
}

export default App