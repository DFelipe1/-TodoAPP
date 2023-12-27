console.log(import.meta.env.VITE_LOCAL_STORAGE_KEY)

export function getLocal() {
    return JSON.parse(localStorage.getItem(import.meta.env.VITE_LOCAL_STORAGE_KEY)) || []
}

export function setLocal(tasks) {
    localStorage.setItem(import.meta.env.VITE_LOCAL_STORAGE_KEY, JSON.stringify(tasks))
}