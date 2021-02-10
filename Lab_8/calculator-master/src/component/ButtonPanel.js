import Button from "./Button";
import React from "react";
import PropTypes from "prop-types";

import "./ButtonPanel.css";

//Wyeksportowanie komponentu klasowego ButtonPanel
// odpowiedzialnego za klawiaturę kalkulatora
export default class ButtonPanel extends React.Component {

  //Określenie jakiego typu wartość powinna być w props.clickHandler
  static propTypes = {
    clickHandler: PropTypes.func,
  };

  //Funkcja wywoływana przy przyciśnięciu przycisku
  //jako parametr oczekuję nazwy przycisku,
  //następnie wywołuje funkcję clickHandler z otrzymanym parametrem
  handleClick = buttonName => {
    this.props.clickHandler(buttonName);
  };

  //Komponent ButtonPanel zwraca diva zawierającego rzędy przycisków
  //potrzebnych do obsługi kalkulatora
  //Do każdego z przycisków zostaje przekazana:
  // jego nazwa
  // funkcja obsługująca przyciśnięcie klawisza
  // parametr określający czy przycisk ma być szeroki
  // parametry określający czy przycisk ma być pomarańczowy
  render() {
    return (
      <div className="component-button-panel">
        <div>
          <Button name="SQ" clickHandler={this.handleClick} wide />
          <Button name="SQRT" clickHandler={this.handleClick} wide />
        </div>
        <div>
          <Button name="AC" clickHandler={this.handleClick} />
          <Button name="+/-" clickHandler={this.handleClick} />
          <Button name="%" clickHandler={this.handleClick} />
          <Button name="÷" clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Button name="7" clickHandler={this.handleClick} />
          <Button name="8" clickHandler={this.handleClick} />
          <Button name="9" clickHandler={this.handleClick} />
          <Button name="x" clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Button name="4" clickHandler={this.handleClick} />
          <Button name="5" clickHandler={this.handleClick} />
          <Button name="6" clickHandler={this.handleClick} />
          <Button name="-" clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Button name="1" clickHandler={this.handleClick} />
          <Button name="2" clickHandler={this.handleClick} />
          <Button name="3" clickHandler={this.handleClick} />
          <Button name="+" clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Button name="0" clickHandler={this.handleClick} wide />
          <Button name="." clickHandler={this.handleClick} />
          <Button name="=" clickHandler={this.handleClick} orange />
        </div>
      </div>
    );
  }
}
