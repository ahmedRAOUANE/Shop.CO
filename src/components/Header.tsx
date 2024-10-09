import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { MdMenu } from "react-icons/md";

const Header = () => {
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

                <div className="box full-width nowrap">
                    <div className="nav-menu box jc-start">
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
                    </div>

                    <div className="search-bar box jc-start full-width nowrap paper disable-guitters outline hide-in-small">
                        <CiSearch />
                        <input type="search" name="search" id="searchInput" className="transparent" placeholder="Search Products.." />
                    </div>

                    <div className="nav-btns box nowrap">
                        <button className="hide-in-large icon">
                            <CiSearch />
                        </button>
                        <Link href={"#"} className="icon">
                            <IoCartOutline />
                        </Link>
                        <Link href={"#"} className="icon">
                            <FaRegUserCircle />
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header