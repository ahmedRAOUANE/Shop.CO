import CartActionsBtns from "@/components/CartActionsBtns";
import CartConfirmBtns from "@/components/CartConfirmBtns";
import CartProducts from "@/components/CartProducts";
import ProductCard from "@/components/ProductCard";
import SammaryData from "@/components/SammaryData";
import { getProductsFromCart } from "@/utils/getData";
import { CartItem, Product } from "@/utils/types";
import Link from "next/link";
import { BsFillTagFill } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

const Cart = async ({ params: { userId } }: { params: { userId: string } }) => {
    const products: CartItem[] = await getProductsFromCart(userId);

    return (
        <main className="cart container box column small-gap">
            <h1 className="full-width flex-0 disable-guitters">your cart</h1>

            <div className="box full-width ai-start">
                <CartProducts userId={userId} initialItems={products} />

                <div className="summary full-width paper outline">
                    <h3 className="disable-guitters">Order Summary</h3>

                    <div className="summary-body box column small-gap ai-start">
                        <SammaryData userid={userId} initialItems={products} />

                        <CartConfirmBtns initialItems={products} userId={userId} />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Cart

