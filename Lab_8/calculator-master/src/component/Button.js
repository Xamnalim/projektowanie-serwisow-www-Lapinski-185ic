import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

//Wyeksportowanie komponentu klasowego Button
//odpowiedzialnego za pojedynczy przycisk klawiatury
export default class Button extends React.Component {
  //Określenie jakiego typu powinny być propsy
  static propTypes = {
    name: PropTypes.string,
    orange: PropTypes.bool,
    wide: PropTypes.bool,
    clickHandler: PropTypes.func,
  };

  //Funkcja obsługująca przyciśnięcie klawisza
  //po kliknięciu zostaje wywoałana funkcja clickHandler wraz
  // z nazwą przycisku przekazaną w props.name
  handleClick = () => {
    this.props.clickHandler(this.props.name);
  };

  //Komponent Button zwraca diva zawierającego pojedynczy przycisk
  render() {
    //Lista zawierająca parametry określające wygląd diva
    //wewnątrz którego jest przycisk
    //jeżeli został przekazany prop.orange, do listy zostaje dodana wartość "orange"
    //jeżeli został przekazany prop.wide, do listy zostaje dodana wartość "wide".
    //Lista ta zostaje przekazana jako wartość parametry className w znaczniku div.
    const className = [
      "component-button",
      this.props.orange ? "orange" : "",
      this.props.wide ? "wide" : "",
    ];

    return (
      <div className={className.join(" ").trim()}>
        <button onClick={this.handleClick}>{this.props.name}</button>
      </div>
    );
  }
}
