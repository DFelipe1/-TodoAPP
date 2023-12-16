import { useEffect, useState } from "react";
import styles from "./style.module.css";

export function Task({todo}) {
    const { id, title, completed } = todo
    

    return (
        <div className={styles.task}>
            <input 
                type="checkbox" 
                name={title} 
                id={id} 
                defaultChecked={completed}
                className={styles.input}
            />
            <label htmlFor={id} className={styles.title}>
                {title}
            </label>
        </div>
    )
}



export function GroupTask({ tasks, data, ChangeTask }) {

    const [ filter, setFilter ] = useState('all') // all || active || completed

    useEffect(() => {
        Filter()
    }, [filter])

    function Filter() {
        if( filter == 'all' ) {
            ChangeTask(data)
        }else if( filter == 'active' ) {
            const newListTasks = data.filter((task) => {
                return task.completed == false
            })
            console.log(newListTasks)
            ChangeTask(newListTasks)
        }else if( filter == 'completed' ) {
            const newListTasks = data.filter((task) => {
                return task.completed == true
            })
            console.log(newListTasks)
            ChangeTask(newListTasks)
        }
    }

    return (
        <div className={styles.group}>
            {
              tasks.length == 0 ? (
                <div className={styles.contentVoid}>
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
            <footer>
                <span>{tasks.length} items</span>
                <div>
                    <button 
                        className={styles.action} 
                        type="button"
                        data-active = {filter == 'all'}
                        onClick={() => {
                            setFilter('all')
                        }}
                    >
                        All
                    </button>
                    <button 
                        className={styles.action} 
                        type="button" 
                        data-active = {filter == 'active'}
                        onClick={() => {
                            setFilter('active')
                        }}
                    >
                        Active
                    </button>
                    <button 
                        className={styles.action} 
                        type="button" 
                        data-active = {filter == 'completed'}
                        onClick={() => {
                            setFilter('completed')
                        }}
                    >
                        Completed
                    </button>
                </div>

                <button className={styles.button}>
                    Create task
                </button>
            </footer>
        </div>
    )
}