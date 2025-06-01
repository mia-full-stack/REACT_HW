"use client"

import { useState, useEffect } from "react"
import styles from "./listItems.module.css"

const ListItems = () => {
    const [items, setItems] = useState(["Элемент 1", "Элемент 2"])
    const [inputValue, setInputValue] = useState("")

    useEffect(() => {
        console.log("компонент обновлен")
    }, [])

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    const addItem = () => {
        if (!inputValue.trim()) {
            return
        }
        setItems((prevItems) => [...prevItems, inputValue])
        setInputValue("")
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addItem()
    }

    const elements = items.map((item) => (
        <li key={item} className={styles.item}>
            {item}
        </li>
    ))

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    onChange={handleChange}
                    value={inputValue}
                    type="text"
                    name="elementAdd"
                    placeholder="Введите элемент списка"
                    className={styles.input}
                />
                <button type="submit" className={styles.button}>
                    Добавить
                </button>
            </form>

            <div className={styles.listContainer}>
                <h3 className={styles.title}>Список элементов</h3>
                <ul className={styles.list}>{elements}</ul>
            </div>
        </div>
    )
}

export default ListItems
