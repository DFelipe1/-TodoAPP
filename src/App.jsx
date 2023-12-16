import { useEffect, useMemo, useState } from "react"
import { GroupTask } from "./components/Task"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Cover } from "./components/Cover"
import { Find } from "./components/Find"



function App() {

  const [ data, setData ] = useState([])
  const [ tasks, setTasks ] = useState([])
  const [search, setSearch] = useState('')
  
  async function getAllTask(){
    const data = await fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json())
    setData(data)
    setTasks(data)
  }
  useEffect( () => {
    getAllTask()
  },[])

  useMemo( () => {
    setTasks(data)
    if(search){
      const taskFilter = data.filter(task => {
        return task.title.toLowerCase().includes(search.toLocaleLowerCase())
      })
      setTasks(taskFilter)
    }
  }, [search])


  

  return (
    <div className="container">
      <div className="content">
        <Header/>
        <main className="main">
          <Find listen={setSearch}/>
          <GroupTask tasks={tasks} data={data} ChangeTask={setTasks}/>
        </main>

        <Footer/>
      </div>
      <Cover/>
    </div>
    
  )
}

export default App
