import { useState } from "react"
import styles from "./style.module.css";
import { X } from "lucide-react";

export function DialogComponent({isOpenModal, setIsOpenModal, add}) {

    const [ inputTitle, setInputTitle ] = useState('')

    return (
        <>
            <dialog className={styles.dialog} open={isOpenModal}>
                <form method="dialog">
                    <button className={styles.close} id="cancel" type="reset" onClick={() => setIsOpenModal(false)}>
                        <X size={24} />
                    </button>
                    <section>
                        <h3>Create your new task!</h3>

                        <label>what is the name of the task</label>
                        <input type="text" name="title" id="title" onChange={(e) => setInputTitle(e.target.value)} />
                    </section>
                    <menu>
                        <button className={styles.button} type="submit" onClick={() => add(inputTitle)}>Confirm</button>
                    </menu>
                </form>
            </dialog>
            {/* <div className={styles.overlay}/> */}
        </>
    )
}