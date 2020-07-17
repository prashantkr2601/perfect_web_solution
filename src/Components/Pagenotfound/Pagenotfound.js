import React, { Component } from "react";
import "./Pagenotfound.css";
import Aux from "react-aux";

class Pagenotfound extends Component {
  render() {
    return (
      <Aux>
        <div className="pagenotfound">
        <ul>
          <li>404</li>
          <li>Page not Found!</li>
        </ul>
        </div>
      </Aux>
    );
  }
}
export default Pagenotfound;