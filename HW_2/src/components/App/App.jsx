// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Greeting from "../Greeting/Greeting.jsx"
import ShoppingList from "../ShoppingList/ShoppingList.jsx"
import OrderStatus from "../OrderStatus/OrderStatus.jsx"


function App() {

  // Определяем массив с товарами
  const products = ["Молоко", "Хлеб", "Яблоки", "Сыр", "Макароны"]
  // Для проверки пустого списка
  // const [showEmpty, setShowEmpty] = useState(false)

// Массив заказов
const orders = [
  { orderId: 123, status: "в пути" },
  { orderId: 124, status: "обработан" },
  { orderId: 125, status: "доставлен" },
  { orderId: 126, status: "в пути" },
]


  return (
    <>
      <h3>Задание 1</h3>
      <div className="app">
        <h1>Домашняя работа 2</h1>
        <Greeting name="Марина" />
      </div>

      <h3>Задание 2</h3>
      <div className="app">
      <h1>Список покупок</h1>

      <div className="container">
        <h3>Список с товарами:</h3>
        <ShoppingList items={products} />
      </div>

      <div className="container">
        <h3>Пустой список:</h3>
        <ShoppingList items={[]} />
      </div>
    </div>

    <h3>Задание 3</h3>

    <div className="app">
      <h1>Статусы заказов</h1>

      <div className="orders-container">
        {orders.map((order) => (
          <OrderStatus key={order.orderId} orderId={order.orderId} status={order.status} />
        ))}
      </div>
    </div>

    </>


  )
}

export default App