import React, { useState } from 'react'
import './footer.css'
import { assets } from '../../Assets/assets'
// import { Link } from 'react-router-dom'
// import { useNavigate, useLocation } from 'react-router-dom'

const Footer = () => {
    const [menu, setMenu] = useState("")
    // const navigate = useNavigate();
    // const location = useLocation();

    //     const openOrderForm = () => {
    //     navigate('/whatsapp-order', { state: { from: location.pathname } });
    //   };
    return (

        <div className='footer' id='footer'>
            {/* <div className='footer-deco'></div> */}
            <div className='footer-content' >
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul className='com'>
                        <div className='reach'>
                            <a href="tel:+254706589426"><img src={assets.phone} alt="" className='social-icons' /></a>
                            <a href="tel:+254706589426" className='phone-call'><li className='reach-us'>+254 706589426</li></a>
                        </div>
                        <div className='reach'>
                            <a href="https://wa.me/254740935676?text=Hello👋"><img src={assets.whatsapp} alt="" className='social-icons' /></a>
                             <a href="https://wa.me/254740935676?text=Hello👋"><li className='reach-us'>+254 706589426</li></a> 
                        </div>
                        <div className='reach'>
                            <img src={assets.mail} alt="" className='social-icons' />
                            <a href="mailto:goldenpearlsachievers@gmail.com" className='mailing'><li className='reach-us'>goldenpearlsachievers@gmail.com</li></a>
                        </div>
                        <div className='reach'>
                            <img src={assets.mail} alt="" className='social-icons' />
                            <div className='reach-info'>
                                {/* <h3>KENYATA UNIVERSITY</h3> */}
                                <p>Kenyata University Main Campus<br />Nairobi,P.O Box 43844-00100</p>
                            </div>
                        </div>
                    </ul>

                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul className='com'>
                        <div className="reach"><a href=""><li className='reach-us'>About Us </li></a></div>
                        <div className="reach"><a href=""><li className='reach-us'>Contact Us </li></a></div>
                        <div className="reach"><a href=""><li className='reach-us'>Privacy </li></a></div>
                        <div className="reach"><a href=""><li className='reach-us'>Help Center </li></a></div>
                    </ul>
                </div>

                {/* <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul> */}
                {/* <a href='#explore-menu' onClick={() => setMenu("Menu")} className='ref'><li className='reach-us'>Home</li></a> */}
                {/* <Link to='/about' className='ref'><li className='reach-us'>About Us</li></Link>
                        <Link to='/delivery' className='ref'><li className='reach-us'>Delivery</li></Link>
                        <Link to='privacy' className='ref'><li className='reach-us'>Privacy policy</li></Link> */}

                {/* </ul>

                </div> */}
                <div className="footer-content-left">
                    {/* <Link to='/'><h2 className='footer-logo' ></h2>X-Fash</Link> */}
                    <p>Access our social media platforms for efficient communication and clarifications .</p>
                    <div className="footer-social-icons">
                        <img src={assets.twitter} alt="" className='social-icons' />
                        <img src={assets.tiktok} alt="" className='social-icons' />
                        <img src={assets.instagram} alt="" className='social-icons' />
                        <img src={assets.youtube} alt="" className='social-icons' />

                        <img src={assets.facebook} alt="" className='social-icons' />
                    </div>
                </div>

            </div>
            <hr />
            <p className="footer-copyright">
                Copyright  {new Date().getFullYear()} &copy; Golden Pearl Achievers. All Rights Reserved.
            </p>


        </div>
    )
}

export default Footer