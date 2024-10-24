import CardImage from "@/components/CardImage";
import CheckoutForm from "@/components/CheckoutForm";
import SammaryData from "@/components/SammaryData";
import { getProducts, getProductsFromCart } from "@/utils/getData"
import { CartItem, Product } from "@/utils/types";
import { get } from "http";

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

const Checkout = async ({ params: { userId } }: { params: { userId: string } }) => {
    const products: CartItem[] = await getProductsFromCart(userId);

    const total = summaryContent.reduce((acc, item) => acc + item.value, 0);

    return (
        <main className="cart container box column small-gap">
            <h1 className="full-width flex-0 disable-guitters">Checkout</h1>

            <div className="box full-width ai-start">
                <div className="form-container paper outline full-width">
                    <CheckoutForm />
                </div>

                <div className="summary full-width paper outline">
                    <h3 className="disable-guitters">Order Summary</h3>

                    <div className="summary-body box column small-gap ai-start">
                        <SammaryData initialItems={products} userid={userId} />

                        <div className="box column ai-start full-width" style={{ gap: 0 }}>
                            <h3 className="disable-guitters">
                                Your Products
                            </h3>

                            <div className="card-group box full-width small-gap">
                                {products.map(({ product }) => (
                                    <CardImage src={product.image} alt={product.title} key={product.id} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Checkout

