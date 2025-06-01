import { useState, useEffect } from "react"
import axios from "axios"

import styles from "./CatImage.module.css"


// Количество строк и столбцов в сетке
const rows = 3
const columns = 5
const totalImages = rows * columns


function CatImage() {
    // Состояние для хранения массива изображений кошек
    const [catImages, setCatImages] = useState([])
    // Состояние для отображения загрузки
    const [loading, setLoading] = useState(true)
    // Состояние для отображения ошибки
    const [error, setError] = useState(null)


    // Функция для загрузки всех изображений кошек
    const fetchAllCatImages = async () => {
        setLoading(true)
        setError(null)

        try {
            // Выполняем запрос к API для получения нескольких случайных изображений кошек
            const response = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=${totalImages}`)
            // Устанавливаем полученные изображения в состояние
            setCatImages(response.data)
        } catch (err) {
            // В случае ошибки, сохраняем сообщение об ошибке
            setError("Не удалось загрузить изображения кошек. Попробуйте еще раз.")
            console.error("Ошибка при загрузке изображений:", err)
        } finally {
            // В любом случае завершаем состояние загрузки
            setLoading(false)
        }
    }

    // Функция для обновления одного конкретного изображения
    const refreshSingleImage = async (index) => {
        try {
            // Показываем индикатор загрузки только для этого изображения
            const updatedImages = [...catImages]
            updatedImages[index] = { ...updatedImages[index], loading: true }
            setCatImages(updatedImages)

            // Получаем новое изображение
            const response = await axios.get("https://api.thecatapi.com/v1/images/search")
            const newImage = response.data[0]

            // Обновляем изображение в массиве
            const newImages = [...catImages]
            newImages[index] = newImage
            setCatImages(newImages)
        } catch (err) {
            console.error("Ошибка при обновлении изображения:", err)
        }
    }

    // Загружаем изображения при первом рендере компонента
    useEffect(() => {
        fetchAllCatImages()
    }, [])

    return (
        <div className={styles.catContainer}>
            {loading ? (
                <div className={styles.loading}>Загрузка...</div>
            ) : error ? (
                <div className={styles.error}>
                    {error}
                    <button onClick={fetchAllCatImages} className={styles.retryButton}>
                        Попробовать снова
                    </button>
                </div>
            ) : (
                <>
                    <div className={styles.gridContainer}>
                        {catImages.map((cat, index) => (
                            <div key={cat?.id || index} className={styles.gridItem}>
                                <img src={cat?.url || "/placeholder.svg"} alt={`Кошка ${index + 1}`} className={styles.image} />
                                <button
                                    onClick={() => refreshSingleImage(index)}
                                    className={styles.refreshButton}
                                    title="Обновить это изображение"
                                >
                                    ↻
                                </button>
                            </div>
                        ))}
                    </div>

                    <button onClick={fetchAllCatImages} className={styles.button} disabled={loading}>
                        Обновить все изображения
                    </button>
                </>
            )}
        </div>
    )
}

export default CatImage

