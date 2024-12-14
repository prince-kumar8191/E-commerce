import React from "react";
import './cart.css'
import { Link } from 'react-router-dom'

import { IoClose } from "react-icons/io5";

const Cart = ({ cart, setcart }) => {

    const incqty = (product) => {

        const exist = cart.find((x) => {
            return x.id === product.id
        })
        setcart(cart.map((item) => {
            return item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item
        }))

    }

    const decqty = (product) => {

        const exist = cart.find((x) => {
            return x.id === product.id
        })
        setcart(cart.map((item) => {
            return item.id === product.id ? { ...exist, qty: exist.qty - 1 } : item
        }))

    }

    const removeproduct = (product) => {
        const exist = cart.find((x) => {
            return x.id === product.id
        })
        if (exist.qty > 0) {
            setcart(cart.filter((item) => {
                return item.id !== product.id

            }))
        }
    }

    const total = cart.reduce((price,item) => price + item.qty * item.price, 0)  



    return (
        <>
            <div className="cart">
                <h3>#cart</h3>
                {
                    cart.length === 0 &&
                    <>
                        <div className="empty_cart">
                            <h2>Your Shopping cart is empty</h2>
                            <Link to='/shop'><button>Shop Now</button></Link>

                        </div>
                    </>
                }
                <div className="container">
                    {
                        cart.map((item) => {
                            return (
                                <>
                                    <div className="box">
                                        <div className="img_box">
                                            <img src={item.image}></img>
                                        </div>
                                        <div className="detail">
                                            <div className="info">
                                                <h4>{item.cat}</h4>
                                                <h3>{item.name}</h3>
                                                <p>Price: {item.price}</p>
                                                <p>Total: { item.price * item.qty}</p>

                                            </div>
                                            <div className="quantity">
                                                <button onClick={() => incqty(item)}>+</button>
                                                <input type="number" value={item.qty}></input>
                                                <button onClick={() => decqty(item)}>-</button>
                                            </div>

                                            <div className="icon">
                                                <li onClick={() => removeproduct(item)}><IoClose /></li>

                                            </div>

                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
                <div className="bottom">
                    {
                        cart.length > 0 &&
                        <>
                            <div className="total">
                                <h4>Total : ${total}</h4>

                            </div>
                            <button>Checkout</button>
                        </>
                    }

                </div>
            </div>
        </>



    )
}
export default Cart