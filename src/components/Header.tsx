"use client";

import { UserAuth } from "@/context/authContext";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { MdMenu } from "react-icons/md";

const Header = () => {
    const { user } = UserAuth();
    console.log(`Current User: ${user}`);

    return (
        <header>
            <nav className="box nowrap container">
                <div className="box nowrap small-gap">
                    <button className="icon hide-in-large">
                        <MdMenu />
                    </button>

                    <Link href={"/"}>
                        <h1 className="disable-guitters">
                            SHOP.CO
                        </h1>
                    </Link>
                </div>

                <div className="box full-width nowrap jc-end">
                    {/* from the origina Design, this section have been commented because no available designs for their pages */}

                    {/* <div className="nav-menu box jc-start">
                        <select name="shop" id="shop" className="hide-in-small">
                            <option value="shop">Shop</option>
                        </select>

                        <ul className="box hide-in-small">
                            <li className="btn icon">
                                <Link href={"#"}>On Sale</Link>
                            </li>
                            <li className="btn icon">
                                <Link href={"#"}>New Arrivals</Link>
                            </li>
                            <li className="btn icon">
                                <Link href={"#"}>Brands</Link>
                            </li>
                        </ul>
                    </div> */}

                    <div className="search-bar box jc-start nowrap paper disable-guitters outline hide-in-small">
                        <CiSearch />
                        <input type="search" name="search" id="searchInput" className="transparent" placeholder="Search Products.." />
                    </div>

                    <div className="nav-btns box nowrap">
                        <button className="hide-in-large icon box">
                            <CiSearch />
                        </button>
                        {user ? (
                            <>
                                <Link href={"/cart"} className="icon box" title="your cart">
                                    <IoCartOutline />
                                </Link>
                                <Link href={"/profile"} className="icon box" title="view profile">
                                    <FaRegUserCircle />
                                </Link>
                            </>
                        ) : (
                            <Link href={"/login"} className="btn rounded">Login</Link>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header

