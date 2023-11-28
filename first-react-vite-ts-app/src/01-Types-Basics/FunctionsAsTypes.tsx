const FunctionsAsTypes = () => {
  const add = (a: number, b: number) => a + b;

  const combinedFunction: (a: number, b: number) => number = add;
  console.log(combinedFunction(1, 2));

  return <div>FunctionsAsTypes</div>;
};
export default FunctionsAsTypes;
