const LiteralTypes = () => {
  // * Literal Alias
  type Direction = "left" | "right" | "up" | "down";
  type Inputs = number | string;
  type ResultConversion = "as-number" | "as-text";

  // * Literal Types
  //  Ejemplo 1

  const move = (direction: Direction) => {
    console.log(direction);
  };
  move("left");

  //  Ejemplo 2
  function combine(
    input1: Inputs,
    input2: Inputs,
    resultConversion: ResultConversion
  ) {
    let result;
    if (
      (typeof input1 === "number" && typeof input2 === "number") ||
      resultConversion === "as-number"
    ) {
      result = +input1 + +input2;
    } else {
      result = input1.toString() + input2.toString();
    }
    return result;
  }

  console.log(combine(1, 2, "as-number"));
  console.log(combine("1", "2", "as-number"));
  console.log(combine("1", "2", "as-text"));

  return <div>Literal Types</div>;
};
export default LiteralTypes;
