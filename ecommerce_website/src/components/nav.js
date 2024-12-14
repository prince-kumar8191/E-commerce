import React from "react";
import { MdLocalShipping, MdOutlineSearch, MdLogin, MdOutlineLogout } from 'react-icons/md';
import { FiUser } from "react-icons/fi";
import './nav.css'
import logo from '../large_techayo.png'
import { useAuth0 } from "@auth0/auth0-react";
import {Link} from 'react-router-dom'


const Nav = ({search,setsearch,searchproduct}) => {
    const { loginWithRedirect, logout, user, isAuthenticated, MdSupervisedUserCircle } = useAuth0();
    return (
        <>

            <div className="header">
                <div className="top_header">
                    <div className="icon">
                        {/* <MdLocalShipping /> */}
                    </div>
                    <div className="info">
                        <p>Free Shipping when shopping upto $1000</p>
                    </div>
                </div>
                <div className="mid_header">
                    <div className="logo">
                        <img src={logo}></img>
                    </div>
                    <div className="search_box">
                        <input type="text" value={search} placeholder="search" onChange={(e) => setsearch(e.target.value)}></input>
                        <button onClick={searchproduct}><MdOutlineSearch /></button>
                    </div>

                    {
                        isAuthenticated ?

                            <div className="user">
                                <div className="icon">
                                    <MdOutlineLogout />
                                </div>
                                <div className="btn">
                                    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
                                </div>
                            </div>
                            :
                            <div className="user">
                                <div className="icon">
                                    <MdLogin />
                                </div>
                                <div className="btn">
                                    <button onClick={() => loginWithRedirect()}>Login</button>
                                </div>
                            </div>
                    }

                </div>

                <div className="last_header">
                    <div className="user_profile">
                        {
                            isAuthenticated ?
                                <>
                                    <div className="icon">
                                        <FiUser />
                                    </div>
                                    <div className="info">
                                    <h2>{user.name}</h2>
                                    <p>{user.email}</p>

                                    </div>
                                   
                                </>
                                :
                                <>
                                    <div className="icon">
                                        <FiUser />
                                    </div>
                                    <div className="info">
                                        <p>Please Login</p>
                                    </div>
                                </>

                        }

                    </div>

                    <div className="nav">
                        <ul>
                            <li><Link to='/' className="link">Home</Link></li>
                            <li><Link to='/shop' className="link">Shop</Link></li>
                            <li><Link to='/cart' className="link">Cart</Link></li>
                            <li><Link to='/about' className="link">About</Link></li>
                            <li><Link to='/contact' className="link">Contact</Link></li>
                        </ul>

                    </div>

                    <div className="offer">
                        <p>Flat 10% over all iphone</p>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Nav