import "../OrderStatus/OrderStatus.css"

function OrderStatus({ orderId, status }) {
    return (
        <div className="order-status">
            <span className="order-number">Заказ #{orderId}:</span>
            <span className={`status ${status.replace(" ", "-")}`}>{status}</span>
        </div>
    )
}

export default OrderStatus