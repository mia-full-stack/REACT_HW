import "../ShoppingList/ShoppingList.css"


function ShoppingList({ items = [] }) {
    return (
        <div className="shopping-list">
            <h2>Список покупок</h2>

            {!items || items.length === 0 ? (
                <p className="empty-list">Список покупок пуст</p>
            ) : (
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default ShoppingList
