import { useSelector, useDispatch } from "react-redux";

import { addSelectAnswer } from "../../features/questionnaire/questionnaireSlice";
import { selectIsSubmitted } from "../../features/questionnaire/questionnaireSelector";

import styles from "./Question.module.css";

const Question = ({ item }) => {

    const isSubmitted = useSelector(selectIsSubmitted);
    const dispatch = useDispatch();

    const handleChange = (id, index) => {
        dispatch(addSelectAnswer({ id, index }))
    };

    return (
        <li>
            <p className={styles.title}>{item.question}</p>
            {item.options.map((option, index) => (
                <label key={index} className={`${styles.label} 
                ${isSubmitted ? index === item.correctAnswerIndex ? styles.correct :
                        index === item.selectedAnswerIndex ? styles.incorrect : '' : ''}`}>
                    <input
                        type="radio"
                        name={`question-${item.id}`}
                        value={option}
                        checked={item.selectedAnswerIndex === index}
                        onChange={() => handleChange(item.id, index)}
                        disabled={isSubmitted}
                    />
                    {option}
                </label>
            ))}
            {item.hasError && (
                <p className={styles.error}>Please answer this question</p>
            )}
        </li>
    )
};

export default Question;