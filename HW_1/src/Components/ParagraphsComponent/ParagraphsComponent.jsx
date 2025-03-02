// Создать новый компонент, назовите его ParagraphsComponent, 
// пусть он возвращает несколько параграфов текста с заголовками.
import "./ParagraphsComponent.css"

const ParagraphsComponent = () => {
    return (
        <div>
            <a href="https://htmlbook.ru/html/type/block"></a>
            <h3 className="paragraphsH">HTML на практике</h3>
            <a href="https://htmlbook.ru/html/type/block">Блочные элементы</a>
            <p>Блочные элементы характеризуются тем, что занимают всю доступную ширину, высота элемента определяется его содержимым, и он всегда начинается с новой строки.</p>
        </div>

    )
}

export default ParagraphsComponent;