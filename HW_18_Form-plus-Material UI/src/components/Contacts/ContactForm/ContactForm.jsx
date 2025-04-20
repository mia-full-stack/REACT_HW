// Импортируем необходимые библиотеки и стили
import React from "react"
import { useState } from "react"
import styles from "../Contacts.module.css"

const ContactForm = () => {
    // Состояния для формы
    const [formData, setFormData] = useState({
        email: "",
        name: "",
        message: "",
    })

    const [formErrors, setFormErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitSuccess, setSubmitSuccess] = useState(false)

    // Обработчик изменения полей формы
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value,
        })

        // Очищаем ошибку при вводе
        if (formErrors[name]) {
            setFormErrors({
                ...formErrors,
                [name]: "",
            })
        }
    }

    // Валидация формы
    const validateForm = () => {
        const errors = {}

        if (!formData.email) {
            errors.email = "Email обязателен"
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Некорректный email"
        }

        if (!formData.name) {
            errors.name = "Имя обязательно"
        }

        if (!formData.message) {
            errors.message = "Сообщение обязательно"
        } else if (formData.message.length < 10) {
            errors.message = "Сообщение должно содержать не менее 10 символов"
        }

        setFormErrors(errors)
        return Object.keys(errors).length === 0
    }

    // Обработчик отправки формы
    const handleSubmit = async (e) => {
        e.preventDefault()

        if (validateForm()) {
            setIsSubmitting(true)

            try {
                // Имитация отправки данных на сервер
                await new Promise((resolve) => setTimeout(resolve, 1500))

                console.log("Форма отправлена:", formData)
                setSubmitSuccess(true)

                // Сбрасываем форму
                setFormData({
                    email: "",
                    name: "",
                    message: "",
                })

                // Скрываем сообщение об успехе через 5 секунд
                setTimeout(() => {
                    setSubmitSuccess(false)
                }, 5000)
            } catch (error) {
                console.error("Ошибка при отправке формы:", error)
                setFormErrors({
                    submit: "Произошла ошибка при отправке. Пожалуйста, попробуйте позже.",
                })
            } finally {
                setIsSubmitting(false)
            }
        }
    }

    return (
        <div className={styles.formWrapper}>
            <h2 className={styles.formTitle}>Напишите нам</h2>

            {submitSuccess && (
                <div className={styles.successMessage}>
                    Спасибо! Ваше сообщение успешно отправлено. Мы свяжемся с вами в ближайшее время.
                </div>
            )}

            {formErrors.submit && <div className={styles.errorMessage}>{formErrors.submit}</div>}

            <form className={styles.contactForm} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Ваш email"
                        className={`${styles.formInput} ${formErrors.email ? styles.inputError : ""}`}
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {formErrors.email && <span className={styles.errorText}>{formErrors.email}</span>}
                </div>

                <div className={styles.formGroup}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Ваше имя"
                        className={`${styles.formInput} ${formErrors.name ? styles.inputError : ""}`}
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {formErrors.name && <span className={styles.errorText}>{formErrors.name}</span>}
                </div>

                <div className={styles.formGroup}>
                    <textarea
                        name="message"
                        placeholder="Ваше сообщение"
                        className={`${styles.formTextarea} ${formErrors.message ? styles.inputError : ""}`}
                        value={formData.message}
                        onChange={handleChange}
                    />
                    {formErrors.message && <span className={styles.errorText}>{formErrors.message}</span>}
                </div>

                <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                    {isSubmitting ? "Отправка..." : "Отправить"}
                </button>
            </form>
        </div>
    )
}

export default ContactForm
