import { useEffect, useState } from "react"
import { GroupTask, Task } from "./components/Task"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Cover } from "./components/Cover"
import { Find } from "./components/Find"



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
    <div className="container">
      <div className="content">
        <Header/>
        <main className="main">
          <Find/>
          <GroupTask>
            {
              tasks.length == 0 ? (
                <div className='content-void'>
                    <span>Create your new task!</span>
                </div>
              ) : (
                tasks.map(todo => {
                  return (
                    <Task todo={todo} key={todo.id}/>
                  )
                })
              )
            }
          </GroupTask>
        </main>

        <Footer/>
      </div>
      <Cover/>
    </div>
    
  )
}

export default App
