const KeyOfConstrains = () => {
  function extractAdnConvert<T extends object, U extends keyof T>(
    obj: T,
    key: U
  ) {
    return "Value: " + obj[key];
  }

  console.log(extractAdnConvert({ name: "Max", age: "25" }, "age"));

  return <div>KeyOfConstrains</div>;
};
export default KeyOfConstrains;
