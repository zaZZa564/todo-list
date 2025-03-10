import React from "react";
import logo from "../img/logo.svg"

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = [];
  }

  render() {
    return (
      <div className="header">
        <div className="headerEl logo">
          <img src={logo} alt="logo"></img>
          <div>todoist</div>
        </div>
        <div className="headerEl about">about</div>
        <div className="headerEl singIn">sing in</div>
        <div className="headerEl registration">start for free</div>
      </div>
    );
  }
}

export default Header;