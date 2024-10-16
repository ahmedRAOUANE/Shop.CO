"use client";

import PaymentMethods from "./PaymentMethods";

const inputClassName = "full-width rounded outline"

const CheckoutForm = () => {
    return (
        <form className="box column">
            <div className="box ai-start">
                <div className="billing-address box column full-width">
                    <div className="user-data box small-gap column ai-start full-width">
                        <h3 className="disable-guitters">User Data</h3>

                        <input type="email" name="user-email" id="userEmail" className={inputClassName} placeholder="Email" />
                        <input type="text" name="name" id="name" className={inputClassName} placeholder="name" />
                    </div>

                    <div className="address-data box small-gap column ai-start">
                        <h3 className="disable-guitters">Address</h3>

                        <input type="text" name="user-address" id="adress" className={inputClassName} placeholder="Address" />
                        <input type="text" name="sity" id="sity" className={inputClassName} placeholder="City" />

                        <div className="box">
                            <input type="text" name="state" id="state" className={inputClassName} placeholder="State" />
                            <input type="number" name="zip" id="zip" className={inputClassName} placeholder="Zip" />
                        </div>
                    </div>
                </div>

                <div className="payment full-width box column">
                    <div className="box column small-gap ai-start">
                        <h3 className="disable-guitters">Payment</h3>

                        <input type="text" placeholder="Name on Card" className={inputClassName} />
                        <input type="text" placeholder="Card Number" className={inputClassName} />
                        <input type="text" placeholder="Exp Mounth" className={inputClassName} />
                        <div className="box">
                            <input type="text" placeholder="Exp year" className={inputClassName} />
                            <input type="number" placeholder="CVV" className={inputClassName} />
                        </div>
                    </div>

                    <div className="box column ai-start">
                        <h3 className="disable-guitters">Accepted Cards</h3>

                        <PaymentMethods />
                    </div>
                </div>
            </div>

            <div className="box small-gap nowrap full-width">
                <input type="checkbox" name="checkbox" id="checkbox" className="full-width flex-0" />
                <label htmlFor="checkbox" className="full-width">Shipping address same as billing</label>
            </div>

            <button className="rounded full-width">Contenue To Checkout</button>
        </form>
    )
}

export default CheckoutForm