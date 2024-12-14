import React, { useState } from "react";
import './shop.css'
import Banner from '../image/Screenshot 2024-12-10 182513.png'
import { FaHeart, FaEye } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";


const Shop = ({ shop, Filter, allcatefilter, addtocart }) => {

    const [shopDetail, setshopDetail] = useState(false)
    const [detail, setdetail] = useState([])


    const detailpage = (product) => {
        const detaildata = ([{product}])
        
        const productdetail = detaildata[0]['product']
        
        setdetail([{ productdetail }])
        setshopDetail(true)
    }
 

    const closedetail = () => {
        setshopDetail(false)
    }
    return (
        <>
            {
                shopDetail ?
                    <>


                        <div className="product_detail">
                            <button className="close_btn" onClick={closedetail}><IoMdClose /></button>
                            <div className="img_box">
                               
                                <img src={detail.image}></img>
                                
                            </div>

                        </div>
                    </>
                    : null

            }




            <div className="shop">
                <h2># Shop</h2>
                <p>Home . Shop</p>
                <div className="container">
                    <div className="left_box">
                        <div className="category">
                            <div className="header">
                                <h3>all category</h3>
                            </div>
                            <div className="box">
                                <ul>
                                    <li onClick={() => allcatefilter()}># All </li>
                                    <li onClick={() => Filter("tv")}># Tv</li>
                                    <li onClick={() => Filter("laptop")}># Laptop</li>
                                    <li onClick={() => Filter("watch")}># Watch</li>
                                    <li onClick={() => Filter("speaker")}># Speaker</li>
                                    <li onClick={() => Filter("electronics")}># Electronics</li>
                                    <li onClick={() => Filter("headphone")}># Headphone</li>
                                    <li onClick={() => Filter("phone")}># Phone</li>
                                    <li onClick={() => Filter("chair")}># Chair</li>
                                    <li onClick={() => Filter("Glasses")}># Glasses</li>
                                </ul>

                            </div>
                        </div>
                        <div className="banner">
                            <div className="img_box"></div>
                        </div>
                    </div>
                    <div className="right_box">
                        <div className="banner">
                            <img src={Banner}></img>

                        </div>
                        <div className="product_box">
                            <h2>shop Product</h2>
                            <div className="product_container">
                                {
                                    shop.map((item) => {
                                        return (
                                            <>
                                                <div className="box">
                                                    <div className="img_box">
                                                        <img src={item.image}></img>
                                                        <div className="icon">
                                                            <li><FaHeart /></li>
                                                            <li onClick={() => detailpage(item)}> <FaEye /></li>
                                                        </div>
                                                    </div>
                                                    <div className="details">
                                                        <h3>{item.name}</h3>
                                                        <p>{item.price}</p>
                                                        <button onClick={() => addtocart(item)}>Add to cart</button>
                                                    </div>
                                                </div>

                                            </>
                                        )
                                    })
                                }


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Shop