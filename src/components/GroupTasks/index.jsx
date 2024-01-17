import { useContext, useEffect, useState } from "react";
import styles from "./style.module.css";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, X } from "lucide-react";
import { TaskContext } from "../../contexts/tasks";
import { getLocal, setLocal } from "../../service/data";
import { Task } from "../Task";
import { DialogComponent } from "../Dialog";

export function GroupTask() {

    const { tasks, setTasks } = useContext(TaskContext)

    const [ filter, setFilter ] = useState('all') // all || active || completed
    const [ page, setPage ] = useState(1)
    const [ listTasks, setListTasks ] = useState(tasks)
    const [ isOpenModal, setIsOpenModal ] = useState(false)

    const data = getLocal()
    


    useEffect(() => {
        Filter()
    }, [filter])
    
    function Filter() {
        if( filter == 'all' ) {
            setTasks(data)
        }else if( filter == 'active' ) {
            const newListTasks = data.filter((task) => {
                return task.completed == false
            })
            setTasks(newListTasks)
        }else if( filter == 'completed' ) {
            const newListTasks = data.filter((task) => {
                return task.completed == true
            })
            setTasks(newListTasks)
        }
    }

    useEffect(() => {
        Pagenate()
    }, [ , page, tasks])

    const perPage = 5;
    const totalPages = Math.ceil(tasks.length / perPage)   

    const controllers = {
        next() {
            setPage(page + 1);

            if(page >= totalPages) {
                setPage(page)
            }
        },
        prev() {
            setPage( page - 1)

            if(page <= 1) {
                setPage(page)
            }
        },
        goTo(go) {
            if(go < 1) {
                go = 1
            }
            if(go > totalPages) {
                go = totalPages
            }

            setPage(go)
        }

    }

    function Pagenate() {

        const indexPage = page - 1
        const start = indexPage * perPage
        const end = start + perPage

        const pageneted = tasks.slice(start, end)

        setListTasks(pageneted)
    }

    function add(title){
        
        const newTask = {
            completed: false,
            id: crypto.randomUUID(),
            title: title,
        }

        setLocal([ newTask, ...tasks])
        setTasks([ newTask, ...tasks])
        setIsOpenModal(false)
    }

    function remove(id) {
        const newArray = tasks.filter(task => task.id !== id)

        setLocal(newArray)
        setTasks(newArray)
    }

    function toggleTaskCompleted(taskId) {
        const newTasks = tasks.map(task => {
            if(task.id === taskId) {
                return {
                    ...task,
                    completed: !task.completed
                }
            }
            return task
        })
        setLocal(newTasks)
        setTasks(newTasks)
    }

    return (
        <div className={styles.group}>
            <DialogComponent isOpenModal={isOpenModal} setIsOpenModal={() => setIsOpenModal()} add={(title) => add(title)}/>
            <dialog className={styles.overlay}  open={isOpenModal}/>
            <header>
                <span>{tasks.length} tasks</span>
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

                <button className={styles.button} onClick={() => setIsOpenModal(true)}>
                    Create task
                </button>
            </header>
            {
              tasks.length == 0 ? (
                <div className={styles.contentVoid}>
                    <span>Create your new task!</span>
                </div>
              ) : (
                listTasks.map(todo => {
                  return (
                    <Task todo={todo} remove={(id) => remove(id)} onToggle={(id) => toggleTaskCompleted(id)} key={todo.id}/>
                  )
                })
              )
            }
            <footer>
                <div className={styles.controlers}>
                    <button type="button" onClick={() => controllers.goTo(1)}>
                        <ChevronsLeft size={18}/>
                    </button>
                    <button type="button" onClick={() => controllers.prev()}>
                        <ChevronLeft size={18}/>
                    </button>

                    <span>{page}</span>
                    
                    <button type="button">
                        <ChevronRight size={18} onClick={() => controllers.next()}/>
                    </button>
                    <button type="button">
                        <ChevronsRight size={18} onClick={() => controllers.goTo(totalPages)}/>
                    </button>
                </div>
            </footer>
        </div>
    )
}