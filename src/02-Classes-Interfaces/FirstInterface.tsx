const FirstInterface = () => {
  interface Greetable {
    name: string;
    greet(phrase: string): void;
  }

  // * Sirven para definir la estructura de un objeto, una clase o una función y poder reutilizarla en otros objetos o clases

  // * Ejemplo de una interfaz para un objeto
  const person: Greetable = {
    name: "John",
    greet: (phrase) => {
      console.log(`${phrase} ${person.name}`);
    },
  };

  // person.greet("Hello, World!");

  // * Ejemplo de una interfaz para una clase
  class Person implements Greetable {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    greet(phrase: string) {
      console.log(`${phrase} ${this.name}`);
    }
  }

  const newPerson = new Person("John");
  newPerson.greet("Hello, World!");

  // * Ejemplo de una interfaz para una función
  interface AddFn {
    (a: number, b: number): number;
  }

  const add: AddFn = (n1: number, n2: number) => {
    return n1 + n2;
  };

  console.log(add(2, 3));

  return <div>FirstInterface</div>;
};
export default FirstInterface;
