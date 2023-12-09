import { useEffect, useState } from "react"
import { Task } from "./Task"

function App() {

  const [ tasks, setTasks ] = useState([])
  
  async function getAllTask(){
    const data = await fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json())
    return data

  }

  useEffect( () => {
    getAllTask().then(res => setTasks(res))
  },[])

  

  return (
    <>
      {tasks.map(todo => {
        return (
          <Task todo={todo} key={todo.id}/>
        )
      })}
    </>
    
  )
}

export default App
