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

export function GroupTask({ children }) {
    return (
        <div className={styles.group}>
            { children }
            <footer>
                <span>5 items</span>
                <div>
                    <button className={styles.action} type="button" data-active>All</button>
                    <button className={styles.action} type="button">Active</button>
                    <button className={styles.action} type="button">Completed</button>
                </div>

                <button className={styles.button}>
                    Create task
                </button>
            </footer>
        </div>
    )
}