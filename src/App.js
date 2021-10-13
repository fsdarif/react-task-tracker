import { useState } from "react"
import AddTask from "./component/AddTask"
import Header from './component/Header'
import Tasks from './component/Tasks'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: 'Doctors Appointment',
            day: 'Feb 5th at 2:30pm',
            reminder : true,
        },
        {
            id: 2,
            text: 'Meeting at School',
            day: 'Feb 6th at 1:30pm',
            reminder : false,
        },
        {
            id: 3,
            text: 'Food Shopping',
            day: 'Feb 6th at 2:30pm',
            reminder : false,
        }
    ]
)

//delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

// onToggle
const onToggle = (id) => {
  setTasks(tasks.map((task) => 
  task.id === id ? {...task, reminder: !task.reminder} : task
  ))
}

//add task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000 + 1)
  
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}
      title="Task Tracker"/>

      {showAddTask && <AddTask onAdd={addTask} />}

      { tasks.length > 0 
        ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={onToggle} /> 
        : 'No Task to Show'}

    </div>
  )
}

export default App

