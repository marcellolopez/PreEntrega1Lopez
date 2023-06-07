import './CartWidget.css'

const CartWidget = () => {

    const imgCarrito = "/img/cart.png";
    return (
        <div>
            <img className='imgCarrito' src={imgCarrito} alt="Carrito" />
            <strong> 10 </strong>
        </div>
    )
}

export default CartWidget