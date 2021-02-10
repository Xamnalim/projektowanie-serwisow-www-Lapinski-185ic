import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import "./App.css";

//Wyeksportowanie komponentu klasowego App będącego głównym komponentem aplikacji
export default class App extends React.Component {
  //Stan początkowy aplikacji
  state = {
    total: null,
    next: null,
    operation: null,
  };

  //Funkcja obsługująca przyciśnięcie przycisku;
  //przyciśnięcie powoduje aktualizację stanu aplikacji na podstawie
  //wyniku działania funkcji calculate.
  //Do funkcji calculate zostaje przekazany aktualny stan aplikacji i nazwa przycisku.
  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };

  // Komponent App zwraca div zawierającego dwa komponenty:
  // - Display - odpowiedzialny za wyświetlacz kalkulatora
  // - ButtonPanel - odpowiedzialny za klawiaturę kalkulatora
  // Do Display zostaje przekazana wartość która ma zostać wyświetlona
  // Do ButtonPanel zostaje przekazana obsługa przyciśnięcia przycisku
  render() {
    return (
      <div className="component-app">
        <Display value={this.state.next || this.state.total || "0"} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
