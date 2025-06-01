import { useSelector, useDispatch } from "react-redux";

import Question from "../Question/Question";
import Result from "../Result/Result";

import { selectAllQuestions, selectIsSubmitted } from "../../features/questionnaire/questionnaireSelector";
import { addResult, setValidationErrors, resetQuestionnaire } from "../../features/questionnaire/questionnaireSlice";

import styles from "./Questionnaire.module.css";

const Questionnaire = () => {

    const questions = useSelector(selectAllQuestions);
    const isSubmitted = useSelector(selectIsSubmitted);
    const dispatch = useDispatch();

    const elements = questions.map(item => (
        <Question key={item.id} item={item} />
    ))

    const onSubmitAnswers = () => {
        dispatch(setValidationErrors());
        const allAnswered = questions.every(q => q.selectedAnswerIndex !== null);

        if (allAnswered) {
            dispatch(addResult());
        }
    }

    const onReset = () => {
        dispatch(resetQuestionnaire());
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Questionnaire</h1>

            <ul className={styles.ul}>
                {elements}
            </ul>
            <div className={styles.btnBox}>
                <button className={styles.btn}
                    onClick={isSubmitted ? onReset : onSubmitAnswers}
                >{isSubmitted ? "Reset" : "Submit"}</button>
            </div>
            <Result />
        </div>
    )
};

export default Questionnaire;