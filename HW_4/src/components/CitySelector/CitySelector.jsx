

function CitySelector({ cities, onCityChange }) {
    return (
        <div className="selector-container">
            <label htmlFor="city-select" className="selector-label">
                Выберите город:
            </label>
            <select
                id="city-select"
                className="city-select"
                onChange={(e) => onCityChange(e.target.value)}
                defaultValue={cities[0].name}
            >
                {cities.map((city) => (
                    <option key={city.name} value={city.name}>
                        {city.name}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default CitySelector;