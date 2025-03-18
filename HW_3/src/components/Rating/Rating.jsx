import { useState } from "react";


import "./Rating.css";

const Ruting = () => {
    const [ratingValue, setRatingValue] = useState(0);

    const ratingList = [
        "https://www.clipartmax.com/middle/m2i8H7A0A0Z5A0K9_5-star-rating-png",
        "https://www.clipartmax.com/png/small/67-676956_out-of-3-out-of-5-star-rating.png",
        "https://www.clipartmax.com/png/small/73-731815_stars-clipart-2-5-star-rating.png",
        "https://www.clipartmax.com/png/small/297-2970338_rating-2-out-of-5-gold-stars.png",
    ]

    const handleRatingChange = (newRating) => {
        setRatingValue(newRating)
    }


    return (

        <div className="rating-container">
            <h2 className="rating-title">Рейтинг / Rating</h2>

            <div className="rating-image-container">
                {ratingValue < ratingList.length ? (
                    <img
                        src={ratingList[ratingValue] || "/placeholder.svg"}
                        alt={`Rating ${ratingValue + 1}`}
                        className="rating-image"
                    />
                ) : (
                    <div className="rating-image-unavailable">Изображение недоступно / Image unavailable</div>
                )}
            </div>

            <div className="rating-buttons">
                <button
                    onClick={() => handleRatingChange(0)}
                    className={`rating-button ${ratingValue === 0 ? "rating-button-active" : ""}`}
                >
                    Отлично / Excellent
                </button>
                <button
                    onClick={() => handleRatingChange(1)}
                    className={`rating-button ${ratingValue === 1 ? "rating-button-active" : ""}`}
                >
                    Хорошо / Good
                </button>
                <button
                    onClick={() => handleRatingChange(2)}
                    className={`rating-button ${ratingValue === 2 ? "rating-button-active" : ""}`}
                >
                    Приемлемо / Acceptable
                </button>
                <button
                    onClick={() => handleRatingChange(3)}
                    className={`rating-button ${ratingValue === 3 ? "rating-button-active" : ""}`}
                >
                    Плохо / Poor
                </button>
            </div>

            <p className="rating-value">
                Текущий рейтинг: {ratingValue} / Current rating: {ratingValue}
            </p>
        </div>
    )
}

export default Ruting;