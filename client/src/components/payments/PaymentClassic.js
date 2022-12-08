import React, {Component} from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../../actions"

class PaymentsClassic extends Component{
    render(){
        return(
            <StripeCheckout 
        name={"Emaily!"}
            description={"Ejemplo: 4242 4242 4242 4242 4242"}
            amount={500}
            token={token=>this.props.handleToken(token)}
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
            
            >
                <button className="btn">Añadir Fondos</button>
            </StripeCheckout>
        )
    }
}
export default connect(null,actions)(PaymentsClassic);