import styles from "./style.module.css";
import { X } from "lucide-react";


export function Task({todo, remove}) {

    const { id, title, completed } = todo
    

    return (
        <div className={styles.task}>
            <div className={styles.content}>
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
            <button className={styles.close} onClick={() => remove(id)}>
                <X size={24} />
            </button>
        </div>
    )
}