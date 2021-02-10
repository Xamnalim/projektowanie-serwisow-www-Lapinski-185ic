import React from "react";
import PropTypes from "prop-types";

import "./Display.css";

//Wyeksportowanie komponentu klasowego Display
// odpowiedzialnego za ekran kalkulatora
export default class Display extends React.Component {
  
  //Określenie jakiego typu wartość powinna być w props.value
  static propTypes = {
    value: PropTypes.string,
  };

  //Komponent Display zwraca diva z wartością przekazaną pod props.value
  render() {
    return (
      <div className="component-display">
        <div>{this.props.value}</div>
      </div>
    );
  }
}
