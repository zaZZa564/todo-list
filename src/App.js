import React from "react";
import Header from "./components/Header";
import Section1 from "./components/sections/Section-1";
import Section2 from "./components/sections/Section-2";
import Section3 from "./components/sections/Section-3";

class App extends React.Component {
  render() {
    return(
      <div>
        <Header />
        <div className="sections">
          <Section1 />
          <Section2 />
          <Section3 />
        </div>
        <div className="footer-placeholder"></div>
      </div>
    );
  }
}

export default App;