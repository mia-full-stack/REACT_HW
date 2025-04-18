import Filter from "../Filter/Filter"
import UserList from "../UserList/UserList"
import "./App.css"

// Главный компонент приложения
function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Список пользователей</h1>
        <p>Используйте поиск для фильтрации пользователей</p>
      </header>
      <main className="app-content">
        <Filter />
        <UserList />
      </main>
    </div>
  )
}

export default App;
