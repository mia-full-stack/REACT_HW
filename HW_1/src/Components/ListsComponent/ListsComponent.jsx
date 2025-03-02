/* Создать новый компонент, назовите его ListsComponent, сделайте так, 
чтобы он возвращал два списка: упорядоченный и неупорядоченный. 
Каждый список должен содержать хотя бы один вложенный в него элемент. */

import './ListsComponent.css'

const ListsComponent = () => {
    return (
        <div className="lists-container">
            <div className="list-section">
                <h2 className="list-title">Упорядоченный список</h2>
                <ol className="ordered-list">
                    <li>Элемент 1</li>
                    <li>Элемент 2</li>
                    <li>
                        Элемент 3
                        <ol className="nested-list">
                            <li>Вложенный элемент 1</li>
                            <li>Вложенный элемент 2</li>
                        </ol>
                    </li>
                    <li>Элемент 4</li>
                </ol>
            </div>

            <div className="list-section">
                <h2 className="list-title">Неупорядоченный список</h2>
                <ul className="unordered-list">
                    <li>Элемент A</li>
                    <li>Элемент B</li>
                    <li>
                        Элемент C
                        <ul className="nested-list">
                            <li>Вложенный элемент 1</li>
                            <li>Вложенный элемент 2</li>
                        </ul>
                    </li>
                    <li>Элемент D</li>
                </ul>
            </div>
        </div>


    )
}

export default ListsComponent;