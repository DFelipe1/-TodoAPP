import { useEffect, useState } from "react"

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
          <div key={todo.id}>
            <input type="checkbox" name={todo.title} id={todo.id} checked={todo.completed}/>
            <strong>{todo.title}</strong>
          </div>
        )
      })}
    </>
    
  )
}

export default App
