export default function CityCard({ city }) {
    return (
        <div className="card">
            <div className="card-image-container">
                <img src={city.imageUrl || "/placeholder.svg"} alt={`Фото города ${city.name}`} className="card-image" />
            </div>
            <div className="card-content">
                <h2 className="card-title">{city.name}</h2>
                <p className="card-description">{city.description}</p>
                <div className="card-facts">
                    <h3 className="facts-title">Интересные факты:</h3>
                    <ul className="facts-list">
                        {city.facts.map((fact, index) => (
                            <li key={index} className="fact-item">
                                {fact}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}