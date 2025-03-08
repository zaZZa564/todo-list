import React from "react";
import logo from '../img/logo.svg'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = [];
  }

  render() {
    return (
      <div className="header">
        <div className="header logo">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="header about">placeholder</div>
        <div className="header singIn"></div>
        <div className="header registration"></div>
      </div>
    );
  }
}

export default Header;