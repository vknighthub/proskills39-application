
import { PayPalButtons } from "@paypal/react-paypal-js"
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

type PageProps = {
    amount: string;
}



const PaypalCheckoutButton = ({ amount }: PageProps) => {

    const [paidFor, setPaidFor] = useState(false)
    const [error, setError] = useState("")
    const [isSdkReady, setIsSdkReady] = useState(false);

    useEffect(() => {
        setIsSdkReady(true);
    }, []);

    const handleApproveOrder = (orderId: any) => {
        // call back function to fullfill order

        setPaidFor(true); //
    }

    if (paidFor) {
        // Display message sucess
        Swal.fire({
            position: 'center',
            icon: 'error',
            color: 'red',
            title: 'Success',
            text: `Thank you`,
        })
    }
    if (error) {
        Swal.fire({
            position: 'center',
            icon: 'error',
            color: 'red',
            title: 'Oops...',
            text: `${error}`,
        })
    }


    console.log(isSdkReady)
    return (
        <>
            {isSdkReady &&
                <PayPalButtons
                    style={{
                        color: "silver",
                        layout: "horizontal",
                        height: 48,
                        tagline: false,
                        shape: "pill"
                    }}

                    disabled={false}
                    forceReRender={[amount]}
                    fundingSource={undefined}

                    onClick={(data, actions) => {
                        const hasAlreadyBought = false

                        if (hasAlreadyBought) {
                            setError('Already available bought');
                            return actions.reject()
                        } else {
                            return actions.resolve()
                        }


                    }}
                    createOrder={(data, actions) => {
                        return actions.order.create({
                            purchase_units: [
                                {
                                    description: "Amount",
                                    amount: {
                                        value: amount
                                    }
                                }
                            ]
                        })
                    }}
                    onApprove={async (data, actions) => {
                        const order = await actions.order?.capture();
                        console.log(order)
                        handleApproveOrder(data.orderID)
                    }}
                    onError={(err: any) => {
                        setError(err);
                    }}
                />
            }
        </>
    )

}
export default PaypalCheckoutButton