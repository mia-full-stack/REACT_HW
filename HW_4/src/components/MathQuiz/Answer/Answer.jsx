import { useState } from 'react';

import styles from './Answer.module.css';

const Answer = ({ updatePoints, a, b }) => {

    const [value, setValue] = useState('');
    

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const checkAnswer = (event) => {
        event.preventDefault();

        if (a + b === Number(value)) {
            updatePoints(1)
        } else updatePoints(-1)
        setValue('');
    };


    return (
        <form onSubmit={checkAnswer} className={styles.answerForm}>
            <input value={value} type="text" name='answer' placeholder='Введите ответ' onChange={handleChange} required />
            <button className={styles.button}>Проверить</button>
        </form>
    );
};

export default Answer;