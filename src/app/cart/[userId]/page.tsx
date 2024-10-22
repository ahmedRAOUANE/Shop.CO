import Counter from "@/components/Counter";
import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/utils/getData";
import { Product } from "@/utils/types";
import Link from "next/link";
import { BsFillTagFill } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

// dummy data for building the logic
const summaryContent = [
    {
        title: "Subtotal",
        value: 200
    },
    {
        title: "Discount",
        value: 115
    },
    {
        title: "Delevery fee",
        value: 15
    },
]

const page = async () => {
    const products: Product[] = await getProducts(4);

    const total = summaryContent.reduce((acc, item) => acc + item.value, 0);

    return (
        <main className="cart container box column small-gap">
            <h1 className="full-width flex-0 disable-guitters">your cart</h1>

            <div className="box full-width ai-start">
                <div className="card-group box column outline paper full-width">
                    {products.map(product => (
                        <div key={product.id} className="card-container box nowrap full-width">
                            <ProductCard productData={product} className="ai-start" />
                            <div className="box column ai-end">
                                <button className="icon danger">
                                    <MdDelete />
                                </button>
                                <Counter />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="summary full-width paper outline">
                    <h3 className="disable-guitters">Order Summary</h3>

                    <div className="summary-body box column small-gap ai-start">
                        {summaryContent.map((item, index) => (
                            <div className="box full-width" key={index}>
                                <strong>{item.title}</strong>
                                <span>${item.value}</span>
                            </div>
                        ))}

                        <hr className="full-width" />

                        <div className="box full-width">
                            <strong>Total</strong>
                            <span>${total}</span>
                        </div>

                        <div className="box column small-gap full-width">
                            <div className="box full-width">
                                <div className="small box small-gap full-width nowrap">
                                    <BsFillTagFill />
                                    <input type="text" placeholder="Add Promo Code" />
                                </div>

                                <button className="rounded">Apply</button>
                            </div>

                            <Link href={"#"} className="btn rounded full-width box center-x center-y">
                                <span>Go To Checkout</span>
                                <FaArrowRightLong />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default page

