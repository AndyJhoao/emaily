import React, { Component } from "react";
import { connect } from "react-redux";
import {Link} from "react-router-dom";
import PaymentClassic from "./payments/PaymentClassic";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login with Google</a>
          </li>
        );
      default:
        return [
          <li key="1" style={{padding:"0px 10px"}}><Link to={this.props.auth ?"/surveys":"/"} >Mis Encuestas</Link></li>,
          <li key="2"><PaymentClassic/></li>,
          <li key="3" style={{margin:'0 10px'}}>Creditos: {this.props.auth.credits}</li>,
          <li key="4"><a href="/api/logout">Cerrar sesión<i className="material-icons right" style={{ marginLeft:"2px", marginTop:"1px"}}>exit_to_app</i></a></li> ]
        ;
    }
  }
  render() {
    return (
      <nav className="nav-bar-fix">
        <div className="nav-div" style={{ background:"#333C83", opacity: 0.9}}>
          <div className="nav-div-logo">
            <img src="https://firebasestorage.googleapis.com/v0/b/emaily-956d8.appspot.com/o/emaily.png?alt=media&token=24c103b8-87eb-4324-92f8-e74e2307ea1c" alt="logo" style={{ width:"68px", height:"64px"}}></img>
            <Link to={"/"} className="emaily-logo" style={{color:"#EEEEEE"}}>
              Emaily
            </Link>
          </div>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
