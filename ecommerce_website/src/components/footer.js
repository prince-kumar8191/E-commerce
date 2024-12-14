import React from "react";
import './footer.css'
import { FaPiggyBank, FaShippingFast, FaHeadphones, FaWallet } from "react-icons/fa";
import Logo from '../large_techayo.png'
const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="left_box">

                        <div className="box">
                            <div className="icon_box">
                                <FaPiggyBank />
                            </div>
                            <div className="detail">
                                <h3>Great saving</h3>
                                <p>lorem ipsud dolar sit amendh,</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icon_box">
                                <FaShippingFast />
                            </div>
                            <div className="detail">
                                <h3>Free delivery</h3>
                                <p>lorem ipsud dolar sit amendh,
                                </p>
                            </div>
                        </div>

                        <div className="box">
                            <div className="icon_box">
                                <FaHeadphones />
                            </div>
                            <div className="detail">
                                <h3>24/7 support</h3>
                                <p>lorem ipsud dolar sit amendh,
                                </p>
                            </div>
                        </div>

                        <div className="box">
                            <div className="icon_box">
                                <FaWallet />
                            </div>
                            <div className="detail">
                                <h3>money back</h3>
                                <p>lorem ipsud dolar sit amendh,
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="right_box">
                        <div className="header">
                            <img src={Logo}></img>
                        </div>
                        <div className="para">
                            <p>lorem ishdh dolar shjdg , conatitinebncy Nuclexljd elit. Duses fahdblous ips</p>
                        </div>

                        <div className="bottom">
                            <div className="box">
                                <h3>Your Account</h3>
                                <ul>
                                    <li>About us</li>
                                    <li>Account</li>
                                    <li>Payment</li>
                                    <li>Sales</li>
                                    
                                </ul>
                            </div>

                            <div className="box">
                                <h3>Products</h3>
                                <ul>
                                    <li>Delivery</li>
                                    <li>Track order</li>
                                    <li>New Products</li>
                                    <li>Old Products</li>
                                    
                                </ul>
                            </div>

                            <div className="box">
                                <h3>Contact us</h3>
                                <ul>
                                    <li>4005, Silver Business PointIndia</li>
                                    <li>+(012)999999999</li>
                                    <li>info@gmail.com</li>
                                   
                                    
                                </ul>
                            </div>


                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}
export default Footer 