const ReturnType = () => {
  const add = (a: number, b: number) => {
    return a.toString() + b.toString();
  };

  console.log(add(1, 2));

  function logMessage(message: string): void {
    console.log(message);
    // No hay valor de retorno
  }

  logMessage("Hello, TypeScript!");

  return <div>ReturnType</div>;
};
export default ReturnType;
