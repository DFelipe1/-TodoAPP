import styles from "./style.module.css";

import Mon from '../../assets/Mon.svg'
import Sun from '../../assets/Sun.svg'
import { useState } from "react";

export function Header() {

    const prefersColorScheme =  window.matchMedia('(prefers-color-scheme: dark)')

    const [ theme, setTheme ] = useState(prefersColorScheme)


    const root = document.getElementsByClassName('body')[0]
    if(theme){
        root.classList.add('dark')
    }
    
    function themeColor() {
        setTheme(!theme)
        root.classList.toggle('dark')
    }

    return (
        <header className={styles.header}>
            <h1 className={styles.logo}>TODO</h1>

            <button className={styles.themeMode} onClick={() => themeColor()}>
                {
                    theme ? (
                        <img src={Sun} alt="Sun - Dark/ligth Mode" />
                    ) : (
                        <img src={Mon} alt="Mon - Dark/ligth Mode" />
                    )
                }
            </button>
        </header>
    )
}