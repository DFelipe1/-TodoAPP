import { Search } from "lucide-react";

import styles from './styles.module.css'

export function Find({ listen }) {
    return (
        <div className={styles.search}>
            <input type="text" name="" id="" onChange={(e) => listen(e.target.value)}/>
            <Search size={24}/>
        </div>
    )
}