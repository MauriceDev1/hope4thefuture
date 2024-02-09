import { Component, createSignal, onMount } from "solid-js";
import axios from "axios";
import { useNavigate } from "@solidjs/router";

interface PaymentProps {
    amount: number
}

const Payment: Component<PaymentProps> = ({amount}) => {
    const [buttonState, setButtonState] = createSignal(false);
    const [loading, setLoading] = createSignal(false)
    const navigate = useNavigate()

    onMount(() => {
        var sdk = new window.YocoSDK({
            publicKey: 'pk_live_8f0cd6d3M4meR4G37a14'
        });
        
        // const value = amount.parseInt()
        // Create a new dropin form instance
        var inline = sdk.inline({
            layout: 'basic',
            amountInCents: amount * 100,
            currency: 'ZAR'
        });
        // this ID matches the id of the element we created earlier.
        inline.mount('#card-frame');

        var form = document.getElementById('payment-form');
        // var submitButton = document.getElementById('pay-button');
        if(form !== null){
            form.addEventListener('submit', function (event) {
                event.preventDefault()
                // Disable the button to prevent multiple clicks while processing
                setLoading(true);
                setButtonState(true);
                // This is the inline object we created earlier with the sdk
                inline.createToken().then(function (result: any) {
                // Re-enable button now that request is complete
                // (i.e. on success, on error and when auth is cancelled)
                setButtonState(false);
                if (result.error) {
                    const errorMessage = result.error.message;
                    errorMessage && alert("error occured: " + errorMessage);
                } else {
                    const token = result;
                    // alert("card successfully tokenised: " + token.id);
                    axios.post('https://us-central1-hopeforthefuture-19d04.cloudfunctions.net/api/payment', {
                        amount: amount * 100,
                        token: token.id
                      })
                      .then(function (response) {
                        console.log(response);
                        if(response.status === 200){
                            navigate('/notification');
                        } else {
                            alert("try again! something went wrong!")
                        }
                        setLoading(false);
                      })
                      .catch(function (error) {
                        console.log(error);
                        setLoading(false);
                      });
                }
                }).catch(function (error: string) {
                // Re-enable button now that request is complete
                setButtonState(false);
                setLoading(true);
                alert("error occured: " + error);
                });
            });
        }
    });

    return (
        <div class="w-full py-10">
            <div class="sm:w-5/12">
                <form id="payment-form" method="post">
                    <div class="one-liner">
                        <div id="card-frame">
                        </div>
                        <button 
                            id="pay-button" 
                            class="mt-10 bg-black w-40 text-white h-12 rounded-sm"
                            disabled={buttonState()}
                        >
                        {loading() ? <div class="loader2 m-auto"></div> :`PAY ZAR ${amount.toString()}` }
                        </button>
                    </div>
                    <p class="success-payment-message" />
                </form>
            </div>
        </div>
    )
}

export default Payment;