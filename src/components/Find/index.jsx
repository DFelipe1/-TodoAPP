import { Search } from "lucide-react";

import styles from './styles.module.css'

export function Find() {
    return (
        <div className={styles.search}>
            <input type="text" name="" id="" />
            <Search size={24}/>
        </div>
    )
}