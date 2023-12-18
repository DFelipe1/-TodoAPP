import { createContext, useState } from "react";
import { data } from "../service/data";

export const TaskContext = createContext({})

export function TasksProvider({children}) {

    const [ tasks, setTasks ] = useState(data)

    return (
        <TaskContext.Provider value={{ tasks, setTasks }}>
            {children}
        </TaskContext.Provider>
    )
}