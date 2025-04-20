import { useState, useCallback, useMemo } from "react"
import UserList from "../UserList/UserList"
import "./App.css"

export default function Home() {
  // Инициализация списка пользователей с русскими именами
  const userList = [
    { id: 1, name: "Иван Петров" },
    { id: 2, name: "Мария Иванова" },
    { id: 3, name: "Александр Смирнов" },
    { id: 4, name: "Екатерина Кузнецова" },
    { id: 5, name: "Дмитрий Соколов" },
    { id: 6, name: "Анна Новикова" },
    { id: 7, name: "Сергей Морозов" },
    { id: 8, name: "Ольга Волкова" },
    { id: 9, name: "Андрей Лебедев" },
    { id: 10, name: "Наталья Козлова" },
    { id: 11, name: "Михаил Попов" },
    { id: 12, name: "Елена Васильева" },
    { id: 13, name: "Павел Николаев" },
    { id: 14, name: "Татьяна Семенова" },
    { id: 15, name: "Артем Голубев" },
  ]

  // Состояние для текста фильтрации
  const [filter, setFilter] = useState("")

  // Функция для сброса фильтра
  const resetFilter = () => {
    setFilter("")
  }

  // Мемоизированная функция фильтрации с useCallback
  const filterUsers = useCallback((filterText, users) => {
    console.log("Filtering users...") // Для демонстрации когда функция выполняется
    return users.filter((user) => user.name.toLowerCase().includes(filterText.toLowerCase()))
  }, [])

  // Мемоизированный отфильтрованный список с useMemo
  const filteredUsers = useMemo(() => {
    return filterUsers(filter, userList)
  }, [filter, filterUsers, userList])

  return (
    <main className="container">
      <h1>Список пользователей</h1>
      <div className="filter-container">
        <label htmlFor="filter">Фильтр пользователей:</label>
        <div className="input-group">
          <input
            id="filter"
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Введите текст для фильтрации..."
          />
          <button
            className="reset-button"
            onClick={resetFilter}
            disabled={!filter} // Кнопка неактивна, если фильтр пустой
          >
            Сбросить
          </button>
        </div>
      </div>
      <UserList users={filteredUsers} />
    </main>
  )
}
