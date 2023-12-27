import { createContext, useState } from "react";

export const TaskContext = createContext({})

export function TasksProvider({children}) {

    const [ tasks, setTasks ] = useState([])


    return (
        <TaskContext.Provider value={{ tasks, setTasks }}>
            {children}
        </TaskContext.Provider>
    )
}