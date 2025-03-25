import React from 'react';
import { useForm } from "react-hook-form";

import styles from './DynamicForm.module.css';

const DynamicForm = () => {

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();

    const firstFieldValue = watch("firstField", "")
    // используем `watch('firstField')` для отслеживания значения первого поля
    const isFirstFieldValid = firstFieldValue.length >= 5
    // Минимальная длина поля 5 символов
    // Второе поле появляется только когда `isFirstFieldValid` равно true (когда первое поле содержит не менее 5 символов)
    const isSecondFieldValue = watch("secondField", "")
    // используем `watch('secondField')` для отслеживания значения второго поля

    const onSubmit = (data) => {
        console.log("Form submitted:", data)
        // loginUser(values)
        reset();
    }

    return (

        <div className={styles.container}>
            <h2>Form c React-hook-form и Watch</h2>
            {/* //  функция `onSubmit`, которая будет обрабатывать отправку формы */}

            <form onSubmit={handleSubmit(onSubmit)} className={styles.forma}>
                <div>
                    <label htmlFor="name" className={styles.label}>First Field:</label>
                    {/* // на каждое поле ввода добавить register */}
                    <input className={styles.input}
                        placeholder='Name'
                        type="text" id="name"
                        {...register("firstField", {
                            required: "Поле не заполнено",
                            minLength: { value: 5, message: "Минимальная длина 5 знаков", },
                        })}
                    />

                    {errors.firstField && <p className={styles.errorMessage}>{errors.firstField.message}</p>}
                    {!errors.firstField && firstFieldValue && (
                        <p className={styles.validMessage}>{isFirstFieldValid ? "Привильно!" : "Нужно написать 5 символов"}</p>
                    )}
                </div>

                {isFirstFieldValid && (
                    <div>
                        <label className={styles.label}>Second Field:</label>
                        <input
                            className={styles.input}
                            placeholder='Second Name'
                            type="text"
                            {...register("secondField", {
                                required: "Поле не заполнено",
                            })}
                        />
                        {errors.secondField && <p className={styles.errorMessage}>{errors.secondField.message}</p>}
                    </div>
                )}
                
                {isSecondFieldValue && (
                    <div>
                        <label htmlFor="email" className={styles.label}>Email:</label>
                        <input className={styles.input} {...register('email', {
                            required: "Введите почту",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "email должен быть правильного формата"
                            }
                        })} type="text" id="email" placeholder="Email" />
                        {errors.email && <p className={styles.errorMessage}>{errors.email.message}</p>}
                    </div>
                )}

                <div>
                    <button className={styles.btn}>Submit</button>
                </div>


            </form>
        </div>
    )
}

export default DynamicForm



