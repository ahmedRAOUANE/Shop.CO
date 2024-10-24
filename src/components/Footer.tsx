import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaGithub, FaTwitter } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi';
import PaymentMethods from './PaymentMethods';

const Footer = () => {
    return (
        <footer>
            <div className="stay-up-to-date container paper box outline">
                <h2 className="disable-guitters full-width ">
                    stay up to date about our latest offers
                </h2>

                <form className="box column full-width">
                    <input type="email" placeholder='Enter Your Email' className='rounded' />
                    <input type="submit" value="Subscribe To Newsletter" className='primary rounded' />
                </form>
            </div>

            <div className="footer-links container box ai-start">
                <div className="description box column small-gap full-width ai-start">
                    <h1>Shop.Co</h1>
                    <p>
                        We have clothes that suits your style and which you’re proud to wear. From women to men.
                    </p>
                    <ul className="box">
                        <li className="btn icon">
                            <FaTwitter />
                        </li>
                        <li className="btn icon">
                            <FaFacebookF />
                        </li>
                        <li className="btn icon">
                            <FiInstagram />
                        </li>
                        <li className="btn icon">
                            <FaGithub />
                        </li>
                    </ul>
                </div>

                <div className="box column small-gap full-width jc-start">
                    <h2 className='full-width'>company</h2>

                    <ul className='full-width box column small-gap ai-start'>
                        <li>
                            <Link href={"#"}>About</Link>
                        </li>
                        <li>
                            <Link href={"#"}>Features</Link>
                        </li>
                        <li>
                            <Link href={"#"}>Works</Link>
                        </li>
                        <li>
                            <Link href={"#"}>Career</Link>
                        </li>
                    </ul>
                </div>

                <div className="box column small-gap full-width jc-start">
                    <h2 className='full-width'>help</h2>

                    <ul className='full-width box column small-gap ai-start'>
                        <li>
                            <Link href={"#"}>Customer Support</Link>
                        </li>
                        <li>
                            <Link href={"#"}>Delivery Details</Link>
                        </li>
                        <li>
                            <Link href={"#"}>Terms & Conditions</Link>
                        </li>
                        <li>
                            <Link href={"#"}>Privacy Policy</Link>
                        </li>
                    </ul>
                </div>

                <div className="box column small-gap full-width jc-start">
                    <h2 className='full-width'>faq</h2>

                    <ul className='full-width box column small-gap ai-start'>
                        <li>
                            <Link href={"#"}>Account</Link>
                        </li>
                        <li>
                            <Link href={"#"}>Manage Deliveries</Link>
                        </li>
                        <li>
                            <Link href={"#"}>Others</Link>
                        </li>
                        <li>
                            <Link href={"#"}>Payments</Link>
                        </li>
                    </ul>
                </div>

                <div className="box column small-gap full-width jc-start">
                    <h2 className='full-width'>Resources</h2>

                    <ul className='full-width box column small-gap ai-start'>
                        <li>
                            <Link href={"#"}>Free eBooks</Link>
                        </li>
                        <li>
                            <Link href={"#"}>Development Tutorial</Link>
                        </li>
                        <li>
                            <Link href={"#"}>How to - Blog</Link>
                        </li>
                        <li>
                            <Link href={"#"}>Youtube Playlist</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="copyright-and-payment container box text-center">
                <div className="copyright">
                    <p>Shop.co © 2000-2023, All Rights Reserved</p>
                </div>
                <PaymentMethods />
            </div>
        </footer>
    )
}

export default Footer