import React from "react"
import { Provider } from "react-redux"
import store from "../../redux/store"

import User from "../User/User"
import UserForm from "../UserForm/UserForm"

import "./App.css"

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <h1>Управление состоянием пользователя</h1>
        <div className="container">
          <User />
          <UserForm />
        </div>
      </div>
    </Provider>
  )
}

export default App
