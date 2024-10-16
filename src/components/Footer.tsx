import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaGithub, FaTwitter } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi';

// imgs
import badge1 from "@/assets/Badge-1.png";
import badge2 from "@/assets/Badge-2.png";
import badge3 from "@/assets/Badge-3.png";
import badge4 from "@/assets/Badge-4.png";
import badge5 from "@/assets/Badge-5.png";
import Image from 'next/image';

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
                <div className="box column small-gap full-width ai-start">
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

                    <ul className='full-width'>
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

                    <ul className='full-width'>
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

                    <ul className='full-width'>
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

                    <ul className='full-width'>
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

            <div className="copyright-and-payment container box">
                <div className="copyright">
                    <p>Shop.co © 2000-2023, All Rights Reserved</p>
                </div>
                <div className="payment box ai-end" style={{gap: 0}}>
                    <Image src={badge1} alt='' />
                    <Image src={badge2} alt='' />
                    <Image src={badge3} alt='' />
                    <Image src={badge4} alt='' />
                    <Image src={badge5} alt='' />
                </div>
            </div>
        </footer>
    )
}

export default Footer