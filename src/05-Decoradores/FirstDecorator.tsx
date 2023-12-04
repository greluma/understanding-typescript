const FirstDecorator = () => {
  // * Decorator
  // A decorator is a special kind of declaration that can be attached to a class declaration, method, accessor, property, or parameter. Decorators use the form @expression, where expression must evaluate to a function that will be called at runtime with information about the decorated declaration.

  // * Necesito Babel para que funcionen los decoradores

  /*   function Logger(constructor: Function) {
    console.log("Logging...");
    console.log(constructor);
  } */

  // @Logger
  class Person {
    name = "Manolo";

    constructor() {
      console.log("Person constructor");
    }
  }

  const person = new Person();
  console.log(person);

  return <div>FirstDecorator</div>;
};
export default FirstDecorator;
