import React, {Component} from "react";
import StripeCheckout from "react-stripe-checkout";

class Payments extends Component{
    render(){
        return(
            <form action="/api/checkout/credits" method="POST">
            <button type="submit">
              Checkout
            </button>
          </form>
           
        )
    }
}
export default Payments;