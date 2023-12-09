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
            <strong className={styles.title}>{title}</strong>
        </div>
    )
}