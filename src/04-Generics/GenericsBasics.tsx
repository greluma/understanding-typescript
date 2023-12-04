const GenericsBasics = () => {
  const names: Array<string> = ["mari", "luis", "jose"];
  console.log(names[0].toUpperCase());

  // * My generic function
  function merge<T extends object, U extends object>(obj: T, obj2: U) {
    return Object.assign(obj, obj2);
  }
  const mergedObj = merge({ name: "Mario" }, { age: 30 });
  console.log(mergedObj.age);

  interface Lengthy {
    length: number;
  }

  function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = "Got no value.";
    if (element.length === 1) {
      descriptionText = "Got 1 elements.";
    } else if (element.length > 1) {
      descriptionText = "Got " + element.length + " elements.";
    }
    return [element, descriptionText];
  }

  console.log(countAndDescribe("Hi there!"));

  return <div>GenericsBasics</div>;
};
export default GenericsBasics;
