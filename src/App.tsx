import Starter from "./04-Generics/GenericsBasics";

const App = () => {
  return (
    <>
      <h1 className="text-2xl font-bold">Hello, Type!</h1>
      {/* Ejemplo de TypeGuards2 */}
      <input
        id="ejemplo"
        type="text"
        placeholder="write on me"
        className=" text-2xl border border-black py-1 my-4"
      ></input>
      <Starter />
    </>
  );
};

export default App;
