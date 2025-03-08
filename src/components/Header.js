import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = [];
  }

  render() {
    return (
      <div className="header">
        <div className="header logo"></div>
        <div className="header about"></div>
        <div className="header singIn"></div>
        <div className="header registration"></div>
      </div>
    );
  }
}

export default Header;