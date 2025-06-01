import { useState } from 'react';
import Answer from './Answer/Answer';

import styles from './MathQuiz.module.css';

const getRandomNumber = () => Math.floor(Math.random() * 10);

const MathQuiz = () => {

    const [points, setPoints] = useState(0);

    const updatePoints = (newPoint) => {
        setPoints(prevPoints => prevPoints + newPoint)
    };

    const a = getRandomNumber();
    const b = getRandomNumber();

    
    return (
        <div className={styles.mathQuizContainer}>
            <p>Ваши очки: {points}</p>
            <p>{a} + {b} = ?</p>
            <Answer updatePoints={updatePoints} a={a} b={b} />
        </div>
    );
};

export default MathQuiz;