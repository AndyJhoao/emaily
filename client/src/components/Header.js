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
          <li key="1"><PaymentClassic/></li>,
          <li key="2" style={{margin:'0 10px'}}>Credits: {this.props.auth.credits}</li>,
          <li key="3"><a href="/api/logout">Log out</a></li> ]
        ;
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to={this.props.auth ?"/surveys":"/"} href="#" className="brand-logo" style={{ paddingLeft: "10px" }}>
            Emaily
          </Link>
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
