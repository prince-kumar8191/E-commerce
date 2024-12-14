import React, { useEffect, useState } from "react";
import './home.css'
import { Link } from 'react-router-dom'
import HomeProduct from "./home_product";
import { FaEye, FaHeart, FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaCartArrowDown } from "react-icons/fa";
import Girl_image from '../image/girlImage.jpg'


const Home = ({ addtocart }) => {

    const [newProduct, setnewProduct] = useState([])
    const [featuredProduct, setfeaturedProduct] = useState([])
    const [topProduct, setTopProduct] = useState([])


    const [trendingProduct, settrendingProduct] = useState(HomeProduct)

    const fitercate = (x) => {
        const filterproduct = HomeProduct.filter((item) => {
            return item.type === x
        })
        settrendingProduct(filterproduct)
    }

    const allTrendingProduct = () => {
        settrendingProduct(HomeProduct)
    }

    useEffect(() => {
        productcategory()
    })

    const productcategory = () => {
        const newcategory = HomeProduct.filter((x) => {
            return x.type === 'new'
        })
        setnewProduct(newcategory)
        const featuredcategory = HomeProduct.filter((x) => {
            return x.type === 'featured'
        })
        setfeaturedProduct(featuredcategory)
        const topcategory = HomeProduct.filter((x) => {
            return x.type === 'top'
        })
        setTopProduct(topcategory)
    }

    return (
        <>
            <div className="home">
                <div className="top_banner">
                    <div className="contact">
                        <h3>silver aluminum</h3>
                        <h2>Apple Watch</h2>
                        <p>30% off at your first odder</p>
                        <Link to='/shop' className="link">Shop Now</Link>
                    </div>


                </div>
                <div className="trending">
                    <div className="container">
                        <div className="left_box">
                            <div className="header">
                                <div className="heading">
                                    <h2 onClick={() => allTrendingProduct()}>trending product</h2>
                                </div>

                                <div className="cate">
                                    <h3 onClick={() => fitercate('new')}>New</h3>
                                    <h3 onClick={() => fitercate('featured')}>Featured</h3>
                                    <h3 onClick={() => fitercate('top')}>top selling</h3>
                                </div>
                            </div>

                            <div className="products">
                                <div className="container">
                                    {
                                        trendingProduct.map((item) => {
                                            return (
                                                <>
                                                    <div className="boxx">
                                                        <div className="img_box">
                                                            <img src={item.image} alt=""></img>
                                                            <div className="icon">
                                                                <div className="icon_box">
                                                                    <FaEye />
                                                                </div>

                                                                <div className="icon_box">
                                                                    <FaHeart />
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div className="infoo">
                                                            <h3>{item.name}</h3>
                                                            <p>{item.price}</p>
                                                            <button className="btn" onClick={() => addtocart(item)}>Add to cart</button>
                                                        </div>

                                                    </div>
                                                </>
                                            )
                                        })

                                    }
                                </div>
                                <button>show more</button>
                            </div>


                        </div>

                        <div className="right_box">
                            <div className="right_container">
                                <div className="testimonial">
                                    <div className="head">
                                        <h3>our testimonial</h3>
                                    </div>
                                    <div className="detail">
                                        <div className="img_box">
                                            <img src={Girl_image}></img>
                                        </div>
                                        <div className="info">
                                            <h3>Stephan robot</h3>
                                            <h4>web designer</h4>
                                            <p>
                                                Lorem web designer wminn vate nunc modeles , nex facilities atcue piindgtrid nulallsb matterd abhtdidh namsgd.


                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="newsletter">
                                    <div className="head">
                                        <h3>newsletter</h3>
                                    </div>
                                    <div className="form">
                                        <p>join our mailing list</p>
                                        <input type="email" placeholder="E-mail" autoComplete="off"></input>
                                        <button>subscribe</button>
                                        <div className="icon_box">
                                            <div className="icon">
                                                <FaFacebook />
                                            </div>
                                            <div className="icon">
                                                <FaTwitter />
                                            </div>
                                            <div className="icon">
                                                <FaInstagram />
                                            </div>
                                            <div className="icon">
                                                <FaYoutube />
                                            </div>


                                        </div>
                                    </div>


                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <div className="product_type">
                    <div className="container">
                        <div className="box">
                            <div className="header">
                                <h2>New Product</h2>
                            </div>
                            {
                                newProduct.map((item) => {
                                    return (
                                        <>
                                            <div className="productbox">
                                                <div className="img_box">
                                                    <img src={item.image}></img>
                                                </div>
                                                <div className="detail">
                                                    <h3>{item.name}</h3>
                                                    <p>{item.price}</p>
                                                    <div className="icon">
                                                        <button> <FaEye /></button>
                                                        <button><FaHeart /></button>
                                                        <button onClick={() => addtocart(item)}><FaCartArrowDown /></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })

                            }


                        </div>


                        <div className="box">
                            <div className="header">
                                <h2>Featured Product</h2>
                            </div>
                            {
                                featuredProduct.map((item) => {
                                    return (
                                        <>
                                            <div className="productbox">
                                                <div className="img_box">
                                                    <img src={item.image}></img>
                                                </div>
                                                <div className="detail">
                                                    <h3>{item.name}</h3>
                                                    <p>{item.price}</p>
                                                    <div className="icon">
                                                        <button> <FaEye /></button>
                                                        <button><FaHeart /></button>
                                                        <button onClick={() => addtocart(item)}><FaCartArrowDown /></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })

                            }


                        </div>

                        <div className="box">
                            <div className="header">
                                <h2>Top Product</h2>
                            </div>
                            {
                                topProduct.map((item) => {
                                    return (
                                        <>
                                            <div className="productbox">
                                                <div className="img_box">
                                                    <img src={item.image}></img>
                                                </div>
                                                <div className="detail">
                                                    <h3>{item.name}</h3>
                                                    <p>{item.price}</p>
                                                    <div className="icon">
                                                        <button> <FaEye /></button>
                                                        <button><FaHeart /></button>
                                                        <button onClick={() => addtocart(item)}><FaCartArrowDown /></button>
                                                    </div>
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
        </>
    )

}
export default Home