import { useState } from "react"
import CitySelector from "../CitySelector/CitySelector"
import CityCard from "../CityCard/CityCard"
import citiesData from "../../data/citiesData.js"
import MathQuiz from '../MathQuiz/MathQuiz';

import '../../styles/styles.css'


import "./App.css"

function App() {

  const [selectedCity, setSelectedCity] = useState(citiesData[0])

  const handleCityChange = (cityName) => {
    const city = citiesData.find((city) => city.name === cityName)
    if (city) {
      setSelectedCity(city)
    }
  }
  return (
    <main className="container">
    <h1 className="title">City Cards</h1>
    <CitySelector cities={citiesData} onCityChange={handleCityChange} />
    <CityCard city={selectedCity} />

    <MathQuiz />
  </main>
  )
}

export default App