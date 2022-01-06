export const roundPrice = (input: number): number=> {
  const integer = Math.floor(input);
  const lastDigit = parseInt(integer.toString().charAt(integer.toString().length-1));
  const remainder = (lastDigit%5) === 0? 0 : 5 - (lastDigit%5);
  return remainder+input;
}
