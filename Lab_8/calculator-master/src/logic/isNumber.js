//Funkcja testuje czy przekazana wartość pasuje do
//kryterium określonego przez wyrażenie regularne
export default function isNumber(item) {
  return /[0-9]+/.test(item);
}
