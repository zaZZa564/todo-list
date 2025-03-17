import React from "react";
import Header from "./components/Header";
import Section1 from './components/sections/Section-1';

class App extends React.Component {
  render() {
    return(
      <div>
        <Header />
        <div className="sections">
          <Section1 />
        </div>
        <div className="footer-placeholder"></div>
      </div>
    );
  }
}

export default App;