import { useContext, useMemo, useState } from "react";
import { TaskContext } from "../../contexts/tasks";
import { getLocal } from "../../service/data";

import { Search } from "lucide-react";

import styles from './styles.module.css';

export function Find() {

  const { setTasks } = useContext(TaskContext)
  const [search, setSearch] = useState('')

  const data = getLocal()

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
        <div className={styles.search}>
            <input type="text" name="" id="" onChange={(e) => setSearch(e.target.value)}/>
            <Search size={24}/>
        </div>
    )
}