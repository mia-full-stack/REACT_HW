import styles from "./List.module.css";


import { useState } from "react"


const List = () => {
    const [people, setPeople] = useState([
        { id: 1, name: "Иван", age: 20 },
        { id: 2, name: "Мария", age: 22 },
        { id: 3, name: "Алексей", age: 21 },
        { id: 4, name: "Марина", age: 19 },
        { id: 5, name: "Даша", age: 23 },
        { id: 6, name: "Глеб", age: 24 },
        { id: 7, name: "Дима", age: 18 },
        { id: 8, name: "Гриша", age: 20 },
        { id: 9, name: "Серафим", age: 21 },
    ])

    const handleDelete = (id) => {
        setPeople(people.filter((person) => person.id !== id))
    }

    return (
        <div className= {styles.appcontainer}>
            <div className={styles.container}>
                <h1 className={styles.title}>Список приглашенных</h1>
                <div className={styles.peoplegrid}>
                    {people.map((person) => (
                        <div key={person.id} className={styles.personcard}>
                            <div className={styles.cardcontent}>
                                <div className={styles.personinfo}>
                                    <div>
                                        <h2 className={styles.personname}>{person.name}</h2>
                                        <p className={styles.personage}>Возраст: {person.age}</p>
                                    </div>
                                    <button
                                        className={styles.deletebutton}
                                        onClick={() => handleDelete(person.id)}
                                        aria-label={`Удалить ${person.name}`}
                                    >
                                        ✕
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {people.length === 0 && <p className={styles.emptymessage}>Список пуст</p>}
            </div>
        </div>



    )
}

export default List