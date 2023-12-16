import styles from "./style.module.css";

import Mon from '../../assets/Mon.svg'

export function Header() {

    return (
        <header className={styles.header}>
            <h1 className={styles.logo}>TODO</h1>

            <button className={styles.themeMode}>
                <img src={Mon} alt="Mon - Dark/ligth Mode" />
            </button>
        </header>
    )
}