const IntersectionTypes = () => {
  interface HasName {
    name: string;
  }

  interface CanSayHi {
    sayHi: () => string;
  }

  type Person = HasName & CanSayHi;

  const person: Person = {
    name: "John",
    sayHi: () => "Hello, " + person.name,
  };

  console.log(person.sayHi()); // Outputs: Hello, John

  return <div>IntersectionTypes</div>;
};
export default IntersectionTypes;
